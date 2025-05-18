const settings = {
    isSplash: false,
};

const seo = {
    title: "Efe ULAS/Portfolyo",
    description: "Merhaba! Ben Efe Ulas. Gömülü sistemler, elektronik donanım ve mühendislik temelli projeler geliştirmeye tutkuyla bağlı bir geliştiriciyim. Yazılımın sadece ekran başında çalışan bir şey değil, gerçek dünya ile etkileşim kurabilen bir sistem haline geldiği noktada asıl gücünü gösterdiğine inanıyorum.Küçük yaşlardan itibaren teknolojiye duyduğum merak, zamanla beni Arduino ve STM32 gibi platformlarla çalışan, veri toplayan, işleyen ve sonuçlar üreten sistemler geliştirmeye yönlendirdi. Bugün, hem yazılım hem de donanım tarafında deneyim sahibi olarak, uçtan uca çalışan akıllı sistemler tasarlıyor ve uygulamaya geçiriyorum.",
    og: {
        title: "Efe ULAS Portfolyosu",
        type: "website",
        url: "",
    },
};

const greeting = {
    title: "Efe ULAS",
    logo_name: "Efe ULAS",
    nickname: "Bilgisayar Mühendisi",
    subTitle: "Merhaba! Ben Efe Ulas. Gömülü sistemler, elektronik donanım ve mühendislik temelli projeler geliştirmeye tutkuyla bağlı bir geliştiriciyim. Yazılımın sadece ekran başında çalışan bir şey değil, gerçek dünya ile etkileşim kurabilen bir sistem haline geldiği noktada asıl gücünü gösterdiğine inanıyorum. Küçük yaşlardan itibaren teknolojiye duyduğum merak, zamanla beni Arduino ve STM32 gibi platformlarla çalışan, veri toplayan, işleyen ve sonuçlar üreten sistemler geliştirmeye yönlendirdi. Bugün, hem yazılım hem de donanım tarafında deneyim sahibi olarak, uçtan uca çalışan akıllı sistemler tasarlıyor ve uygulamaya geçiriyorum.",
    resumeLink: "https://drive.google.com/file/d/1TM4QIZmyJmX-4LaxSdO2TnPpVTq50d9S/view?usp=sharing",
};

const socialMediaLinks = [{
        name: "Github",
        link: "https://github.com/EfeUls",
        fontAwesomeIcon: "fa-github",
        backgroundColor: "#181717"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/efe-ula%C5%9F-20a505304/",
        fontAwesomeIcon: "fa-linkedin-in",
        backgroundColor: "#0077B5"
    },
    {
        name: "YouTube",
        link: "",
        fontAwesomeIcon: "fa-youtube",
        backgroundColor: "#FF0000"
    },
    {
        name: "Gmail",
        link: "mailto:e.u.las561@gmail.com",
        fontAwesomeIcon: "fa-google",
        backgroundColor: "#D14836"
    },
    {
        name: "Twitter",
        link: "",
        fontAwesomeIcon: "fa-twitter",
        backgroundColor: "#1DA1F2"
    },
    {
        name: "Facebook",
        link: "",
        fontAwesomeIcon: "fa-facebook-f",
        backgroundColor: "#1877F2"
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/efee_uls/",
        fontAwesomeIcon: "fa-instagram",
        backgroundColor: "#E4405F"
    }
];

