import { useEffect, useState } from 'react';



const latestRelease = {
  version: '1.2.2',
  releasesLink: "https://github.com/Carmentis/carmentis-desk/releases/download/vVERSION/",
  packageReleaseLink: 'carmentis-desk_VERSION',
  links: [
    {
      name: "Linux x86_64",
      platform: "linux",
      arch: '',
      url: "amd64.deb"
    },
    {
      name: "Windows x86_64",
      platform: "windows",
      arch: '',
      url: ".x64-setup.exe"
    },
    {
      name: "MacOS x86_64",
      platform: "macos",
      arch: '',
      url: ".x64.dmg"
    },
  ]
}
export function CarmentisDownload() {
  const releasesLink = latestRelease.releasesLink.replace('VERSION', latestRelease.version);
  const packageReleaseLink = latestRelease.packageReleaseLink.replace('VERSION', latestRelease.version);
  const baseLink = releasesLink +  packageReleaseLink;
  return <>
    <div>
      <h3>Carmentis Desk v{latestRelease.version}</h3>

      <ul>
        {latestRelease.links.map((link, index) => (
          <li key={index}>
            <a href={ baseLink +  '_' + link.url} download>
              Carmentis Desk {link.name} {link.arch} (Version {latestRelease.version})
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
}
