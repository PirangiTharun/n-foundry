import React, {useState} from 'react';
import plus from '../assets/plus-circle.svg';
import minus from '../assets/minus-circle.svg';
import './FAQ.css';


const SingleElement = ({id,selected, setSelected, open, title, info}) => {
    const handleClick = () => {
        if(selected===id) setSelected(0);
        else setSelected(id);
    }
    return (
        <div className='singleContainer'>
            <div className='' onClick={handleClick}>
                <p>{title}</p>
                <img className='' src={open ? minus : plus}  alt="" />
            </div>
            {open && <p>{info}</p>}
        </div>
    );
}

const FAQ = () => {
    const titles = [
        {
            title: 'How does the voice control feature enhance user experience in the pharmaceutical setting?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
        {
            title: 'What are the security measures in place for data synchronisation, especially when dealing with sensitive pharmaceutical information?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
        {
            title: 'Are there any training requirements for users to fully utilise the smart glass apps features effectively?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
        {
            title: 'How does the voice control feature enhance user experience in the pharmaceutical setting?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
        {
            title: 'How does the voice control feature enhance user experience in the pharmaceutical setting?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
        {
            title: 'What are the security measures in place for data synchronisation, especially when dealing with sensitive pharmaceutical information?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
        {
            title: 'Are there any training requirements for users to fully utilise the smart glass apps features effectively?',
            info: 'Lorem ipsum dolor sit amet consectetur. Sit tortor pharetra et a pharetra vitae ipsum amet. Turpis odio scelerisque praesent laoreet purus. Viverra nulla porttitor auctor vitae convallis urna orci. Cursus in amet nam urna pharetra nulla et ipsum. Risus congue morbi aliquet egestas est venenatis purus. Mi nisl cras.'
        },
    ]
    const [selected, setSelected] = useState(1);
    return (
        <div className='faqContainer'>
            <div className='texts'>
                <p>FAQ</p>
                <h1>Have any Questions ?</h1>
            </div>
            <div>
                <SingleElement id={1} selected={selected} setSelected={setSelected} open={selected===1} title={titles[0].title} info={titles[0].info} />
                <SingleElement id={2} selected={selected} setSelected={setSelected} open={selected===2} title={titles[1].title} info={titles[1].info} />
                <SingleElement id={3} selected={selected} setSelected={setSelected} open={selected===3} title={titles[2].title} info={titles[2].info} />
                <SingleElement id={4} selected={selected} setSelected={setSelected} open={selected===4} title={titles[3].title} info={titles[3].info} />
                <SingleElement id={5} selected={selected} setSelected={setSelected} open={selected===5} title={titles[4].title} info={titles[4].info} />
                <SingleElement id={6} selected={selected} setSelected={setSelected} open={selected===6} title={titles[5].title} info={titles[5].info} />
                <SingleElement id={7} selected={selected} setSelected={setSelected} open={selected===7} title={titles[6].title} info={titles[6].info} />
            </div>

        </div>
    )
}

export default FAQ