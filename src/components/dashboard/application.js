import React from "react";
import {
  BsFillCalendar3WeekFill,
  BsChatQuote,
  BsFillFileEarmarkCheckFill,
} from "react-icons/bs";
import { AiOutlineShopping, AiOutlineMail } from "react-icons/ai";
import {
  RiBillLine,
  RiProjectorLine,
  RiContactsBookLine,
} from "react-icons/ri";

import { IoIosArrowDown } from "react-icons/io";

function Application() {
  return (
    <div className="application">
      <h5>APPLICATIONS</h5>
      <ul>
        <li className="icons">
          <span>
            <BsFillCalendar3WeekFill />
          </span>
          Calendar
          <span></span>
        </li>
        <li className="icons">
          <span>
            <BsChatQuote />
          </span>
          Chat
          <span className="hot-text">Hot</span>
        </li>
        <li className="icons">
          <span>
            <BsFillFileEarmarkCheckFill />
          </span>
          File Manager
          <span></span>
        </li>
        <li className="icons">
          <span>
            <AiOutlineShopping />
          </span>
          Ecommerce
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="icons">
          <span>
            <AiOutlineMail />
          </span>
          Email
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="icons">
          <span>
            <RiBillLine />
          </span>
          Invoices
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="icons">
          <span>
            <RiProjectorLine />
          </span>
          Projects
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <li className="icons">
          <span>
            <RiContactsBookLine />
          </span>
          Contacts
          <span>
            <IoIosArrowDown />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Application;
