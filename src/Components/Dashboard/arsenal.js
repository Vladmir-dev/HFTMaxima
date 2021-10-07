import AppsIcon from "@mui/icons-material/Apps";
import BookIcon from "@mui/icons-material/Book";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExtensionIcon from "@mui/icons-material/Extension";

export const tradingAccount = [
  { id: "demo", label: "Paper Account" },
  { id: "live", label: "Live Account" },
];

export const items = [
    {
        id:'home',
        label:'Home',
        icon:<AppsIcon size={20}/>,
        navLink:'/',
    },
    {
        id:'documentation',
        label:'Documents',
        icon:<BookIcon size={20}/>,
        navLink:'/',
    },
    {
        id:'files',
        label:'Files',
        icon:<InsertDriveFileIcon size={20}/>,
        navLink:'/',
    },
    {
        id:'integration',
        label:'Integrations',
        icon:<ExtensionIcon size={20}/>,
        navLink:'/',
    },

];

export const steps = [
    {
      label: 'Proifle',
      description: "You can now complete your profile and enjoy nice features from Maxima",
    },
    {
      label: 'Account',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Settings',
      description: "Make changes to your account whenever you want",
    },
  ];