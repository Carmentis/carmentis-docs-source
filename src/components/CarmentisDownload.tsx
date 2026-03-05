import { useEffect, useState } from 'react';

// https://github.com/Carmentis/carmentis-desk/releases/download/v1.2.2/carmentis-desk_1.2.2_.x64.dmg
// https://github.com/Carmentis/carmentis-desk/releases/download/v1.2.2/carmentis-desk_1.2.2_x64.dmg

const releasedVersions: string[]   = ["1.7.0", "1.5.0", "1.2.2"]
export function CarmentisDownload() {
  const content = releasedVersions.map((version, index) => {
    const release = {
      version,
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
          url: "x64-setup.exe"
        },
        {
          name: "MacOS x86_64",
          platform: "macos",
          arch: '',
          url: "x64.dmg"
        },
      ]
    };
    const releasesLink = release.releasesLink.replace('VERSION', release.version);
    const packageReleaseLink = release.packageReleaseLink.replace('VERSION', release.version);
    const baseLink = releasesLink +  packageReleaseLink;
    return   <div>
      <h3>Carmentis Desk v{release.version} {index === 0 ? '(Latest)' : ''}</h3>

      <ul>
        {release.links.map((link, index) => (
            <li key={index}>
              <a href={ baseLink +  '_' + link.url} download>
                Carmentis Desk {link.name} {link.arch} (Version {release.version})
              </a>
            </li>
        ))}
      </ul>
    </div>
  });

  return <>{content.map((item, index) => <div key={index}>{item}</div>)}</>

}
