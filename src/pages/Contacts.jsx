
import { fetchContacts } from "components/redux/contacts/operations";
// import { seectIsLoading } from "components/redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";

import ContactForm from "components/ContactsForm/ContactsForm";

export default function Contacts() {
    const dispatch = useDispatch();
    // const isLoading = useSelector(seectIsLoading);

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    return (
        <>
            <h1>Your contacts!</h1>
            <ContactForm />
            <Filter/>
            <ContactList />
        </>
    )
}




 