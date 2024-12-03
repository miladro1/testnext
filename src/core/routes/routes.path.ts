import { BookSaved, Chart2, Gift, Messages1, ProfileCircle, Receipt2, StatusUp, Wallet3 } from "iconsax-react";
import AutoInvestmentIcon from "@togetherise/resource/icons/AutoInvestmentIcon";
import { NewsIcon } from "@togetherise/resource/icons/NewsIcon";
import { FAQIcon } from "@togetherise/resource/icons/FAQIcon";

export const PATHS = {
    dashboardSharedAccessPages: [
        {
            title: "news",
            url: "#",
            icon: NewsIcon,
        },
        {
            title: "faq",
            url: "#",
            icon: FAQIcon,
        },
        {
            title: "guide",
            url: "#",
            icon: BookSaved,
        },
    ],
    navMain: [
        {
            title: "dashboard",
            url: "/dashboard",
            icon: Chart2,
            isActive: true,
        },
        {
            title: "investments",
            url: "/dashboard/investments",
            icon: StatusUp,
            items: [
                {
                    title: "investments_plan",
                    url: "/dashboard/investments/plans",
                }
            ]
        },
        {
            title: "auto_invest",
            url: "/dashboard/auto_invest",
            icon: AutoInvestmentIcon,
        },
        {
            title: "wallet",
            url: "/dashboard/wallet",
            icon: Wallet3,
        },
        {
            title: "transactions",
            url: "/dashboard/transactions",
            icon: Receipt2,
        },
        {
            title: "reward",
            url: "/dashboard/reward",
            icon: Gift,
        },
        {
            title: "profile",
            url: "/dashboard/profile",
            icon: ProfileCircle,
        },
        {
            title: "support",
            url: "/dashboard/support",
            icon: Messages1,
        }
    ],
}
