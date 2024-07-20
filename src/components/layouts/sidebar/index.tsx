import Image from "next/image";
import styles from './sidebar.module.css';
import Collapse from '../../images/collapse.svg';
import Profile from '../../images/profile.svg';
import Account from '../../images/account.svg';
import Notification from '../../images/notification_2.svg';
import Payment from '../../images/payment.svg';
import Data from '../../images/data.svg';
import Region from '../../images/region.svg';
import Expand from '../../images/expand.svg'

export default function Sidebar() {
  return (
    <aside className="absolute left-0 top-[61px] p-6 max-w-76 h-985px ">
      <div className="mb-[24px] flex text-[24px] font-[600] h-[29px]">
        <Image
          src={Collapse}
          alt="Drop down"
          width={24}
          height={24}
        />
        <p className="ml-[8px] text-[#141414]">Settings</p>
      </div>
      <div className="flex flex-col">
        <div className={styles.Settings}>
          <Image
            src={Profile}
            alt="Profice Picture"
            width={20}
            height={20}
          />
          <p>Profile Settings</p>
        </div>
        <div className={styles.Settings}>
          <Image
            src={Account}
            alt="Account Security"
            width={20}
            height={20}
          />
          <p>Account Security</p>
          <Image
            src={Expand}
            alt="Expand Settings"
            width={16}
            height={16}
            className={styles.expand}
          />
        </div>
        <div className={styles.Settings}>
          <Image
            src={Notification}
            alt="Drop down"
            width={20}
            height={20}
          />
          <p>Notificaton Settings</p>
        </div>
        <div className={styles.Settings}>
          <Image
            src={Payment}
            alt="Drop down"
            width={20}
            height={20}
          />
          <p className="text-white">Payment Information</p>
        </div>
        <div className={styles.Settings}>
          <Image
            src={Data}
            alt="Drop down"
            width={20}
            height={20}
          />
          <p>Data and Provacy Settings</p>
        </div>
        <div className={styles.Settings}>
          <Image
            src={Region}
            alt="Drop down"
            width={20}
            height={20}
          />
          <p>Language and Region</p>
        </div>
      </div>
    </aside>
  );
}
