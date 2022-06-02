import { ReactComponent as Overview } from "../assets/overview.svg";
import { ReactComponent as Policy } from "../assets/policy.svg";
import { ReactComponent as Report } from "../assets/report.svg";
import { ReactComponent as Company } from "../assets/company.svg";
import { ReactComponent as UserAccount } from "../assets/user-account.svg";
import { ReactComponent as History } from "../assets/history.svg";
import { ReactComponent as Logout } from "../assets/log-out.svg";

export const navLinks = [
    {
        title: "Overview",
        icon: <Overview />,
        link: "/",
    },
    {
        title: "Policy",
        icon: <Policy />,
        link: "/policy",
    },
    {
        title: "Reports",
        icon: <Report />,
        link: "reports",
    },
    {
        title: "Company",
        icon: <Company />,
        link: "company",
    },
    {
        title: "User Account",
        icon: <UserAccount />,
        link: "/user-account",
    },
    {
        title: "History",
        icon: <History />,
        link: "/history",
    },
];