const skills = {
    data: [{
            title: "Frontend Geliştirme",
            fileName: "FullStackImg",
            skills: [
                "⚡ React framework kullanarak duyarlı web sitesi ön yüzü oluşturma"
            ],
            softwareSkills: [{
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS3",
                    fontAwesomeClassname: "simple-icons:css3",
                    style: {
                        color: "#1572B6",
                    },
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "simple-icons:javascript",
                    style: {
                        backgroundColor: "#000000",
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
                },
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "simple-icons:nodedotjs",
                    style: {
                        color: "#339933",
                    },
                },
            ],
        },
        {
            title: "Masaüstü Uygulama Geliştirme",
            fileName: "DesktopImg",
            skills: [
                "⚡ C# ve .NET Framework kullanarak Windows masaüstü uygulamaları geliştirme",
                "⚡ Electron.js ile platform bağımsız masaüstü uygulamaları oluşturma",
                "⚡ Qt framework ile C++ tabanlı masaüstü uygulamaları geliştirme",
            ],
            softwareSkills: [{
                    skillName: "C#",
                    fontAwesomeClassname: "simple-icons:csharp",
                    style: {
                        color: "#239120",
                    },
                },
                {
                    skillName: ".NET",
                    fontAwesomeClassname: "simple-icons:dotnet",
                    style: {
                        color: "#512BD4",
                    },
                },
                {
                    skillName: "C++",
                    fontAwesomeClassname: "simple-icons:cplusplus",
                    style: {
                        color: "#00599C",
                    },
                },
                {
                    skillName: "Qt",
                    fontAwesomeClassname: "simple-icons:qt",
                    style: {
                        color: "#41CD52",
                    },
                },
            ],
        },
        {
            title: "Gömülü Sistemler",
            fileName: "EmbeddedImg",
            skills: [
                "⚡ Arduino, ESP32 ve STM32 tabanlı IoT projeleri geliştirme",
                "⚡ Gömülü sistemler için C/C++ ile düşük seviyeli programlama",
                "⚡ Sensör entegrasyonu ve gerçek zamanlı veri işleme sistemleri tasarlama",
                "⚡ STM32 mikrodenetleyiciler ile gömülü sistem tasarımı ve programlama"
            ],
            softwareSkills: [{
                    skillName: "Arduino",
                    fontAwesomeClassname: "simple-icons:arduino",
                    style: {
                        color: "#00979D",
                    },
                },
                {
                    skillName: "STM32",
                    fontAwesomeClassname: "simple-icons:stmicroelectronics",
                    style: {
                        color: "#03234B",
                    },
                },
                {
                    skillName: "C",
                    fontAwesomeClassname: "simple-icons:c",
                    style: {
                        color: "#A8B9CC",
                    },
                },
                {
                    skillName: "C++",
                    fontAwesomeClassname: "simple-icons:cplusplus",
                    style: {
                        color: "#00599C",
                    },
                },
                {
                    skillName: "Raspberry Pi",
                    fontAwesomeClassname: "simple-icons:raspberrypi",
                    style: {
                        color: "#A22846",
                    },
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "simple-icons:python",
                    style: {
                        color: "#3776AB",
                    },
                },
            ],
        },
        {
            title: "Model Roketçilik ve Aviyonik Sistemler",
            fileName: "RocketImg",
            skills: [
                "⚡ Aviyonik sistemler için PCB tasarımı ve üretimi",
                "⚡ IMU sensörleri ile uçuş verisi toplama ve telemetri sistemleri",
                "⚡ Kurtarma sistemleri tasarımı ve paraşüt açma mekanizmaları"
            ],
            softwareSkills: [{
                    skillName: "OpenRocket",
                    fontAwesomeClassname: "fa-rocket",
                    style: {
                        color: "#FF4B4B",
                    },
                },
                {
                    skillName: "Solidworks",
                    fontAwesomeClassname: "simple-icons:dassaultsystemes",
                    style: {
                        color: "#FF0000",
                    },
                },
                {
                    skillName: "KiCad",
                    fontAwesomeClassname: "simple-icons:kicad",
                    style: {
                        color: "#314CB0",
                    },
                },
                {
                    skillName: "MATLAB",
                    fontAwesomeClassname: "simple-icons:matlab",
                    style: {
                        color: "#e16737",
                    },
                },
                {
                    skillName: "Fusion360",
                    fontAwesomeClassname: "simple-icons:autodesk",
                    style: {
                        color: "#0696D7",
                    },
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "simple-icons:python",
                    style: {
                        color: "#3776AB",
                    },
                },
            ],
        },
        {
            title: "Linux Yönetimi",
            fileName: "DesignImg",
            skills: [
                "⚡ Kullanıcı Deneyimini optimize etmek için uygulama işlevselliklerinin akışını oluşturma",
            ],
            softwareSkills: [{
                    skillName: "Terminal",
                    fontAwesomeClassname: "ant-design:code-filled",
                    style: {
                        color: "#000000",
                    },
                },
                {
                    skillName: "Linux",
                    fontAwesomeClassname: "logos:linux-tux",
                    style: {
                        color: "",
                    },
                },
            ],
        },
    ],
};

