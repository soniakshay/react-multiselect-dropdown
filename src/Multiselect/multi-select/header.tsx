import React from "react";

import { useMultiSelect } from "../hooks/use-multi-select";

export const DropdownHeader = ({expanded,setExpanded}) => {
  const { t, value, options, valueRenderer,onChange } = useMultiSelect();

  const noneSelected = value.length === 0;
  const allSelected = value.length === options.length;
  const customText = valueRenderer && valueRenderer(value, options);



  const onRemoveOption = (e,val) => {
    e.stopPropagation();
    const filterOpions =  value.filter(({value}) =>  value !== val)
    onChange(filterOpions)
    setExpanded(expanded)
  }
  const getSelectedText = () =>  {
    return (
        <div className={'dropdown-selected-label-main'}>
          {
            value.map((s) => {
              return <span className={'dropdown-selected-label'}>
                    <span className={'label'}>
                      {s.label}
                    </span>
                  <span className={'cancelBtn'}  onClick={(e) => onRemoveOption(e,s.value)} >
                    X
                  </span>

              </span>
            })
          }
        </div>
    )
  };

  return noneSelected ? (
    <span className="gray">{customText || t("selectSomeItems")}</span>
  ) : (
    <span>
      {getSelectedText()}
    </span>
  );
};
