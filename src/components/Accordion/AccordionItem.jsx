const AccordionItem = ({id, className, title, children}) => {
    return (
        <li className={className}>
            {children}
        </li>
    );
};

export default AccordionItem;
