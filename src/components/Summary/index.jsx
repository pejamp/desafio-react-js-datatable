import { useContext } from "react";
import { DatatableContext } from "../../context/DatatableContext";

import './styles.css';

export function Summary() {
  const { isSelected } = useContext(DatatableContext);

  const summary = isSelected.reduce((acc, server) => {
    acc.servers += 1;
    acc.memory += server.configuracao.memoryProvisioned;
    acc.cpu += server.configuracao.cpuProvisioned;
    acc.disk += server.configuracao.totalDiskGB;

    return acc;
  }, {
    servers: 0,
    memory: 0,
    cpu: 0,
    disk: 0,
  })
  
  return (
    <section className="summary">
      <header className="header">
        <h2>Sumário dos recursos dos servidores</h2>
      </header>
      
      <table className="content">
        <tr>
            <th scope="row">Servidores Selecionados</th>
            <td>{summary.servers} servidores selecionados</td>
        </tr>
        <tr>
            <th scope="row">Total de Memória</th>
            <td>{summary.memory} GB</td>
        </tr>
        <tr>
            <th scope="row">Total de CPUs</th>
            <td>{summary.cpu} vCPUs</td>
        </tr>
        <tr>
            <th scope="row">Total de Discos</th>
            <td>{summary.disk} GB</td>
        </tr>
      </table>
    </section>
  );
}