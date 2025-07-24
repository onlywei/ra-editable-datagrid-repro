import { EditableDatagrid, RowForm } from '@react-admin/ra-editable-datagrid';
import {
	DateField,
	DateInput,
	List,
	ListActions,
	SelectField,
	SelectInput,
	TextField,
	TextInput,
	required,
} from 'react-admin';

const professionChoices = [
	{ id: 'actor', name: 'Actor' },
	{ id: 'singer', name: 'Singer' },
	{ id: 'other', name: 'Other' },
];

const ArtistForm = () => (
	<RowForm defaultValues={{ firstname: 'John', name: 'Doe' }}>
		<TextField source="id" />
		<TextInput source="firstname" validate={required()} />
		<TextInput source="name" validate={required()} />
		<DateInput label="Born" source="dob" validate={required()} />
		<SelectInput choices={professionChoices} label="Profession" source="prof" />
	</RowForm>
);

const ArtistList = () => (
	<List actions={<ListActions hasCreate />} empty={false} sort={{ field: 'id', order: 'DESC' }}>
		<EditableDatagrid createForm={<ArtistForm />} editForm={<ArtistForm />} rowClick="edit">
			<TextField source="id" />
			<TextField source="firstname" />
			<TextField source="name" />
			<DateField label="Born" source="dob" />
			<SelectField choices={professionChoices} label="Profession" source="prof" />
		</EditableDatagrid>
	</List>
);

export default ArtistList;
