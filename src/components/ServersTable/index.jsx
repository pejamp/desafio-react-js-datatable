import { useContext } from 'react';
import { DatatableContext } from '../../context/DatatableContext';

export function ServersTable() {
  const { 
    servers, 
    isSelected, 
    setIsSelected 
  } = useContext(DatatableContext);

  return (
    <table>
      <caption>Sumário dos recursos dos servidores</caption>
      <thead>
        <tr>
          <th scope="col">Select</th>
          <th scope="col">Hostname</th>
          <th scope="col">Memória</th>
          <th scope="col">vCPUs</th>
          <th scope="col">Disco</th>
          <th scope="col">IP</th>
        </tr>
      </thead>
      <tbody>
        {servers.map(server => (
          <tr key={server.id_vm}>
            <td>
              <input 
                type="checkbox" 
                value={isSelected}
                onChange={(e) => {
                  if (e.target.checked) {
                    setIsSelected([
                      ...isSelected,
                      server, 
                    ]);
                  } else {
                    setIsSelected(
                      isSelected.filter((item) => item.id_vm !== server.id_vm),
                    );
                  }
                }}
              />
            </td>
            <td>{server.hostname}</td>
            <td>{server.configuracao.memoryProvisioned} GB</td>
            <td>{server.configuracao.cpuProvisioned} vCPUs</td>
            <td>{server.configuracao.totalDiskGB} GB</td>
            <td>{server.configuracao.ip}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}