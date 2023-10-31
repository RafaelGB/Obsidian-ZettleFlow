import React, { useEffect, useRef, useState } from "react";
import { ActionAccordionProps } from "./typing";
import { c } from "architecture";
import { Icon } from "architecture/components/icon";
import { actionsStore } from "architecture/api";

export function ActionAccordion(props: ActionAccordionProps) {
  const { action, onRemove } = props;
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className={c("accordion")}>
      <div className={c("accordion-header")}>
        <div className={c("accordion-header-info")}>
          <label>{action.type}</label>
          <Icon name={actionsStore.getIconOf(action.type)} />
        </div>
        <div className={c("accordion-header-actions")}>
          <button onClick={() => setAccordionOpen(!accordionOpen)}>
            <Icon name="down-chevron-glyph" />
          </button>
          <button onClick={() => onRemove()}>
            <Icon name="cross" />
          </button>
        </div>
      </div>
      {accordionOpen && (
        <div className={c("accordion-body")}>
          <AccordionBody {...props} />
        </div>
      )}
    </div>
  );
}

function AccordionBody(props: ActionAccordionProps) {
  const { modal, action } = props;
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const body = bodyRef.current;
    if (body) {
      actionsStore
        .getAction(action.type)
        .settings(bodyRef.current, modal, action);
    }
  }, []);
  return <div ref={bodyRef} />;
}