// Education Page
const competitiveSites = {
    competitiveSites: [],
};

const degrees = {
    degrees: [{
        title: "Balıkesir Üniversitesi",
        subtitle: "Bilgisayar Mühendisliği",
        logo_path: "baun_logo.png",
        alt_name: "Balıkesir Üniversitesi",
        duration: "2023-2027",
        descriptions: [
            "⚡ Veri Yapıları, Algoritmalar,  temel bilgisayar mühendisliği konularını öğrendim.",
            "⚡ Bunun yanında Masaüstü Uygulama Geliştirme, Frontend Geliştirme, Gömülü Sistemler ve Model Roketçilik üzerine çalışmalar yaptım.",
        ],
        website_link: "https://www.balikesir.edu.tr/",
    }, ],
};

const certifications = {
    certifications: [{
            title: "Teknofest Yüksek İrtifa Roket Yarışması",
            subtitle: "Roket Yarışması",
            logo_path: "teknofest_logo.png",
            certificate_link: "https://drive.google.com/file/d/16Ej--pYPfxRHlijmx53tlvxhCuyX3cXb/view?usp=drive_link",
            alt_name: "Teknofest",
            color_code: "#fff",
        },
        {
            title: "Roket Yarışması Katılım Belgesi",
            subtitle: "Roket Yarışması",
            logo_path: "teknofest_logo.png",
            certificate_link: "https://drive.google.com/file/d/1ZRRzWEg24EYc2HAqUtJK03BBKMeD_ERx/view?usp=drive_link",
            alt_name: "Teknofest",
            color_code: "#fff",
        },
    ],
};

// Experience Page
const experience = {

};

// Projects Page
const projectsHeader = {
    title: "Projeler",
    description: "Projelerim en son teknoloji araçlarının geniş bir çeşitliliğini kullanır. En iyi deneyimim Aviyonik Sistemler ve Model Roketçilik üzerine çalışmaktır.",
    avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Benimle İletişime Geçin",
        profile_image_path: "undraw_ios.svg",
        description: "Neredeyse her sosyal medyada varım. Bana mesaj gönderebilirsiniz, 24 saat içinde cevap vereceğim. C#, Python, Qt, Arduino, STM32, Raspberry Pi, Model Roketçilik ve Aviyonik Sistemler konularında size yardımcı olabilirim.",
    },
    addressSection: {
        title: "Adres",
        subtitle: "Balıkesir, Türkiye",
        avatar_image_path: "address_image.svg",
        location_map_link: "https://www.google.com/maps/dir/Balikesir+Universitesi+Muhendislik+Fakultesi%E2%80%A6/Bal%C4%B1kesir+%C3%9Cniversitesi+Rekt%C3%B6rl%C3%BC%C4%9F%C3%BC+%C3%87a%C4%9F%C4%B1%C5%9F+Yerle%C5%9Fkesi+Bigadi%C3%A7+%C3%9Czeri+17.+km+Bigadi%C3%A7,+Caddesi,+10145+Alt%C4%B1eyl%C3%BCl%2FBal%C4%B1kesir/@39.5418898,28.0076736,19.25z/data=!4m13!4m12!1m5!1m1!1s0x14b7a9481448c4b7:0xaebd004fad03729f!2m2!1d28.0079828!2d39.5420302!1m5!1m1!1s0x14b7a9486a8272ad:0xf781e48b61b30640!2m2!1d28.0082512!2d39.5416109?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
    },
    phoneSection: {
        title: "Telefon Numarası",
        subtitle: "+90 5067735890",
    },
};

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
};