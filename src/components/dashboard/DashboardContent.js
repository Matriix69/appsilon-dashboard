import "./styles.sass";
import { ReactComponent as Bg } from "../../assets/background.svg";
import Agent from "../../assets/agent.png";

const disbursement = [
    {
        disbursement: 1000,
        policy: 400,
        claim: 800,
    },
    {
        disbursement: 2500,
        policy: 1100,
        claim: 1400,
    },
    {
        disbursement: 2500,
        policy: 1100,
        claim: 1400,
    },
];

const DashboardContent = () => {
    return (
        <div className="dashboard-content">
            <div className="dashboard-content-hero">
                <Bg />
                <img src={Agent} />
                <div className="dashboard-content-hero-text">
                    <h1>20% Safe On Your First Account</h1>
                    <div className="dashboard-content-hero-text-code">
                        <div className="code-value">NEWBIE20</div>
                        <button>Copy Code</button>
                    </div>
                </div>
            </div>

            <div className="card">
                {disbursement.map(({ disbursement, policy, claim }) => (
                    <div className="card-content">
                        <div className="card-content-disbursement">
                            <h1>
                                {disbursement}
                                <sup>$</sup>
                            </h1>
                            <p>Total Value of Disbursement</p>
                        </div>
                        <div className="card-content-policy">
                            <div className="policy">
                                <h2>Policy</h2>
                                <div>
                                    {policy}
                                    <sup>$</sup>
                                </div>
                            </div>
                            <progress max={1500} value={policy}></progress>
                        </div>
                        <div className="card-content-claim">
                            <div className="claim">
                                <h2>Claim</h2>
                                <div>
                                    {claim}
                                    <sup>$</sup>
                                </div>
                            </div>
                            <progress max={2000} value={claim}></progress>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardContent;
