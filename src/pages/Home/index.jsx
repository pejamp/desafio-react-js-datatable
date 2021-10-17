import DefaultLayout from '../../components/DefaultLayout';
import { ServersTable } from '../../components/ServersTable';
import { Summary } from '../../components/Summary';
import { DatatableProvider } from '../../context/DatatableContext';

function Home() {
  return (
    <DatatableProvider>
      <DefaultLayout>
        <Summary />
        <ServersTable />
      </DefaultLayout>
    </DatatableProvider>
  );
}

export default Home;