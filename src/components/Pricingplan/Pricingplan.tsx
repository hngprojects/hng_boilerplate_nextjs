{/* 
    in this component there are four types based on their props values any other values different from these are not valid
    1. monthly and basic plan <Pricingplan period="monthly" plan="Basic"/>
    2. monthly and premium plan <Pricingplan period="monthly" plan="Premium"/>
    3. annually and Basic plan <Pricingplan period="annually" plan="Basic"/>
    4. annually and Premium Plan <Pricingplan period="annually" plan="Premium"/>
    
*/}




import './pricingplan.css'
import { Button } from '../ui/button';


let available:boolean = true

interface prop {
    plan: string;
    period: string;
}

function Pricingplan(props:prop){

    interface MyObject {
        packageTitle: string;
        available: boolean;
      }

    let packages: MyObject[] = [
        {
            packageTitle: '2 projects',
            available: true
        },
        {
            packageTitle: 'Up to 100 subscribers',
            available: true
        },
        {
            packageTitle: 'Basic analytics',
            available: true
        },
        {
            packageTitle: '24-hour support response time',
            available: true
        },
        {
            packageTitle: 'Marketing advisor',
            available: props.plan == "Premium"
        },
        {
            packageTitle: 'Cutom Integration',
            available: props.plan == "Premium"
        }
    ]

    let pricePlan = props.period == "monthly" && props.plan == "Basic" ? 800 : 
    props.period == "monthly" && props.plan == "Premium" ? 3000 : 
    props.period == "annually" && props.plan == "Basic" ? 500 : 
    props.period == "annually" && props.plan == "Premium" ? 2000 : 0

    let outputArray = packages.map((e)=>{
        return (
            <li className={!e.available ? 'packages greyed' : 'packages'}>{e.packageTitle}</li>
        )
    })

    function groupNumber(num: number): string {
        const numberString = num.toString();
        const regex = /(\d)(?=(\d{3})+$)/g;
        return numberString.replace(regex, '$1,');
      }

    return (
        <div className={props.plan == "Basic" ? "priceTag basicPriceTag" : "priceTag"}>
            <div className="innerdiv">
                <h2>{props.plan}</h2>
                <h1 className="price">
                ${groupNumber(pricePlan)} <span className="smalltext">/month</span>
                </h1>
                <p>The esentials to provide your best work for clients.</p>
            </div>
            <ul>
                {outputArray}
            </ul>
            <Button variant="default">Continue</Button>
        </div>

    )
}

export default Pricingplan
