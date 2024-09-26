import {createContext, useContext, useState} from "react";
import AccordionItem from "./AccordionItem.jsx";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if(!ctx) {
        throw new Error("useAccordionContext must be used within an Accordion component");
    }

    return ctx;
}

const Accordion = ({children, className}) => {
    const [openItemId, setOpenItemId] = useState();

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId,
       toggleItem,
    };

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    );
};

export default Accordion;

Accordion.Item = AccordionItem;