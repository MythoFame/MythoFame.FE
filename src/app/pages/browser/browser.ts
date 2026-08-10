import { Component, computed, OnInit, resource, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'browser',
  imports: [],
  templateUrl: './browser.html',
  encapsulation: ViewEncapsulation.None
})
export class Browser implements OnInit {
  private readonly _servers = resource({
    loader: async () => {
      const response = await fetch('https://mythologicinteractive.com/SFDGameServices.asmx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/soap+xml; charset=utf-8',
          SOAPAction: 'https://mythologicinteractive.com/Games/SFD/GetGameServers'
        },
        body: `
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope">
            <soap:Body>
              <GetGameServers xmlns="https://mythologicinteractive.com/Games/SFD">
                <validationToken></validationToken>
              </GetGameServers>
            </soap:Body>
          </soap:Envelope>
        `
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.text();
    }
  });

  readonly servers = computed<BrowseData>(() => {
    if (!this._servers.hasValue()) {
      return {
        totalPlayers: 0,
        servers: []
      };
    }

    const text = this._servers.value();
    const parser = new DOMParser();
    const document = parser.parseFromString(text, 'text/xml');

    const parserError = document.querySelector('parsererror');
    if (parserError) {
      return {
        totalPlayers: 0,
        servers: []
      };
    }

    let totalPlayers = 0;
    let servers: ServerData[] = [];
    const elements: HTMLCollectionOf<Element> = document.getElementsByTagName('SFDGameServer');

    for (let i = 0; i < elements.length; i++) {
      totalPlayers += parseInt(elements[i].childNodes[7].textContent!);

      const data: ServerData = {
        ipv4: elements[i].childNodes[0].textContent!,
        ipv6: elements[i].childNodes[1].textContent!,
        lip: elements[i].childNodes[2].textContent!,
        port: Number.parseInt(elements[i].childNodes[3].textContent!),
        name: elements[i].childNodes[4].textContent!,
        gameMode: Number.parseInt(elements[i].childNodes[5].textContent!),
        mapName: elements[i].childNodes[6].textContent!,
        players: Number.parseInt(elements[i].childNodes[7].textContent!),
        maxPlayers: Number.parseInt(elements[i].childNodes[8].textContent!),
        bots: Number.parseInt(elements[i].childNodes[9].textContent!),
        hasPassword: elements[i].childNodes[10].textContent! === 'true',
        description: elements[i].childNodes[11].textContent!,
        version: elements[i].childNodes[12].textContent!,
        versionNumber: Number.parseInt(elements[i].childNodes[13].textContent!),
        instance: elements[i].childNodes[14].textContent!
      };

      servers.push(data);
    }

    return {
      totalPlayers: totalPlayers,
      servers: servers
    };
  });

  async ngOnInit(): Promise<void> {
    const servers = this.servers();
    console.log(servers);
  }
}

export type BrowseData = {
  totalPlayers: number;
  servers: ServerData[];
};

export type ServerData = {
  ipv4: string;
  ipv6: string;
  lip: string;
  port: number;
  name: string;
  gameMode: number;
  mapName: string;
  players: number;
  maxPlayers: number;
  bots: number;
  hasPassword: boolean;
  description: string;
  version: string;
  versionNumber: number;
  instance: string;
};
