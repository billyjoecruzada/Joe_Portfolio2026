// Billy Joe Cruzada Portfolio - Shared Data Module (single source of truth)
// Loaded first on every page. Exposes global `portfolioData`.

const defaultData = {
    profile: {
        name: "Billy Joe Cruzada",
        title: "Graphic Designer | Video Editor | Photographer | Photo Editor | Generative AI Specialist",
        subtitle: "Graphic Designer · AI Content Creator · Web Developer",
        bio: "Creative professional with 6+ years of experience across brand identity, generative AI content, and web development. I help brands turn ideas into scroll-stopping visuals, from packaging design to AI-generated campaigns and Shopify storefronts.",
        image: "Billy ID.jpg",
        stats: [
            { number: "6+", label: "Years Experience" },
            { number: "100+", label: "Projects" },
            { number: "50+", label: "Clients" }
        ]
    },
    social: {
        instagram: "https://www.instagram.com/ezii_yooow",
        linkedin: "https://linkedin.com/in/iam-billycruzada/",
        behance: "https://behance.net/billyjoeCrzGraphx",
        email: "billyjoecruzada12@gmail.com"
    },
    featured: [
        { id: 1, src: "Elements/Designs/Food Product Design/(1) Primary Logo.jpg", title: "Kamote Crisps", category: "Food Product Design" },
        { id: 2, src: "Elements/Designs/Food Product Design/(3) Best-seller.jpg", title: "Kamote Crisps Ad", category: "Food Product Design" },
        { id: 3, src: "Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg", title: "Passiflora", category: "Health & Wellness" },
        { id: 4, src: "Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg", title: "Passiflora Mockup", category: "Health & Wellness" },
        { id: 5, src: "Elements/Designs/Print Designs/Nmax ii color 1 variation.png", title: "Nmax Design", category: "Print" },
        { id: 6, src: "Elements/Designs/Shopify - Berrimora/Logo.png", title: "Berrimora Shopify", category: "Shopify" }
    ],
    aiAvatars: [
        { id: 1, src: "Elements/AI girl models/hf_20260207_140808_57bef821-8724-40f2-9ab5-1adc3dc0b1d6.JPG", title: "AI Avatar 001", category: "higgsfield" },
        { id: 2, src: "Elements/AI girl models/hf_20260207_141327_62d81650-99b0-4bcf-a60f-9c3e6c1769a7.JPG", title: "AI Avatar 002", category: "higgsfield" },
        { id: 3, src: "Elements/AI girl models/hf_20260207_142137_c255d793-8599-426c-b412-0105b5836bd7.JPG", title: "AI Avatar 003", category: "higgsfield" },
        { id: 4, src: "Elements/AI girl models/hf_20260523_090742_3d81af76-8d89-4223-aeef-09f932024543.JPG", title: "AI Avatar 004", category: "higgsfield" },
        { id: 5, src: "Elements/AI girl models/hf_20260523_090849_8cdfd0a1-8022-4494-a2eb-4420fd776a61.JPG", title: "AI Avatar 005", category: "higgsfield" },
        { id: 6, src: "Elements/AI girl models/hf_20260528_070301_44c989bc-0bb7-487c-97fc-d018002f653c.JPG", title: "AI Avatar 006", category: "higgsfield" },
        { id: 7, src: "Elements/AI girl models/hf_20260528_070906_2a89543c-511e-4b9d-b4cf-ff62b7101c10.JPG", title: "AI Avatar 007", category: "higgsfield" },
        { id: 8, src: "Elements/AI girl models/hf_20260528_071030_60d31156-752f-4f9a-9cd5-bb7ea199ae09.JPG", title: "AI Avatar 008", category: "higgsfield" },
        { id: 9, src: "Elements/AI girl models/hf_20260530_172249_2473e0fd-f47e-4dd4-91e7-e06e8497964e.JPG", title: "AI Avatar 009", category: "higgsfield" },
        { id: 10, src: "Elements/AI girl models/hf_20260530_173035_0dd56dfa-56f2-4594-93ae-db768ed652a8.JPG", title: "AI Avatar 010", category: "higgsfield" },
        { id: 11, src: "Elements/AI girl models/seedream-i2i-1770723061247-0.JPG", title: "AI Avatar 011", category: "seedream" },
        { id: 12, src: "Elements/AI girl models/seedream-i2i-1770723342004-2.JPG", title: "AI Avatar 012", category: "seedream" },
        { id: 13, src: "Elements/AI girl models/seedream-i2i-1770723639744-0.JPG", title: "AI Avatar 013", category: "seedream" },
        { id: 14, src: "Elements/AI girl models/seedream-i2i-1770724512254-2.JPG", title: "AI Avatar 014", category: "seedream" },
        { id: 15, src: "Elements/AI girl models/seedream-i2i-1771074683603-1.JPG", title: "AI Avatar 015", category: "seedream" },
        { id: 16, src: "Elements/AI girl models/seedream-i2i-1771075085491-0.JPG", title: "AI Avatar 016", category: "seedream" },
        { id: 17, src: "Elements/AI girl models/seedream-i2i-1773822480542-1.JPG", title: "AI Avatar 017", category: "seedream" },
        { id: 18, src: "Elements/AI girl models/seedream-i2i-1773822833538-1.JPG", title: "AI Avatar 018", category: "seedream" },
        { id: 19, src: "Elements/AI girl models/seedream-i2i-1774002339447-2.JPG", title: "AI Avatar 019", category: "seedream" },
        { id: 20, src: "Elements/AI girl models/seedream-i2i-1774002485283-1.JPG", title: "AI Avatar 020", category: "seedream" },
        { id: 21, src: "Elements/AI girl models/seedream-i2i-1774002921298-0.JPG", title: "AI Avatar 021", category: "seedream" },
        { id: 22, src: "Elements/AI girl models/seedream-i2i-1774003195561-0.JPG", title: "AI Avatar 022", category: "seedream" },
        { id: 23, src: "Elements/AI girl models/seedream-i2i-cmlayjy8p003rlb04kugqrcqk.JPG", title: "AI Avatar 023", category: "seedream" },
        { id: 24, src: "Elements/AI girl models/seedream-i2i-cmlayjz6r003tlb04vecib1qn.JPG", title: "AI Avatar 024", category: "seedream" },
        { id: 25, src: "Elements/AI girl models/2a8d3f9e-664d-11f1-af80-c1af0e67a990.png", title: "AI Avatar 025", category: "nanoBanana" },
        { id: 26, src: "Elements/AI girl models/95a14ade-664b-11f1-af80-c1af0e67a990.jpg", title: "AI Avatar 026", category: "nanoBanana" },
        { id: 27, src: "Elements/AI girl models/86ac6242-6651-11f1-af83-c1af0e67a990.png", title: "AI Avatar 027", category: "nanoBanana" },
        { id: 28, src: "Elements/AI girl models/d29b04d8-6651-11f1-af83-c1af0e67a990.png", title: "AI Avatar 028", category: "nanoBanana" }
    ],
    gallery: [
        { id: 1, src: "Elements/Photography/Food & Travel/1x1 format IG 15 copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 2, src: "Elements/Photography/Food & Travel/2x3 format IG White BG - 3 copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 3, src: "Elements/Photography/Food & Travel/2x3 format IG White BG - 6 copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 4, src: "Elements/Photography/Food & Travel/Food Samgy1-01 copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 5, src: "Elements/Photography/Food & Travel/Food Samgy1-02 copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 6, src: "Elements/Photography/Food & Travel/Imag-1.jpg", title: "Food & Travel", category: "foodTravel" },
        { id: 7, src: "Elements/Photography/Food & Travel/Imag-2.jpg", title: "Food & Travel", category: "foodTravel" },
        { id: 8, src: "Elements/Photography/Food & Travel/Img-1.jpg", title: "Food & Travel", category: "foodTravel" },
        { id: 9, src: "Elements/Photography/Food & Travel/Img-3.jpg", title: "Food & Travel", category: "foodTravel" },
        { id: 10, src: "Elements/Photography/Food & Travel/Imga-3 copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 11, src: "Elements/Photography/Food & Travel/KRV DSCF6221-Enhanced-NR copy.webp", title: "Food & Travel", category: "foodTravel" },
        { id: 12, src: "Elements/Photography/Food & Travel/Malico --8.jpg", title: "Food & Travel", category: "foodTravel" },
        { id: 13, src: "Elements/Photography/Portrait photography/Grad 2024.jpg", title: "Portrait Photography", category: "portrait" },
        { id: 14, src: "Elements/Photography/Portrait photography/IMG-100.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 15, src: "Elements/Photography/Portrait photography/IMG-11.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 16, src: "Elements/Photography/Portrait photography/IMG-114.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 17, src: "Elements/Photography/Portrait photography/IMG-43.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 18, src: "Elements/Photography/Portrait photography/IMG-44.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 19, src: "Elements/Photography/Portrait photography/IMG-50.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 20, src: "Elements/Photography/Portrait photography/IMG-58.JPG", title: "Portrait Photography", category: "portrait" },
        { id: 21, src: "Elements/Photography/Portrait photography/Imga-2.jpg", title: "Portrait Photography", category: "portrait" },
        { id: 22, src: "Elements/Photography/Portrait photography/Julia 1st Process-11.jpg", title: "Portrait Photography", category: "portrait" },
        { id: 23, src: "Elements/Photography/Portrait photography/Julia 1st Process-5.jpg", title: "Portrait Photography", category: "portrait" },
        { id: 24, src: "Elements/Photography/Portrait photography/Julia 1st Process-7.jpg", title: "Portrait Photography", category: "portrait" },
        { id: 25, src: "Elements/Photography/Portrait photography/Julia 1st Process.jpg", title: "Portrait Photography", category: "portrait" },
        { id: 26, src: "Elements/Photography/Sports Photography/DSCF6543.jpg", title: "Sports Photography", category: "sports" },
        { id: 27, src: "Elements/Photography/Sports Photography/DSCF6602.jpg", title: "Sports Photography", category: "sports" },
        { id: 28, src: "Elements/Photography/Street photography/1x1 format IG 11 copy.webp", title: "Street Photography", category: "street" },
        { id: 29, src: "Elements/Photography/Street photography/1x1 format IG 2 copy.webp", title: "Street Photography", category: "street" },
        { id: 30, src: "Elements/Photography/Street photography/1x1 format IG 4.jpg", title: "Street Photography", category: "street" },
        { id: 31, src: "Elements/Photography/Street photography/1x1 format IG 7 copy.webp", title: "Street Photography", category: "street" },
        { id: 32, src: "Elements/Photography/Street photography/baag --6 copy.webp", title: "Street Photography", category: "street" },
        { id: 33, src: "Elements/Photography/Street photography/Imag-4 copy.webp", title: "Street Photography", category: "street" },
        { id: 34, src: "Elements/Photography/Street photography/Img-2.jpg", title: "Street Photography", category: "street" }
    ],
    showcases: [
        {
            id: 1,
            title: "Kamote Crisps Branding",
            category: "Food Product Design",
            tools: ["Ai", "Ps", "Ae"],
            visible: true,
            images: [
                "Elements/Designs/Food Product Design/(1) Primary Logo.jpg",
                "Elements/Designs/Food Product Design/(2) Front - Kamote behanc.jpg",
                "Elements/Designs/Food Product Design/(3) Best-seller.jpg",
                "Elements/Designs/Food Product Design/(3) Best-seller-A.jpg",
                "Elements/Designs/Food Product Design/(4) Kamote-Chips-ad-001.jpg",
                "Elements/Designs/Food Product Design/(5) Kamote chips ads sample.mov"
            ]
        },
        {
            id: 2,
            title: "Passiflora Perfume",
            category: "Health & Wellness",
            tools: ["Ai", "Ps"],
            visible: true,
            images: [
                "Elements/Designs/Health and Wellness/(1) Artboard 19@2x.png",
                "Elements/Designs/Health and Wellness/(2) Artboard 4@2x.png",
                "Elements/Designs/Health and Wellness/(3) Artboard 1@2x.png",
                "Elements/Designs/Health and Wellness/(5) Passiflora front cover.jpg",
                "Elements/Designs/Health and Wellness/(6) passiflora-white.jpg",
                "Elements/Designs/Health and Wellness/(7) Pefume Mockup -- Passiflora 001 Burning desire 1x1.jpg",
                "Elements/Designs/Health and Wellness/(8) Pefume Mockup -- Passiflora 001 Burning desire.jpg",
                "Elements/Designs/Health and Wellness/(9) passiflora-Business card.jpg",
                "Elements/Designs/Wellness Product ads/Ad 1 _ Problem - Solution.png",
                "Elements/Designs/Wellness Product ads/Ad 2 _ Medical - Clinical.png",
                "Elements/Designs/Wellness Product ads/Ad 3 _ Emotional - Lifestyle.png",
                "Elements/Designs/Wellness Product ads/Ad1 - Human Using Product.png",
                "Elements/Designs/Wellness Product ads/Ad2 - Premium Product Hero.png",
                "Elements/Designs/Wellness Product ads/Ad3 - Medical_Clinical.png",
                "Elements/Designs/Wellness Product ads/raw gen 001.jpg",
                "Elements/Designs/Wellness Product ads/raw gen 002.jpg",
                "Elements/Designs/Wellness Product ads/raw gen 003.jpg"
            ]
        },
        {
            id: 3,
            title: "Print Designs",
            category: "Print",
            tools: ["Ai", "Ps"],
            visible: true,
            images: [
                "Elements/Designs/Print Designs/Nmax ii color 1 variation.png",
                "Elements/Designs/Print Designs/Nmax mock up.jpg",
                "Elements/Designs/Print Designs/Shirt mockup.jpg",
                "Elements/Designs/Print Designs/Shirt mockup 2.jpg",
                "Elements/Designs/Print Designs/Nature-sample-2.png",
                "Elements/Designs/Print Designs/Post-evening-vector-sample.png",
                "Elements/Designs/Print Designs/Rectangle 1.png"
            ]
        },
        {
            id: 4,
            title: "Berrimora Shopify Store",
            category: "Shopify",
            tools: ["Ps", "Figma"],
            visible: true,
            images: [
                "Elements/Designs/Shopify - Berrimora/Logo.png",
                "Elements/Designs/Shopify - Berrimora/Berrimora snaps 01.PNG",
                "Elements/Designs/Shopify - Berrimora/Berrimora snaps 02.PNG",
                "Elements/Designs/Shopify - Berrimora/Berrimora snaps 03.PNG",
                "Elements/Designs/Shopify - Berrimora/Backdrop.jpg",
                "Elements/Designs/Shopify - Berrimora/Mobile View.jpg"
            ]
        },
        {
            id: 5,
            title: "Avory",
            category: "AI UGC Ad",
            tools: ["Higgsfield", "Premiere Pro", "Lightroom"],
            visible: true,
            images: [
                "Elements/Designs/Avory/hf_20260802_180235_f41097bd-12bc-495c-bf04-5cf75a282a36.png",
                "Elements/AI videos - Higgsfield/Avory - AI UGC Ad.mp4",
                "Elements/Designs/Avory/Avory - AI UGC Ad - 002.mp4",
                "Elements/Designs/Avory/hf_20260802_181707_09bd931a-dff0-4b6b-bb6e-ab4d0de9bc82.mp4"
            ]
        },
        {
            id: 6,
            title: "Jewelries & Accessories",
            category: "Jewelries & Accessories",
            tools: ["Higgsfield", "Photoshop"],
            visible: true,
            images: [
                "Elements/Designs/Jewelries and Accessories/Velvet Aura graphics.jpg",
                "Elements/Designs/Jewelries and Accessories/edited photo-01.jpg",
                "Elements/Designs/Jewelries and Accessories/edited photo-02.jpg",
                "Elements/Designs/Jewelries and Accessories/Travel Pendant Ad Graphics.jpg",
                "Elements/Designs/Jewelries and Accessories/Travel Pendant.jpg"
            ]
        }
    ],
    aiVideos: [
        {
            id: 1,
            src: "Elements/AI videos - Higgsfield/AI-Seedance footage.mp4",
            title: "Higgsfield AI Cinematic",
            tool: "Seedance | Nano Banana Pro",
            ratio: "horizontal"
        },
        {
            id: 2,
            src: "Elements/AI videos - Higgsfield/Avory - AI UGC Ad.mp4",
            title: "Avory - AI UGC Ad",
            tool: "Higgsfield | Premiere Pro",
            ratio: "vertical"
        },
        {
            id: 3,
            src: "Elements/AI videos - Higgsfield/hf_20260605_114930_7583322b-8f04-4e59-b108-d6bebaf1419a.mp4",
            title: "Higgsfield AI 001",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 4,
            src: "Elements/AI videos - Higgsfield/hf_20260605_120624_5e56f7f8-97dd-4f25-957e-01bd78da919d.mp4",
            title: "Higgsfield AI 002",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 5,
            src: "Elements/AI videos - Higgsfield/hf_20260606_104322_abf631e7-9aac-493b-9d22-920cb3913057.mp4",
            title: "Higgsfield AI 003",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 6,
            src: "Elements/AI videos - Higgsfield/YTS_001.mp4",
            title: "YTS 001",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 7,
            src: "Elements/AI videos - Higgsfield/YTS-002.mp4",
            title: "YTS 002",
            tool: "Higgsfield",
            ratio: "vertical"
        },
        {
            id: 8,
            src: "Elements/AI videos - Higgsfield/YTS-007.mp4",
            title: "YTS 007",
            tool: "Higgsfield",
            ratio: "vertical"
        }
    ],
    services: [
        { title: "Brand Identity & Visual Design", description: "Creating memorable brand identities including logos, typography systems, color palettes, and comprehensive brand guidelines. I help businesses establish a cohesive visual presence that resonates with their target audience." },
        { title: "Photography & Photo Editing", description: "Professional photography services and expert retouching. From product shots to portraits, I capture moments and transform them into stunning visual content that tells your story." },
        { title: "Print & Packaging Design", description: "Eye-catching print designs for packaging, posters, business cards, and marketing materials. I ensure your brand makes a lasting tangible impression in the physical world." },
        { title: "Generative AI Content Creation", description: "Cutting-edge AI-generated imagery and content using state-of-the-art tools. Specializing in creative AI workflows for marketing, product visualization, and unique artistic expressions." }
    ],
    tools: [
        {
            group: "Generative AI Toolkit",
            tools: [
                { name: "Higgsfield", purpose: "AI video generation & motion for cinematic UGC-style ads and social content", logo: "SVG Logos/Higgsfield_AI-logo_brandlogos.net_cfc6a5.svg" },
                { name: "Heygen", purpose: "AI avatar & talking-head video generation for presenter-style content", badge: "HG" },
                { name: "Wavespeed", purpose: "Fast AI image/video generation pipeline for rapid concept iteration", badge: "WS" },
                { name: "Nano Banana Pro", purpose: "AI image generation & editing for photorealistic creative assets", logo: "SVG Logos/Nano banana-icon.svg" },
                { name: "Seedream", purpose: "AI image generation for high-fidelity stylized visuals", badge: "SD" },
                { name: "Seedance", purpose: "AI video/motion generation for dynamic short-form content", badge: "SC" },
                { name: "Kling", purpose: "AI video generation for cinematic motion and camera work", badge: "K" },
                { name: "Wan", purpose: "Open-source AI video generation model (WAN 2.1/2.2) for custom workflows", badge: "W" },
                { name: "ComfyUI", purpose: "Node-based AI workflow builder for custom image/video generation pipelines", logo: "SVG Logos/comfyui-color.svg" }
            ]
        },
        {
            group: "Graphic Design Toolkit",
            tools: [
                { name: "Adobe Photoshop", purpose: "Photo retouching, compositing, and digital artwork", logo: "SVG Logos/photoshop-svgrepo-com.svg" },
                { name: "Adobe Illustrator", purpose: "Vector-based logo design, branding, and print-ready artwork", logo: "SVG Logos/illustrator-svgrepo-com.svg" },
                { name: "Canva", purpose: "Fast graphical edits and quick social media layouts", logo: "SVG Logos/canva-icon.svg" }
            ]
        },
        {
            group: "Video Editing Toolkit",
            tools: [
                { name: "Adobe Premiere Pro", purpose: "Non-linear video editing for ads, promos, and social content", logo: "SVG Logos/premiere-svgrepo-com.svg" },
                { name: "Adobe After Effects", purpose: "Motion graphics, animation, and visual effects", badge: "AE" },
                { name: "DaVinci Resolve", purpose: "Professional color grading and cinematic color correction", logo: "SVG Logos/icons8-davinci-resolve.svg" },
                { name: "CapCut", purpose: "Fast-turnaround short-form video editing for social media", logo: "SVG Logos/capcut logo.svg" }
            ]
        }
    ],
    beforeAfter: [
        { id: 1, title: "Edit 01", before: "Elements/Designs/Before and after edit images/image_001 - Before.png", after: "Elements/Designs/Before and after edit images/image_001 - After.jpg" },
        { id: 2, title: "Edit 02", before: "Elements/Designs/Before and after edit images/image_002 - Before.png", after: "Elements/Designs/Before and after edit images/image_002 - After.jpg" }
    ],
    about: {
        aboutImage: "Billy ID.jpg",
        quote: "\u201cDesign is not just what it looks like. Design is how it works.\u201d",
        bio: "I'm Billy Joe Cruzada, a graphic designer, AI content creator, and web developer based in Santa Ignacia, Tarlac, Philippines. Over the past 6+ years I've built a career at the intersection of traditional design craft and next-generation AI tooling. Helping brands look good and move fast.\n\nMy work spans brand identity and packaging design, generative AI content production (image, video, and UGC-style ads), photo and video editing, and Shopify e-commerce development. I've built complete branding systems for food and wellness products, produced AI-generated ad campaigns for social platforms, developed Shopify storefronts from scratch, and delivered hundreds of AI-generated assets for agency clients using tools like ComfyUI, WAN, Flux, Seedream/Seedance, Nano Banana Pro, Kling, and Higgsfield.\n\nI hold a Bachelor of Science in Information Technology (Web & Mobile Application Development) from Tarlac State University, which grounds my design work in a real understanding of how things actually get built and deployed, not just how they look.\n\nEvery project starts with the same question: what does this brand need to say, and how do I say it in a way people actually stop for? Whether that's a logo, a product mockup, an AI-generated ad, or a fully working online store, I bring the same mix of craft, speed, and curiosity to make it happen.",
        location: "Santa Ignacia, Tarlac, Philippines",
        bioVisible: true
    }
};

// Load data from localStorage (admin-editable keys) or fall back to defaults.
function loadData() {
    const savedProfile = localStorage.getItem('portfolio_profile');
    const savedSocial = localStorage.getItem('portfolio_social');
    const savedServices = localStorage.getItem('portfolio_services');
    const savedAIVideos = localStorage.getItem('portfolio_aiVideos');
    const savedAbout = localStorage.getItem('portfolio_about');

    return {
        profile: savedProfile ? JSON.parse(savedProfile) : defaultData.profile,
        social: savedSocial ? JSON.parse(savedSocial) : defaultData.social,
        featured: defaultData.featured,
        aiAvatars: defaultData.aiAvatars,
        gallery: defaultData.gallery,
        showcases: defaultData.showcases,
        services: savedServices ? JSON.parse(savedServices) : defaultData.services,
        aiVideos: savedAIVideos ? JSON.parse(savedAIVideos) : defaultData.aiVideos,
        tools: defaultData.tools,
        beforeAfter: defaultData.beforeAfter,
        about: savedAbout ? JSON.parse(savedAbout) : defaultData.about
    };
}

const portfolioData = loadData();