import React, {useEffect, useState} from 'react';
import {MultiSelect} from "../Multiselect";



const PopoutSelect = () => {


    const data =  [
        { label: "Grapes 🍇", value: "grapes" },
        { label: "Mango 🥭", value: "mango" },
        { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    ];
   const [options,setOptions] = useState([]);
   useEffect(() => {
        let  key  =  'label';
        let value  =  'value';
        const opt: any = [];
        data.map((_,index) => {
            opt.push({
                label: data[index][key],
                value: data[index][value],

            })
        })

       setOptions(opt);
   },[])



    const [selected, setSelected] = useState([]);
    return (
        <div style={{width: '405px',margin: '50px'}}>
            <MultiSelect
                options={options}
                value={selected}
                hasSelectAll={true}
                onChange={setSelected}
                defaultIsOpen={true}
                labelledBy="Select"
            />
        </div>

    )
};

export default PopoutSelect;
