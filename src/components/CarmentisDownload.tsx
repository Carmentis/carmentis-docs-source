// Most recent version first. Add new releases at the top of the list.
const releasedVersions = [
  '1.33.0'
]

const RELEASES_URL = 'https://github.com/Carmentis/carmentis-desk/releases/download';

const platforms = [
  { name: 'Linux x86_64', suffix: 'amd64.deb' },
  { name: 'Windows x86_64', suffix: 'x64-setup.exe' },
  { name: 'macOS x86_64', suffix: 'x64.dmg' },
];

export function CarmentisDownload() {
  return (
    <>
      {releasedVersions.map((version, index) => {
        const baseLink = `${RELEASES_URL}/v${version}/carmentis-desk_${version}`;
        return (
          <div key={version}>
            <h3>Carmentis Desk v{version} {index === 0 ? '(Latest)' : ''}</h3>
            <ul>
              {platforms.map(({ name, suffix }) => (
                <li key={suffix}>
                  <a href={`${baseLink}_${suffix}`} download>
                    Carmentis Desk {name} (Version {version})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
