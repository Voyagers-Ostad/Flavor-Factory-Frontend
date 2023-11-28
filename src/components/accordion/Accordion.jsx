/* eslint-disable react/prop-types */
import AccordionItem from "../accordionItem/AccordionItem";

const Accordion = ({ data }) => {
  return (
    <div className="faq-section">
      <p className="faq-title">FAQ's</p>
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            title={el.title}
            text={el.text}
            num={i}
            key={el.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
