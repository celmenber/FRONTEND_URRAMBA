/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const AppEditor = (Props) => {
    const editor = useRef(null);
    const { detalles, setDetalles } = Props;

    return (
        <JoditEditor
            tabIndex={1}
            ref={editor}
            name={'detalles'}
            value={detalles}
            onBlur={newContent => setDetalles(newContent)} 
            onChange={newContent => setDetalles(newContent)}
        />
    );
};
export default AppEditor