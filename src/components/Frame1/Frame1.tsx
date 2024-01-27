import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';
import { Frame6Icon } from './Frame6Icon.js';
import { Group2Icon } from './Group2Icon.js';
import { Group3Icon } from './Group3Icon.js';
import { IconArrowIcon2 } from './IconArrowIcon2.js';
import { IconArrowIcon3 } from './IconArrowIcon3.js';
import { IconArrowIcon } from './IconArrowIcon.js';
import { ImgIcon2 } from './ImgIcon2.js';
import { ImgIcon } from './ImgIcon.js';
import { Rectangle6Icon } from './Rectangle6Icon.js';
import { Rectangle7Icon } from './Rectangle7Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 2392:294 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <div className={classes.anWeb3AccountingSoftwareForCry}>
        <div className={classes.textBlock}>An web3 Accounting Software for Crypto Organizations.</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle12}></div>
      <div className={classes.getStarted}>Get Started</div>
      <div className={classes.quickAccountingHasTheAbilityTo}>
        Quick Accounting has the ability to tracking the transactions of crypto assets for organizations, maintain
        balance sheet of organizations, and generate financial reports. Everything in QA is trackable, and transparent.
      </div>
      <div className={classes.sERVICEFOR}>SERVICE FOR</div>
      <div className={classes.frame3}>
        <div className={classes.rectangle3}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.dAODecentralizedAutonomousOrga}>DAO(Decentralized autonomous organization) </div>
        <div className={classes.quickAccountingHasTheAbilityTo2}></div>
        <div className={classes.web3Community}>
          <div className={classes.textBlock3}>Web3 </div>
          <div className={classes.textBlock4}>Community</div>
        </div>
        <div className={classes.cryptoOrganization}>
          <div className={classes.textBlock5}>Crypto </div>
          <div className={classes.textBlock6}>Organization</div>
        </div>
        <div className={classes.quickAccountingHasTheAbilityTo3}></div>
        <div className={classes.quickAccountingHasTheAbilityTo4}></div>
        <div className={classes.group222}>
          <div className={classes.text}>Learn more</div>
          <div className={classes.iconArrow}>
            <IconArrowIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.group224}>
          <div className={classes.text2}>Learn more</div>
          <div className={classes.iconArrow2}>
            <IconArrowIcon2 className={classes.icon2} />
          </div>
        </div>
        <div className={classes.group223}>
          <div className={classes.text3}>Learn more</div>
          <div className={classes.iconArrow3}>
            <IconArrowIcon3 className={classes.icon3} />
          </div>
        </div>
      </div>
      <div className={classes.kEYFEATURES}>KEY FEATURES</div>
      <div className={classes.frame8}>
        <div className={classes.group251}>
          <div className={classes.rectangle122}></div>
          <div className={classes.learnMore}>Learn more</div>
          <div className={classes.rectangle8}></div>
          <div className={classes.group2}>
            <Group2Icon className={classes.icon4} />
          </div>
          <div className={classes.incomeAndExpenseTracking}>Income and Expense Tracking</div>
          <div className={classes.quickAccountingCanTrackAllInco}>
            Quick Accounting can track all income and expenses of crypto organizations, ensuring accurate recording of
            every transaction.
          </div>
          <div className={classes.line9}></div>
        </div>
        <div className={classes.group252}>
          <div className={classes.rectangle123}></div>
          <div className={classes.learnMore2}>Learn more</div>
          <div className={classes.rectangle124}></div>
          <div className={classes.learnMore3}>Learn more</div>
          <div className={classes.rectangle9}></div>
          <div className={classes.accountingRecords}>Accounting Records</div>
          <div className={classes.quickAccountingOffersAUserFrie}>
            Quick Accounting offers a user-friendly interface to record and categorize accounting transactions for
            crypto assets.
          </div>
          <div className={classes.quickAccountingHasTheAbilityTo5}></div>
          <div className={classes.line10}></div>
        </div>
        <div className={classes.group253}>
          <div className={classes.rectangle125}></div>
          <div className={classes.learnMore4}>Learn more</div>
          <div className={classes.rectangle126}></div>
          <div className={classes.learnMore5}>Learn more</div>
          <div className={classes.rectangle10}></div>
          <div className={classes.reportGeneration}>Report Generation</div>
          <div className={classes.quickAccountingCanGenerateAccu}>
            Quick Accounting can generate accurate financial reports based on user transaction records and accounting
            data, helping users understand the financial status of their crypto organizations.
          </div>
          <div className={classes.quickAccountingHasTheAbilityTo6}></div>
          <div className={classes.line11}></div>
        </div>
      </div>
      <div className={classes.bENEFITS}>BENEFITS</div>
      <div className={classes.frame7}>
        <div className={classes.group242}>
          <div className={classes.rectangle6}>
            <Rectangle6Icon className={classes.icon5} />
          </div>
          <div className={classes.quickAccountingUtilizesBlockch}>
            Quick Accounting utilizes blockchain technology to ensure all financial flows are accurately traced and
            recorded, guaranteeing the reliability and transparency of financial data.
          </div>
          <div className={classes.traceableAccountFlow}>Traceable Account Flow</div>
          <div className={classes.img}>
            <ImgIcon className={classes.icon6} />
          </div>
        </div>
        <div className={classes.group243}>
          <div className={classes.rectangle7}>
            <Rectangle7Icon className={classes.icon7} />
          </div>
          <div className={classes.realTimeVisibility}>Real-time Visibility</div>
          <div className={classes.quickAccountingProvidesRealTim}>
            Quick Accounting provides real-time financial data and reports, enabling crypto organizations to stay
            updated on their financial status and share transparent financial information with stakeholders.
          </div>
          <div className={classes.img2}>
            <ImgIcon2 className={classes.icon8} />
          </div>
        </div>
      </div>
      <div className={classes.cONTACT}>CONTACT</div>
      <div className={classes.rectangle11}></div>
      <div className={classes.frame6}>
        <Frame6Icon className={classes.icon9} />
      </div>
      <div className={classes.taoistLabs}>Taoist labs</div>
      <div className={classes.poweredBy}> Powered by</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.frame2}>
        <div className={classes.group3}>
          <Group3Icon className={classes.icon10} />
        </div>
        <div className={classes.home}>Home</div>
        <div className={classes.features}>Features</div>
        <div className={classes.benefits}>Benefits</div>
        <div className={classes.contact}>Contact</div>
        <div className={classes.group30}>
          <div className={classes.rectangle127}></div>
          <div className={classes.getStarted2}>Get Started</div>
        </div>
      </div>
    </div>
  );
});
