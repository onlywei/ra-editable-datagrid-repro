import { Admin, Resource } from 'react-admin';
import { BASE_PATH } from './constants';
import dataProvider from './providers/dataProvider';
import ArtistList from './components/ArtistList';

export const MyAdmin = () => {
	return (
		<Admin
			basename={BASE_PATH}
			dataProvider={dataProvider()}
			loginPage={false}
			requireAuth
			title="RA Editable Datagrid Repro"
		>
        	<Resource name="artists" list={ArtistList} />
		</Admin>
	);
};
