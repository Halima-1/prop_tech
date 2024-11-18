const apartments = [
    {
      id: 1,
      state: "Oyo",
      location: "No. 1 Awolowo Avenue, Ibadan, Oyo",
      price: 250000,
      typeOfApartment: "2 Bedroom Flat",
      type:"flat",
      images: [
        "https://media.istockphoto.com/id/2163132165/photo/houses-align-a-residential-district-next-to-road.jpg?s=612x612&w=0&k=20&c=JwTatZ7qyrv0s0UZa6yZ_WpByb_0M7GN9ZXZQOrWWRk=",
        "https://media.istockphoto.com/id/2162959142/photo/sunken-living-room-in-renovated-bungalow-looking-into-modern-country-kitchen.jpg?s=612x612&w=0&k=20&c=dFpzuyn5PvOiVAx5kiDl_-DmtqWZ1ylYeUqYe2ktBlo=",
        "https://media.istockphoto.com/id/1682712948/photo/bright-bedroom-in-modern-house-extension.jpg?s=612x612&w=0&k=20&c=xBMmExDEH9A__4PgxBwS55oRP75zrFGkOQHhgR0DKjM=",
        "https://media.istockphoto.com/id/2162959054/photo/modern-country-kitchen-with-reclaimed-wood-hood-fan.jpg?s=612x612&w=0&k=20&c=as-Hkf3BPCOIFPTU_-ZGHpJAfgI9w6ABd2tbmiwDEPU=",
        "https://media.istockphoto.com/id/1430421479/photo/bathroom-in-a-modern-bungalow.jpg?s=612x612&w=0&k=20&c=JDKaZGXBY7afolQJx2oWb9eOcCFBlHw6rGuxisDSfuk=",
        // "house1_img6.jpg"
      ]
    },
    {
      id: 2,
      state: "Lagos",
      location: "No. 5 Allen Avenue, Ikeja, Lagos",
      price: 450000,
      typeOfApartment: "3 Bedroom Bungalow",
      type:"bungalow",
      images: [
        "https://media.istockphoto.com/id/2077784912/photo/luxury-contemporary-mansion-with-pool.jpg?s=612x612&w=0&k=20&c=Ct7stjMPmF5eZ1DGH89ooTOee_52nPyOhYvjpC5fwBY=",
        "https://media.istockphoto.com/id/2162959936/photo/renovated-rustic-basement-featuring-bar-wine-rack-and-reclaimed-wood.jpg?s=612x612&w=0&k=20&c=Bv4jhG1rXRoZxUYG_XpKtAFWn0SqNTokWO84WS5lKU4=",
        "https://media.istockphoto.com/id/2157592507/photo/rattan-daybed-boho-cabin-bungalow-knotty-pine-paneling.jpg?s=612x612&w=0&k=20&c=4SYKdSYeZjbJBvtD-v40_EF7togi2HUOZKRv-cTlzx4=",
        "https://media.istockphoto.com/id/1367773838/photo/luxury-kitchen-in-bright-modern-craftsman-home.jpg?s=612x612&w=0&k=20&c=rmJ0Rm9WdQKMy_6-Ls7EcqP9565Ug1j3grEz_1JBqGg=",
        "https://media.istockphoto.com/id/1430420148/photo/bathroom-in-a-modern-bungalow.jpg?s=612x612&w=0&k=20&c=DCtwEAwsjGOJc-JZDe_t6kVm4IlOoacqp8f6VE7z-qw=",
        // "house2_img6.jpg"
      ]
    },
    {
        id: 3,
        state: "Oyo",
        location: "No. 12 Mokola Hill, Ibadan, Oyo",
        price: 300000,
        typeOfApartment: "1 Bedroom Self-Contained",
        type:"self contained",
        images: [
          "https://media.istockphoto.com/id/83802508/photo/stairs-leading-to-craftsman-house.jpg?s=612x612&w=0&k=20&c=Ai2VREsZR-l8XPf0Cn5VKputzmv0bSk4CoUUW3DZf1I=",
          "https://media.istockphoto.com/id/183838520/photo/villa-in-the-tropics.jpg?s=612x612&w=0&k=20&c=6X5jgFqwhNHFifroTbfqPg-Pa2jXSR2CBZF3Uc7j-QM=",
          "https://media.istockphoto.com/id/1256466090/photo/modern-style-bedroom.jpg?s=612x612&w=0&k=20&c=0cU36zFlTfzGuWYu6SILY8aVk1V0JfLx0xKBBCsDSjo=",
          "https://media.istockphoto.com/id/1300285870/photo/interior-design-architecture-computer-generated-image-of-kitchen-architectural-visualization.jpg?s=612x612&w=0&k=20&c=EE4IujoJohlHuLVp-kmpChfcCVE_mHIUgvWPf516300=",
          "https://media.istockphoto.com/id/1294525742/photo/toilet-bowl-with-bidet-shower-in-toilet.jpg?s=612x612&w=0&k=20&c=LuKBFSRdmN_Z4dr3KFTmPUoYzEq1CsfcgVw7YPcFRiI=",
        //   "house3_img6.jpg"
        ]
      },
      {
        id: 4,
        state: "Lagos",
        location: "No. 8 Bourdillon Road, Ikoyi, Lagos",
        price: 1200000,
        typeOfApartment: "Luxury Penthouse",
        type:"luxury",
        images: [
          "https://media.istockphoto.com/id/1492424940/photo/apartment-buidling.jpg?s=612x612&w=0&k=20&c=Y42Jws6Ap9smofsGfwxqwR_JTGo-NXx3pBFbMnXB_NE=",
          "https://media.istockphoto.com/id/114331395/photo/dining-room-in-a-rustic-canadian-log-cabin.jpg?s=612x612&w=0&k=20&c=rcC2A3OEv2Vsc-HhVzt1NQcPhwJRRUlmzPQtTiP6cYw=",
          "https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=",
          "https://media.istockphoto.com/id/2021079562/photo/exterior-and-interior-photography-of-a-modern-farmhouse-residential-home.jpg?s=612x612&w=0&k=20&c=Z08BTsxYN391WZZlwSFM_FMUXDakXnn847QY2gBODko=",
          "https://media.istockphoto.com/id/1299710074/photo/modern-bathroom.jpg?s=612x612&w=0&k=20&c=Owz3lgVKOV0MwFkCT5CHddsIRdnAclRkTaAhOx4hLQ4=",
        //   "house4_img6.jpg"
        ]
      },
      {
        id: 5,
        state: "Oyo",
        location: "No. 15 Ring Road, Ibadan, Oyo",
        price: 350000,
        typeOfApartment: "3 Bedroom Duplex",
        type:"duplex",
        images: [
          "https://media.istockphoto.com/id/1516933385/photo/3d-rendering-of-wooden-forest-house-surrounded-by-trees.jpg?s=612x612&w=0&k=20&c=gNMrzJw158wZaOg_vXgQ6obR0u2Vf4KghWLHxYD7_E8=",
          "https://media.istockphoto.com/id/154952872/photo/contemporary-island-villa.jpg?s=612x612&w=0&k=20&c=s_hHCWCofvWaar-NjSTPbCDFtUkEB6AFGCY4U9Xz2RQ=",
          "https://media.istockphoto.com/id/1266155634/photo/luxurious-and-elegant-bedroom-interiors.jpg?s=612x612&w=0&k=20&c=5O3Lz-WyJv7GYh09rvf66nif1dUsibl01wrt9KrZaSs=",
          "https://media.istockphoto.com/id/1727502851/photo/kitchen-dining-room-and-sunroom-in-a-modern-bungalow.jpg?s=612x612&w=0&k=20&c=Rnq8V4IaDEs93xwFiWxdUgYX90kWN4rlcwz0XYA7ziU=",
          "https://media.istockphoto.com/id/543077004/photo/interior-of-the-modern-design-bathroom.jpg?s=612x612&w=0&k=20&c=FVW6rCNBtnGWMtOLGooK6np0TKqIhyKdakaQJXl1XiY=",
        //   "house5_img6.jpg"
        ]
      },
      {
        id: 6,
        state: "Lagos",
        location: "No. 23 Lekki Phase 1, Lagos",
        price: 950000,
        typeOfApartment: "4 Bedroom Duplex",
        type:"duplex",
        images: [
          "https://media.istockphoto.com/id/175767618/photo/modern-townhouse-complex.jpg?s=612x612&w=0&k=20&c=ltPDM5QTC1a4cdr7Fjvct-KNlNCUPC_IyNC2f93eJ84=",
          "https://media.istockphoto.com/id/175767618/photo/modern-townhouse-complex.jpg?s=612x612&w=0&k=20&c=ltPDM5QTC1a4cdr7Fjvct-KNlNCUPC_IyNC2f93eJ84=",
          "https://media.istockphoto.com/id/2146930786/photo/modern-minimalist-bedroom-with-double-bed-and-white-background.jpg?s=612x612&w=0&k=20&c=DMN5iO7agwUlVc9fJptVoV_6togvcP0ERSBAg-jz5IU=",
          "https://media.istockphoto.com/id/1300285870/photo/interior-design-architecture-computer-generated-image-of-kitchen-architectural-visualization.jpg?s=612x612&w=0&k=20&c=EE4IujoJohlHuLVp-kmpChfcCVE_mHIUgvWPf516300=",
          "https://media.istockphoto.com/id/1180350419/photo/modern-private-apartment-bathroom-interior.jpg?s=612x612&w=0&k=20&c=yG_5SbBv31U2AiHOnBmvAis2e_uBod8UhusJ_2_-Y_M=",
        //   "house6_img6.jpg"
        ]
      },
      {
        id: 7,
        state: "Oyo",
        location: "No. 7 Agodi GRA, Ibadan, Oyo",
        price: 650000,
        typeOfApartment: "2 Bedroom Flat",        type:"flat",
        images: [
          "https://media.istockphoto.com/id/1314814500/photo/houses-in-england-with-typical-red-bricks-at-sunset-main-street-in-a-new-estate-with-typical.jpg?s=612x612&w=0&k=20&c=cJzNzZ48kowbtek68YxdGnC9hmZwCP_cMhS_V8vhw7s=",
          "https://media.istockphoto.com/id/493983479/photo/modern-living-room.jpg?s=612x612&w=0&k=20&c=3pRQIAvi6OL2k8p9VqgfGFuB_1DZ_BJE-1qRsGHcHtg=",
          "https://media.istockphoto.com/id/530931632/photo/cozy-bedroom-interior-with-book-and-reading-lamp.jpg?s=612x612&w=0&k=20&c=k6WLDZNnbvNBJOb7HtT2S0ywcd47TO7C-kcKOeWUmD0=",
          "https://media.istockphoto.com/id/1600542328/photo/classic-elegant-interior-a-modern-but-classic-kitchen-with-a-gray-and-white-wall-background.jpg?s=612x612&w=0&k=20&c=6X5XdreOj7784M_Du_twY7E2JhzAwaStppTi6Wo_Dqo=",
          "https://media.istockphoto.com/id/806937088/photo/white-toilet-bowl-in-the-bathroom.jpg?s=612x612&w=0&k=20&c=os5xQXvrCOoxdb_4HMbjDRm382T9Q3xfylC6XsYdIxQ=",
        //   "house7_img6.jpg"
        ]
      },
      {
        id: 8,
        state: "Lagos",
        location: "No. 10 Banana Island, Ikoyi, Lagos",
        price: 1800000,
        typeOfApartment: "5 Bedroom Mansion",
        type:"mansion",
        images: [
          "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?s=612x612&w=0&k=20&c=vgQesOXDRzz0UfOZxmUtE-rFe75YgA9GvkKS8eeeumE=",
          "https://media.istockphoto.com/id/2162959142/photo/sunken-living-room-in-renovated-bungalow-looking-into-modern-country-kitchen.jpg?s=612x612&w=0&k=20&c=dFpzuyn5PvOiVAx5kiDl_-DmtqWZ1ylYeUqYe2ktBlo=",
          "https://media.istockphoto.com/id/1248992387/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=yk1UrXpw8zRiS4JnowYbpE56KadGDNK-TxA3VwgPfoo=",
          "https://media.istockphoto.com/id/1456467041/photo/beautiful-kitchen-in-new-farmhouse-style-luxury-home-with-island-pendant-lights-and-hardwood.jpg?s=612x612&w=0&k=20&c=wwlKjbAsf_xBveRuqMV2fCJ8cpED0CoXE4GdIUSxpW8=",
          "https://media.istockphoto.com/id/1279708821/photo/newly-renovated-bathroom-toilet-simple-interior-design-white-sanitary-ware-in-the-bathroom.jpg?s=612x612&w=0&k=20&c=R3rPEvwUjvP-Bz0IanvWsi7QytfzvJLtgBaQHn61cec=",
        //   "house8_img6.jpg"
        ]
      },
      {
        id: 9,
        state: "Oyo",
        location: "No. 4 Bodija Estate, Ibadan, Oyo",
        price: 400000,
        typeOfApartment: "3 Bedroom Flat",
        type:"flat",
        images: [
          "https://media.istockphoto.com/id/1198357646/photo/luxury-apartment-with-private-pool.jpg?s=612x612&w=0&k=20&c=DppEBRtR0seXZzvN02VgbtNaNYGyT1Sn0vfL1R3lr6Q=",
          "https://media.istockphoto.com/id/1889536359/photo/interior-of-a-living-room-in-a-country-hotel-room.jpg?s=612x612&w=0&k=20&c=2ScaQzikzVLX9ovhH6PdI5UkT2hYwLM6i3ms9QsxW38=",
          "https://media.istockphoto.com/id/1178809236/photo/cozy-bedroom-in-warm-colors-with-painting-a-nightstand-a-pouf-and-a-plaid.jpg?s=612x612&w=0&k=20&c=tjO84PGISq3Scwel9ikOlVyHh7_Xt1Da1_v2tuIiTpE=",
          "https://media.istockphoto.com/id/1456242777/photo/modern-japandi-mock-up-room-interior-design-and-decoration-with-green-pastel-counter-and.jpg?s=612x612&w=0&k=20&c=xWIYFrx09O-FGo1pizfoEz0A1E6Lsz_pIffTTnypI6U=",
          "https://media.istockphoto.com/id/483834929/photo/interior-small-dressing-room.jpg?s=612x612&w=0&k=20&c=Tpr0aUZkB8eGyLy-wHkELTQzC9psmOWp5WKUsjTNx_Q=",
        //   "house9_img6.jpg"
        ]
      },
      {
        id: 10,
        state: "Lagos",
        location: "No. 15 Victoria Island, Lagos",
        price: 1500000,
        typeOfApartment: "Luxury Apartment",
        type:"luxury",
        images: [
          "https://media.istockphoto.com/id/522540838/photo/lifestyle-apartments.jpg?s=612x612&w=0&k=20&c=n3ICXWHcJ74fOjy4Kbv_cu7tA7KwH82g4OxVGpiHK9U=",
          "https://media.istockphoto.com/id/1341378132/photo/side-view-of-open-plan-kitchen-with-living-room-and-garden-view-from-the-window.jpg?s=612x612&w=0&k=20&c=oOM1OPUlhkPBamoY3yj4mnc8Dg7qb_JIHhdAKpZAi64=",
          "https://media.istockphoto.com/id/1303674434/photo/modern-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=IXXph9AqWrPH-5RAUMdrcFhuvMc8SqrFDoJfpL1-W0I=",
          "https://media.istockphoto.com/id/2021079562/photo/exterior-and-interior-photography-of-a-modern-farmhouse-residential-home.jpg?s=612x612&w=0&k=20&c=Z08BTsxYN391WZZlwSFM_FMUXDakXnn847QY2gBODko=",
          "https://media.istockphoto.com/id/1959214635/photo/modern-bathroom-interior-with-bathtub-toilet-and-sink-for-people-with-disabilities.jpg?s=612x612&w=0&k=20&c=wBl7xi4BVfiCWbnWWHDY-XxaANFqy7Xx9R-K_7zzXCg=",
        //   "house10_img6.jpg"
        ]
      },
      {
        id: 11,
        state: "Oyo",
        location: "No. 20 Oluyole Estate, Ibadan, Oyo",
        price: 5500000,
        typeOfApartment: "4 Bedroom Duplex",
        type:"duplex",
        images: [
          "https://media.istockphoto.com/id/931243836/photo/modern-apartments.jpg?s=612x612&w=0&k=20&c=Ncvxtv4JecFNLDr5xXJ6ncPoYRq60u2jm39KtN42s8c=",
          "https://media.istockphoto.com/id/1536398073/photo/bathrooms-equipment-in-showroom.jpg?s=612x612&w=0&k=20&c=MDsgA3Dc_uq9Pgr42B_oLAmoS09orQTZlZdIbu5liCw=",
          "https://media.istockphoto.com/id/931243836/photo/modern-apartments.jpg?s=612x612&w=0&k=20&c=Ncvxtv4JecFNLDr5xXJ6ncPoYRq60u2jm39KtN42s8c=",
          "https://media.istockphoto.com/id/1297586166/photo/modern-elegant-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=4qVGJq3EZ-DrVC08kFIXuZMGRe5NcEvziV-H4L9aFKc=",
          "https://media.istockphoto.com/id/1739158045/photo/a-bathroom-with-a-brown-cabinet-and-white-subway-tile-shower.jpg?s=612x612&w=0&k=20&c=kUbXCSpFWSObvaG4hFdQngycu4ES4Nyq_skT6lcZ0bE=",
        //   "house11_img6.jpg"
        ]
      },
      {
        id: 12,
        state: "Lagos",
        location: "No. 11 Marina Road, Lagos Island, Lagos",
        price: 500000,
        typeOfApartment: "2 Bedroom Flat",
        type:'flat',
        images: [
          "https://media.istockphoto.com/id/170025651/photo/cream-colored-house-in-a-suburban-neighborhood.jpg?s=612x612&w=0&k=20&c=oHGx2ahBLx_bQc-YMNxJVsIfivGOW9nv5pLtXNVAkEA=",
          "https://media.istockphoto.com/id/1414668379/photo/modestly-decorated-living-room.jpg?s=612x612&w=0&k=20&c=JkojVQJNd-vXhpGmxyJy9_hvNB6wexCarBQBseqyznY=",
          "https://media.istockphoto.com/id/1333102002/photo/modern-style-bedroom-interior.jpg?s=612x612&w=0&k=20&c=rkG5eNaw4cHR24ZnWxEVm9FIgIBwuXHoZhULUk9E7-Q=",
          "https://media.istockphoto.com/id/1600542328/photo/classic-elegant-interior-a-modern-but-classic-kitchen-with-a-gray-and-white-wall-background.jpg?s=612x612&w=0&k=20&c=6X5XdreOj7784M_Du_twY7E2JhzAwaStppTi6Wo_Dqo=",
          "https://media.istockphoto.com/id/1600542328/photo/classic-elegant-interior-a-modern-but-classic-kitchen-with-a-gray-and-white-wall-background.jpg?s=612x612&w=0&k=20&c=6X5XdreOj7784M_Du_twY7E2JhzAwaStppTi6Wo_Dqo=",
          "house12_img6.jpg"
        ]
      },
      {
        id: 13,
        state: "Oyo",
        location: "No. 5 Challenge Road, Ibadan, Oyo",
        price: 320000,
        typeOfApartment: "1 Bedroom Self-Contained",
        type:'self contained',
        images: [
          "https://media.istockphoto.com/id/1343605887/photo/front-exterior-brand-new-trendy-upscale-home-ready-for-sale-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=s21hNP2ZrUY2ME-d5eXhnCF36neL4S2XkX4l-cYj2Do=",
          "https://media.istockphoto.com/id/1383866417/photo/the-backyard-of-the-house-with-a-large-green-lawn.jpg?s=612x612&w=0&k=20&c=q9lCdICZgvdGytTLXtswMApLuXdXDQUg8ylOYJ0_uQ0=",
          "https://media.istockphoto.com/id/1980326931/photo/modern-cozy-bedroom-in-pastel-tones.jpg?s=612x612&w=0&k=20&c=Bg4ndZQqPT3phgwstL8ULQs_JEJazdrFOvdsI6_KNks=",
          "https://media.istockphoto.com/id/1300285870/photo/interior-design-architecture-computer-generated-image-of-kitchen-architectural-visualization.jpg?s=612x612&w=0&k=20&c=EE4IujoJohlHuLVp-kmpChfcCVE_mHIUgvWPf516300=",
          "https://media.istockphoto.com/id/1330857810/photo/modern-bathroom-interior.jpg?s=612x612&w=0&k=20&c=dlWYy9IryGX-FvAnxgMWXGbK1W2NZx-C5jx3J_2sDbo=",
        //   "house13_img6.jpg"
        ]
      },
      {
        id: 14,
        state: "Lagos",
        location: "No. 3 Ajah Estate, Lekki, Lagos",
        price: 850000,
        typeOfApartment: "3 Bedroom Bungalow",
        type:'bungalow',
        images: [
          "https://media.istockphoto.com/id/1275090412/photo/beautiful-country-house-and-garden.jpg?s=612x612&w=0&k=20&c=2a5TEjZt2Di-5RxvgGKfy42KX5q8HPrQFbPBauikqm0=",
          "https://media.istockphoto.com/id/154952872/photo/contemporary-island-villa.jpg?s=612x612&w=0&k=20&c=s_hHCWCofvWaar-NjSTPbCDFtUkEB6AFGCY4U9Xz2RQ=",
          "https://media.istockphoto.com/id/1980039966/photo/bedroom-wall-mockup-cozy-dark-grey-bedroom-interior-background.jpg?s=612x612&w=0&k=20&c=22-yQ7mkzr8DOKFjQWXzSHwAtL9hKiROrEddaesJakg=",
          "https://media.istockphoto.com/id/1297586166/photo/modern-elegant-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=4qVGJq3EZ-DrVC08kFIXuZMGRe5NcEvziV-H4L9aFKc=",
          "https://media.istockphoto.com/id/1330856760/photo/modern-bathroom-interior.jpg?s=612x612&w=0&k=20&c=vC8SV4Dv2dPwa3gFL2mOnzKwNf3q-jBck3Kp36fsRtY=",
        //   "house14_img6.jpg"
        ]
      },
      {
        id: 15,
        state: "Oyo",
        location: "No. 10 Iwo Road, Ibadan, Oyo",
        price: 400000,
        typeOfApartment: "2 Bedroom Flat",
        type:'flat',
        images: [
          "https://media.istockphoto.com/id/667913276/photo/nice-apartment-complex.jpg?s=612x612&w=0&k=20&c=73Ne7Wx9pbstGjwW7WnuvxPUdvi2XjDhSr5AjMV-1Eg=",
          "https://media.istockphoto.com/id/1926860167/photo/front-view-of-a-cozy-elegant-and-modern-living-room-with-gray-sofa-windows-with-decoration.jpg?s=612x612&w=0&k=20&c=NtiePynvQfeiXkZCFpk4IcPQ3t-bfnW09nrwMIKP3lU=",
          "https://media.istockphoto.com/id/533338000/photo/interior-of-a-hotel-bedroom.jpg?s=612x612&w=0&k=20&c=BmMFD92-I5EB-YfscynsMgMmGKJ3t-CAuc7RjdncCM0=",
          "https://media.istockphoto.com/id/1761797030/photo/large-kitchen-with-island-surrounded-by-white-quartzite-countertops.jpg?s=612x612&w=0&k=20&c=-qhFIx_GD8EtfT2rhM_MiWBrTWaeJd6nVU6sXz7XMz0=",
          "https://media.istockphoto.com/id/1183156796/photo/interior-of-bathroom.jpg?s=612x612&w=0&k=20&c=IreEA10dbj4u-rZGphVA7p3iXgphVFYhbLW_jaKffUE=",
        //   "house15_img6.jpg"
        ]
      },
      {
        id: 16,
        state: "Lagos",
        location: "No. 7 Ozumba Mbadiwe Road, VI, Lagos",
        price: 1350000,
        typeOfApartment: "Luxury Penthouse",
        type:'luxury',
        images: [
          "https://media.istockphoto.com/id/1084114422/photo/apartment-modern-houses-homes-residential-buildings-real-estate-outdoor-evening.jpg?s=612x612&w=0&k=20&c=vXQETlhenLtDpA9H-ZG1wZT_e-lpP1JIhjhiAAjtaKQ=",
          "https://media.istockphoto.com/id/2093684613/photo/virtual-design-of-elegant-living-room-with-nature-view.jpg?s=612x612&w=0&k=20&c=ejlc8Arqv3VMdX_mNU-IW5eL0_UQ_nEP-XwYJKpy_5g=",
          "https://media.istockphoto.com/id/991205262/photo/feminine-bedroom-interior-with-a-double-bed-with-dotted-sheets-armchair-art-collection-and.jpg?s=612x612&w=0&k=20&c=Wd0P4B4HQCN6nd1zzFYS6_Cx_ZA0aeV-UIqOtj0jxJ8=",
          "https://media.istockphoto.com/id/1722099286/photo/empty-white-marble-countertop-with-blurred-kitchen-background.jpg?s=612x612&w=0&k=20&c=zJyp0Vc8sqGN4peJwyJBAq7kzAtgZ6vy-eKAmzE7UmY=",
          "https://media.istockphoto.com/id/1440348435/photo/contemporary-bathroom-design.jpg?s=612x612&w=0&k=20&c=y3xbYe3t9SJpDGBq-M9iqEzd1mZ-4x7HdZaFgWnSh1g=",
        //   "house16_img6.jpg"
        ]
      },
      {
        id: 17,
        state: "Oyo",
        location: "No. 18 Orita Challenge, Ibadan, Oyo",
        price: 380000,
        typeOfApartment: "3 Bedroom Duplex",
        type:'duplex',
        images: [
          "https://media.istockphoto.com/id/2163132098/photo/residential-revolution.jpg?s=612x612&w=0&k=20&c=OMsJH7YfQNO9L743RWE5mRjMU8oORBInM9xo2z4Gdh4=",
          "https://media.istockphoto.com/id/1990444472/photo/scandinavian-style-cozy-living-room-interior.jpg?s=612x612&w=0&k=20&c=qgzrs_4vKDrOVo6gVc0EVb9-PziE-REbV9DcM5ZAfig=",
          "https://media.istockphoto.com/id/2045383950/photo/digital-render-of-a-serene-bedroom-oasis-with-natural-light.jpg?s=612x612&w=0&k=20&c=GnifMJfGSUd96PE8rxKRVvnIb-vcwIWIuY783FkcPMk=",
          "https://media.istockphoto.com/id/1210163691/photo/beautiful-kitchen-in-new-home-with-island-pendant-lights-and-hardwood-floors.jpg?s=612x612&w=0&k=20&c=fwAyqkfOJVp_2A9oUWYHb2htaTTCOfWRY38dBovRbtM=",
          "https://media.istockphoto.com/id/1311583923/photo/interior-design-architecture-computer-generated-image-of-bathroom-architectural-visualization.jpg?s=612x612&w=0&k=20&c=1Q84iwSQjrT_HhOAUXaS372oMT45EIjb19LDsKO2Lds=",
        //   "house17_img6.jpg"
        ]
      },
      {
        id: 18,
        state: "Lagos",
        location: "No. 12 Admiralty Way, Lekki, Lagos",
        price: 1100000,
        typeOfApartment: "4 Bedroom Duplex",
        type:'duplex',
        images: [
          "https://media.istockphoto.com/id/2009508224/photo/landscape-photography-with-an-old-housing-complex.jpg?s=612x612&w=0&k=20&c=SoRMoR4X6ES89-r3p7XWpfJjPZDZcT7F3cjsFkzuKTM=",
          "https://media.istockphoto.com/id/1837566278/photo/scandinavian-style-apartment-interior.jpg?s=612x612&w=0&k=20&c=axDBn5yU5jTQ6VOqYAIoY7cs4_T26qzXArBWYw_ZF3E=",
          "https://media.istockphoto.com/id/1926054163/photo/modern-rustic-bedroom-interior.jpg?s=612x612&w=0&k=20&c=cogxceHnDHTXqHnNMq7r2XAlS0bOvbWhvHgF3mdWZ0k=",
          "https://media.istockphoto.com/id/1386951967/photo/modern-kitchen-interior-with-green-wall.jpg?s=612x612&w=0&k=20&c=_RH7ZsQPyXSzq8yEMEtcaoII_szuFpQKIWrGDLwPA-I=",
          "https://media.istockphoto.com/id/120922541/photo/old-bathroom.jpg?s=612x612&w=0&k=20&c=-idx1Tv6p5GCTBFwmTmRBioZSd_e7L_2lfsuvVv0JK4=",
        //   "house18_img6.jpg"
        ]
      },
      {
        id: 19,
        state: "Oyo",
        location: "No. 9 Apata GRA, Ibadan, Oyo",
        price: 450000,
        typeOfApartment: "3 Bedroom Flat",
        type:'flat',
        images: [
          "https://media.istockphoto.com/id/112112908/photo/country-home.jpg?s=612x612&w=0&k=20&c=GfsHP3s--P0MYbBLVi3PYNXhqnrSO5dAbiRbaHS_GIs=",
          "https://media.istockphoto.com/id/2147589346/photo/large-dining-room-and-large-living-room-all-in-the-same-space-nice-marble-table-with-four.jpg?s=612x612&w=0&k=20&c=eKHdnzYLzDuPTyQlac-ivhohXexyS7-F-laPc75D7vk=",
          "https://media.istockphoto.com/id/2146940068/photo/modern-minimalist-bedroom-with-double-bed-and-vertical-garden-on-wall.jpg?s=612x612&w=0&k=20&c=RdfjO179w5eCg3nJRGiGfBYdYJF49sdJ7g2nL3QQcAg=",
          "https://media.istockphoto.com/id/1705627511/photo/before-and-after-kitchen-renovation-in-barcelona.jpg?s=612x612&w=0&k=20&c=NI0mAifXXHClqwMj5RizNyZ7TjON6Z0OvG8SgkAs7NE=",
          "https://media.istockphoto.com/id/1439676942/photo/bathroom-with-a-shower-cabin-a-large-mirror-and-a-chrome-heater-or-a-radiator-of-a-towel.jpg?s=612x612&w=0&k=20&c=PWhZFAoxKB8USsGJ30ZZzBZwSdyktPOVa_D-bTyEi84=",
        //   "house19_img6.jpg"
        ]
      },
      {
        id: 20,
        state: "Lagos",
        location: "No. 1 Glover Road, Ikoyi, Lagos",
        price: 1750000,
        typeOfApartment: "5 Bedroom Mansion",
        type:'mansion',
        images: [
          "https://media.istockphoto.com/id/1009154912/photo/facade-of-a-modern-apartment-building.jpg?s=612x612&w=0&k=20&c=uiQ5oLbn4U3pkLPpZGNstG7PO_7UtvIkJPrJ6pQ89DU=",
          "https://media.istockphoto.com/id/1341594275/photo/tiny-house-interior-with-sofa-kitchen-dining-table-bedroom-and-garden-view-from-the-window.jpg?s=612x612&w=0&k=20&c=E2SB8I0KFp_wcr5YCG1_eqXtZt0q1LZ7sDo267T7gYs=",
          "https://media.istockphoto.com/id/2173743341/photo/hotel-bedroom-featuring-a-double-bed-and-stylish-decor.jpg?s=612x612&w=0&k=20&c=KUSN9KbI__-z28E6mGSkzQn6750raRUVNW_c8OmoAiw=",
          "https://media.istockphoto.com/id/1210163691/photo/beautiful-kitchen-in-new-home-with-island-pendant-lights-and-hardwood-floors.jpg?s=612x612&w=0&k=20&c=fwAyqkfOJVp_2A9oUWYHb2htaTTCOfWRY38dBovRbtM=",
          "https://media.istockphoto.com/id/465176599/photo/luxurious-bathing-room.jpg?s=612x612&w=0&k=20&c=7eQ0sT2p6WrA34kao4PfurefyTb_hl4fcVqIg57PXjI=",
        //   "house20_img6.jpg"
        ]
      },
          {
      id: 21,
      state: "Oyo",
      location: "No. 23 Jericho Hill, Ibadan, Oyo",
      price: 330000,
      typeOfApartment: "2 Bedroom Flat",
      type:'flat',
      images: [
        "https://media.istockphoto.com/id/2157215651/photo/recently-build-housing-estate.jpg?s=612x612&w=0&k=20&c=lfi1Zjk7rfE5jW9LDRK_dvSGCdnBv1T0uQt6cjo0jNg=",
        "https://media.istockphoto.com/id/2162959108/photo/modern-open-concept-country-kitchen-with-large-quartz-island.jpg?s=612x612&w=0&k=20&c=DH-KWurZOmn5eiCrr0PA9gGzWuOJQsD7RQpORxiUG4U=",
        "https://media.istockphoto.com/id/2151163836/photo/double-bed-in-bedroom-with-towels.jpg?s=612x612&w=0&k=20&c=k9MbHXKmL9uCQmr32xPZD0T7-otLiJp1cxB9uIJmQRE=",
        "https://media.istockphoto.com/id/2162959054/photo/modern-country-kitchen-with-reclaimed-wood-hood-fan.jpg?s=612x612&w=0&k=20&c=as-Hkf3BPCOIFPTU_-ZGHpJAfgI9w6ABd2tbmiwDEPU=",
        "https://media.istockphoto.com/id/1290914813/photo/toilet-in-a-toilet-room.jpg?s=612x612&w=0&k=20&c=Z1SpeeHh2k3WZgDWZjH3BzceelgjiCf9NR7t7Gdc35E=",
        // "house21_img6.jpg"
      ]
    },
    {
      id: 22,
      state: "Lagos",
      location: "No. 9 Ozumba Avenue, VI, Lagos",
      price: 1600000,
      typeOfApartment: "Luxury Penthouse",
      type:'luxury',
      images: [
        "https://media.istockphoto.com/id/2076934092/photo/apartment-building-with-autumn-trees-landscape.jpg?s=612x612&w=0&k=20&c=pvzayEa5rr3tksZbGQfUyYskShpudPrqCz4-in8dz08=",
        "https://media.istockphoto.com/id/1682712990/photo/modern-open-plan-home-interior.jpg?s=612x612&w=0&k=20&c=Q132UfZG_DjWCmZ0mEGkeBIV5IZiXAIQl4F9_VU3z0o=",
        "https://media.istockphoto.com/id/488468230/photo/ocean-house.jpg?s=612x612&w=0&k=20&c=yfA7TtbVojjTVkfCNGmF0ff3CTxnM5lH3jQulIRNy70=",
        "https://media.istockphoto.com/id/2076934092/photo/apartment-building-with-autumn-trees-landscape.jpg?s=612x612&w=0&k=20&c=pvzayEa5rr3tksZbGQfUyYskShpudPrqCz4-in8dz08=",
        "https://media.istockphoto.com/id/543323082/photo/interior-of-the-modern-design-bathroom.jpg?s=612x612&w=0&k=20&c=GO0ii0di9FxKFiL8lrh-pJubW1bHoFa3B6IMeLSoSRo=",
        // "house22_img6.jpg"
      ]
    },
    {
      id: 23,
      state: "Oyo",
      location: "No. 14 Adebayo Crescent, Ibadan, Oyo",
      price: 320000,
      typeOfApartment: "1 Bedroom Self-Contained",
      type:'self contained',
      images: [
        "https://media.istockphoto.com/id/484603547/photo/modern-suburban-house.jpg?s=612x612&w=0&k=20&c=G-khqZLBvgfiukaY2DBirYlfQvO_wqEItW-3J98qhuM=",
        "",
        "https://media.istockphoto.com/id/2170352952/photo/the-interior-of-the-double-room-is-in-a-modern-minimalist-style-with-red-decor-with-space-to.jpg?s=612x612&w=0&k=20&c=sFnC0rkwYdUKnp12cR4whJozaFPgbRs7ljghFq4mol8=",
        "https://media.istockphoto.com/id/2162959765/photo/modern-country-kitchen-with-reclaimed-wood-hood-fan.jpg?s=612x612&w=0&k=20&c=ImNxj72G8xQKMM9EGb9beJiK7jT20QDe4_NXNsfWTcM=",
        "https://media.istockphoto.com/id/1294525742/photo/toilet-bowl-with-bidet-shower-in-toilet.jpg?s=612x612&w=0&k=20&c=LuKBFSRdmN_Z4dr3KFTmPUoYzEq1CsfcgVw7YPcFRiI=",
        "house23_img6.jpg"
      ]
    },
    {
      id: 24,
      state: "Lagos",
      location: "No. 12 Banana Island, Ikoyi, Lagos",
      price: 2000000,
      typeOfApartment: "5 Bedroom Mansion",
      type:'mansion',
      images: [
        "https://media.istockphoto.com/id/1151833004/photo/beautiful-modern-house-with-a-large-garage-for-cars.jpg?s=612x612&w=0&k=20&c=ZuP1O_pbfRzuaVAq8LTlG_G7HA4TxwKjZaWQqLPb5rA=",
        "https://media.istockphoto.com/id/1837566278/photo/scandinavian-style-apartment-interior.jpg?s=612x612&w=0&k=20&c=axDBn5yU5jTQ6VOqYAIoY7cs4_T26qzXArBWYw_ZF3E=",
        "https://media.istockphoto.com/id/2152107582/photo/orange-bed-and-mockup-dark-green-wall-in-bedroom-interior-3d-rendering.jpg?s=612x612&w=0&k=20&c=w71UXyB38-fY3O3hIIgfyN-VLohYoBkFCh8YuS0IzhQ=",
        "https://media.istockphoto.com/id/1210163691/photo/beautiful-kitchen-in-new-home-with-island-pendant-lights-and-hardwood-floors.jpg?s=612x612&w=0&k=20&c=fwAyqkfOJVp_2A9oUWYHb2htaTTCOfWRY38dBovRbtM=",
        "https://media.istockphoto.com/id/157434905/photo/luxurious-bathroom.jpg?s=612x612&w=0&k=20&c=6xCleiQJggoagIrsXHHkikMsMnRKAy4pxQ2aIPNtjzc=",
        // "house24_img6.jpg"
      ]
    },
    {
      id: 25,
      state: "Oyo",
      location: "No. 7 Bodija Estate, Ibadan, Oyo",
      price: 450000,
      typeOfApartment: "3 Bedroom Duplex",
      type:'duplex',
      images: [
        "https://media.istockphoto.com/id/1257208782/photo/3d-rendering-of-modern-clinker-house-on-the-ponds-in-spring.jpg?s=612x612&w=0&k=20&c=jcUtR3jAuSCEP7Ys9bmUx7rtRN0P-nYuim--DKiGljI=",
        "https://media.istockphoto.com/id/2077892760/photo/minimalist-living-room-interior-with-modern-fireplace-and-white-walls-interior-mockup-3d.jpg?s=612x612&w=0&k=20&c=YngddBAW5wUINAZC8bZTv2nUW2kjxK8I-_dfqSuOY4M=",
        "https://media.istockphoto.com/id/2169200951/photo/modern-bedroom-interior-with-bed-side-table-armchair-and-bookshelf.jpg?s=612x612&w=0&k=20&c=8yBjbY0iatSggSR99CouBvtZzLJtszRWLr1J0jxGaBw=",
        "https://media.istockphoto.com/id/2053961830/photo/luxury-modern-gray-kitchen.jpg?s=612x612&w=0&k=20&c=JVyV2xLN-xr52YCmIyrzEhrCp7tnyVx3myBbneELUv4=",
        "https://media.istockphoto.com/id/157434905/photo/luxurious-bathroom.jpg?s=612x612&w=0&k=20&c=6xCleiQJggoagIrsXHHkikMsMnRKAy4pxQ2aIPNtjzc=",
        // "house25_img6.jpg"
      ]
    },
    {
      id: 26,
      state: "Lagos",
      location: "No. 18 Ajah Estate, Lekki, Lagos",
      price: 1100000,
      typeOfApartment: "4 Bedroom Duplex",
      type:'duplex',
      images: [
        "https://media.istockphoto.com/id/1680403651/photo/modern-white-wooden-house.jpg?s=612x612&w=0&k=20&c=9BnDGt2tbv5v2ElpcbR2ksepYQtnAuthmLrkGKIR-Pw=",
        "https://media.istockphoto.com/id/2147589346/photo/large-dining-room-and-large-living-room-all-in-the-same-space-nice-marble-table-with-four.jpg?s=612x612&w=0&k=20&c=eKHdnzYLzDuPTyQlac-ivhohXexyS7-F-laPc75D7vk=",
        "https://media.istockphoto.com/id/1357529812/photo/digitally-generated-image-of-a-bedroom-interiors-with-minimal-furniture.jpg?s=612x612&w=0&k=20&c=QEQqZHCDDDxovPvKPhuefgPTqqsPLrLm8OgLIKD0m6k=",
        "https://media.istockphoto.com/id/1440915598/photo/modern-apartment-kitchen-interior.jpg?s=612x612&w=0&k=20&c=cwFJC8bH_8cKbFTP9gZyoQdBIW0hG3eQ6OQw-P5PB94=",
        "https://media.istockphoto.com/id/1178829148/photo/3d-render-of-luxury-bathroom.jpg?s=612x612&w=0&k=20&c=KPbIh2QBmv3o-WTay9EMQKiBXtg0YEPp5Vn5L6c4-_k=",
        // "house26_img6.jpg"
      ]
    },
    {
      id: 27,
      state: "Oyo",
      location: "No. 9 Challenge Road, Ibadan, Oyo",
      price: 350000,
      typeOfApartment: "1 Bedroom Flat",
      type:'flat',
      images: [
        "https://media.istockphoto.com/id/1496276338/photo/single-family-neighborhood-on-lawns-in-sunny-day-homeownership-in-midtown-of-memphis-tn.jpg?s=612x612&w=0&k=20&c=3yO-p7hMbKRM1lsFemZ-vXP8urqENmGm9docfu1Ac-E=",
        "https://media.istockphoto.com/id/1700873470/photo/dark-scandinavian-interior-of-the-living-room-with-gray-walls-cozy-furniture-leather-sofa.jpg?s=612x612&w=0&k=20&c=MGVwpohQGxs39Ko-Xm5wt2iXm7W1hqGraojzdn6nBeg=",
        "https://media.istockphoto.com/id/1821430845/photo/modern-and-minimalist-interior-of-bedroom-green-armchair-on-dark-green-wall-3d-render.jpg?s=612x612&w=0&k=20&c=lsk2geSMI1V68DGkr3e9H_JNLQQdkkDdmnNHR9QhH1Q=",
        "https://media.istockphoto.com/id/2156978135/photo/1980s-kitchen-in-a-small-house.jpg?s=612x612&w=0&k=20&c=_BkGXxP86PjAZh_LT8E_5x7yzB_by2kKw_T0txxPSoA=",
        "https://media.istockphoto.com/id/1311583923/photo/interior-design-architecture-computer-generated-image-of-bathroom-architectural-visualization.jpg?s=612x612&w=0&k=20&c=1Q84iwSQjrT_HhOAUXaS372oMT45EIjb19LDsKO2Lds=",
        // "house27_img6.jpg"
      ]
    },
    {
      id: 28,
      state: "Lagos",
      location: "No. 3 Lekki Phase 2, Lagos",
      price: 900000,
      typeOfApartment: "3 Bedroom Bungalow",
      type:'bungalow',
      images: [
        "https://media.istockphoto.com/id/185328718/photo/modern-housing.jpg?s=612x612&w=0&k=20&c=ysNsUqusOMGLj367h4S43is2tp2LjiFWt7-qqpaGRDs=",
        "https://media.istockphoto.com/id/94098906/photo/living-room-panorama-in-luxury-home.jpg?s=612x612&w=0&k=20&c=EkTfj0U_OIIf9OVAM0cxcTyIhZVT8gWfXE9cy573sCo=",
        "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=",
        "https://media.istockphoto.com/id/1456467039/photo/beautiful-living-room-and-kitchen-in-new-luxury-home-with-white-cabinets-wood-beams-pendant.jpg?s=612x612&w=0&k=20&c=x_ZXg6o_H6Bsww7Vr8126nXnNJULmYKABuXS3sc8qqE=",
        "https://media.istockphoto.com/id/1440348435/photo/contemporary-bathroom-design.jpg?s=612x612&w=0&k=20&c=y3xbYe3t9SJpDGBq-M9iqEzd1mZ-4x7HdZaFgWnSh1g=",
        // "house28_img6.jpg"
      ]
    },
    {
      id: 29,
      state: "Oyo",
      location: "No. 8 Ring Road, Ibadan, Oyo",
      price: 420000,
      typeOfApartment: "2 Bedroom Flat",
      type:'flat',
      images: [
        "https://media.istockphoto.com/id/510617082/photo/modern-small-residential-apartments.jpg?s=612x612&w=0&k=20&c=PXNJrsyHsBh7VONv6uuXiEpcDEmA5ji1m3ZAMJ85X7g=",
        "https://media.istockphoto.com/id/2095520629/photo/modern-living-room-interior-with-pink-sofa-green-armchair-potted-plant-and-floor-lamp.jpg?s=612x612&w=0&k=20&c=ubDcaxMOBT-g9hm5libohyTGOOSfjv-d24q11QLhp0E=",
        "https://media.istockphoto.com/id/1314179057/photo/a-bright-bedroom-with-a-horizontal-poster-over-the-head-of-the-bed-vases-of-flowers-on-the.jpg?s=612x612&w=0&k=20&c=-0TB-bM5QbQJ8FG-h4qa8X2KiJdJOwfzM1nD0wW_Tu8=",
        "https://media.istockphoto.com/id/1297933278/photo/kitchen-still-life.jpg?s=612x612&w=0&k=20&c=RDJvfKM08usyVaO9WQRRDzn2I2L8J78KwLJJkG-6MZ0=",
        "https://media.istockphoto.com/id/610546964/photo/bright-bathroom.jpg?s=612x612&w=0&k=20&c=Vy-5IuVbH5vag2ilwDN-bhjtnG0jflKtc--3cEX-lKk=",
        // "house29_img6.jpg"
      ]
    },
    {
      id: 30,
      state: "Lagos",
      location: "No. 1 Victoria Island, Lagos",
      price: 1600000,
      typeOfApartment: "Luxury Apartment",
      type:'luxury',
      images: [
        "https://media.istockphoto.com/id/1202014314/photo/modern-colorful-housing-estate-szczecin-poland.jpg?s=612x612&w=0&k=20&c=zpl5LAnTmlOcjxwkBJRdgwUx7I0p1JDEFqCNX5YeFpI=",
        "https://media.istockphoto.com/id/1794738668/photo/modern-interior-with-christmas-decorations.jpg?s=612x612&w=0&k=20&c=Hrpd-K_hxZoQuD-liLoJ0Qoky_88GLQ1JXiffZXKGgE=",
        "https://media.istockphoto.com/id/1370825295/photo/modern-hotel-room-with-double-bed-night-tables-tv-set-and-cityscape-from-the-window.jpg?s=612x612&w=0&k=20&c=QMXz9HJVhU-8MtBYyeJxtqLz90j7r0SrR6FTWniPkgc=",
        "https://media.istockphoto.com/id/2156513477/photo/hanging-pendant-lights-in-kitchen-with-refrigerator.jpg?s=612x612&w=0&k=20&c=j6RF6vb65sDksmbK3VjPEqc7zsnWPYc5Kczvw9Ayneo=",
        "https://media.istockphoto.com/id/120922541/photo/old-bathroom.jpg?s=612x612&w=0&k=20&c=-idx1Tv6p5GCTBFwmTmRBioZSd_e7L_2lfsuvVv0JK4=",
        // "house30_img6.jpg"
      ]
    },
    // {
    //   id: 31,
    //   state: "Oyo",
    //   location: "No. 25 Mokola Hill, Ibadan, Oyo",
    //   price: 320000,
    //   typeOfApartment: "1 Bedroom Self-Contained",
    //   images: [
    //     "",
    //     "",
    //     "",
    //     "",
    //     "",
    //     "house31_img6.jpg"
    //   ]
    // },
    // {
    //   id: 32,
    //   state: "Lagos",
    //   location: "No. 11 Ikoyi Crescent, Lagos",
    //   price: 1900000,
    //   typeOfApartment: "4 Bedroom Duplex",
    //   images: [
    //     "",
    //     "",
    //     "",
    //     "https://media.istockphoto.com/id/1498629265/photo/side-view-of-retro-anthracite-stainless-steel-and-marble-kitchen-with-old-fashioned-windows.jpg?s=612x612&w=0&k=20&c=rj7Vi5W8EsHzF84On-nB4MJFoe72UDp-782btEbTY6Q=",
    //     "",
    //     "house32_img6.jpg"
    //   ]
    // },
    // {
    //     id: 33,
    //     state: "Oyo",
    //     location: "No. 32 Aleshinloye Road, Ibadan, Oyo",
    //     price: 380000,
    //     typeOfApartment: "3 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house33_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 34,
    //     state: "Lagos",
    //     location: "No. 15 Akerele Street, Surulere, Lagos",
    //     price: 850000,
    //     typeOfApartment: "2 Bedroom Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house34_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 35,
    //     state: "Oyo",
    //     location: "No. 10 Orita Challenge, Ibadan, Oyo",
    //     price: 420000,
    //     typeOfApartment: "1 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house35_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 36,
    //     state: "Lagos",
    //     location: "No. 8 GRA, Ikeja, Lagos",
    //     price: 1500000,
    //     typeOfApartment: "4 Bedroom Mansion",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house36_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 37,
    //     state: "Oyo",
    //     location: "No. 5 University Road, Ibadan, Oyo",
    //     price: 550000,
    //     typeOfApartment: "3 Bedroom Duplex",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house37_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 38,
    //     state: "Lagos",
    //     location: "No. 12 Lekki Coastal Road, Lekki, Lagos",
    //     price: 1800000,
    //     typeOfApartment: "Luxury Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house38_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 39,
    //     state: "Oyo",
    //     location: "No. 25 Jericho, Ibadan, Oyo",
    //     price: 340000,
    //     typeOfApartment: "2 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house39_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 40,
    //     state: "Lagos",
    //     location: "No. 3 Victoria Island, Lagos",
    //     price: 1200000,
    //     typeOfApartment: "3 Bedroom Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house40_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 41,
    //     state: "Oyo",
    //     location: "No. 19 Oluyole Estate, Ibadan, Oyo",
    //     price: 400000,
    //     typeOfApartment: "3 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house41_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 42,
    //     state: "Lagos",
    //     location: "No. 16 Ogundana Street, Ikeja, Lagos",
    //     price: 950000,
    //     typeOfApartment: "2 Bedroom Bungalow",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house42_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 43,
    //     state: "Oyo",
    //     location: "No. 30 Old Bodija Estate, Ibadan, Oyo",
    //     price: 375000,
    //     typeOfApartment: "2 Bedroom Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house43_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 44,
    //     state: "Lagos",
    //     location: "No. 4 Saka Tinubu Street, VI, Lagos",
    //     price: 1700000,
    //     typeOfApartment: "5 Bedroom Mansion",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house44_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 45,
    //     state: "Oyo",
    //     location: "No. 28 Sango-Ojoo Road, Ibadan, Oyo",
    //     price: 440000,
    //     typeOfApartment: "3 Bedroom Duplex",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house45_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 46,
    //     state: "Lagos",
    //     location: "No. 22 Niyi Okunola Street, Ikeja, Lagos",
    //     price: 1300000,
    //     typeOfApartment: "4 Bedroom Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house46_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 47,
    //     state: "Oyo",
    //     location: "No. 12 Akala Expressway, Ibadan, Oyo",
    //     price: 360000,
    //     typeOfApartment: "2 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house47_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 48,
    //     state: "Lagos",
    //     location: "No. 30 Lagos Road, Ikeja, Lagos",
    //     price: 1600000,
    //     typeOfApartment: "Luxury Duplex",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house48_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 49,
    //     state: "Oyo",
    //     location: "No. 4 Old Bodija, Ibadan, Oyo",
    //     price: 310000,
    //     typeOfApartment: "1 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house49_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 50,
    //     state: "Lagos",
    //     location: "No. 7 Ogunlana Drive, Surulere, Lagos",
    //     price: 1250000,
    //     typeOfApartment: "4 Bedroom Duplex",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house50_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 51,
    //     state: "Oyo",
    //     location: "No. 8 Alalubosa, Ibadan, Oyo",
    //     price: 390000,
    //     typeOfApartment: "2 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house51_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 52,
    //     state: "Lagos",
    //     location: "No. 45 Maryland, Ikeja, Lagos",
    //     price: 1150000,
    //     typeOfApartment: "3 Bedroom Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house52_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 53,
    //     state: "Oyo",
    //     location: "No. 21 Awolowo Avenue, Ibadan, Oyo",
    //     price: 470000,
    //     typeOfApartment: "1 Bedroom Self-Contained",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house53_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 54,
    //     state: "Lagos",
    //     location: "No. 19 Saka Tinubu Street, Victoria Island, Lagos",
    //     price: 1950000,
    //     typeOfApartment: "Luxury Penthouse",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house54_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 55,
    //     state: "Oyo",
    //     location: "No. 3 Iwo Road, Ibadan, Oyo",
    //     price: 280000,
    //     typeOfApartment: "3 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house55_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 56,
    //     state: "Lagos",
    //     location: "No. 10 Lekki Free Trade Zone, Lekki, Lagos",
    //     price: 1650000,
    //     typeOfApartment: "4 Bedroom Duplex",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house56_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 57,
    //     state: "Oyo",
    //     location: "No. 2 Aleshinloye, Ibadan, Oyo",
    //     price: 360000,
    //     typeOfApartment: "1 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house57_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 58,
    //     state: "Lagos",
    //     location: "No. 20 Bode Thomas, Surulere, Lagos",
    //     price: 800000,
    //     typeOfApartment: "2 Bedroom Bungalow",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house58_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 59,
    //     state: "Oyo",
    //     location: "No. 7 Ogunyinka Street, Ibadan, Oyo",
    //     price: 420000,
    //     typeOfApartment: "3 Bedroom Duplex",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house59_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 60,
    //     state: "Lagos",
    //     location: "No. 14 Bagauda Kaltho Street, Victoria Island, Lagos",
    //     price: 1450000,
    //     typeOfApartment: "Luxury Apartment",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house60_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 61,
    //     state: "Oyo",
    //     location: "No. 8 Oluyole Estate, Ibadan, Oyo",
    //     price: 375000,
    //     typeOfApartment: "2 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house61_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 62,
    //     state: "Lagos",
    //     location: "No. 9 Adeola Odeku Street, Victoria Island, Lagos",
    //     price: 2000000,
    //     typeOfApartment: "5 Bedroom Mansion",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house62_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 63,
    //     state: "Oyo",
    //     location: "No. 45 Agodi Gate, Ibadan, Oyo",
    //     price: 500000,
    //     typeOfApartment: "3 Bedroom Flat",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house119_img6.jpg"
    //     ]
    //   },
    //   {
    //     id: 64,
    //     state: "Lagos",
    //     location: "No. 9 Marina Road, Lagos Island, Lagos",
    //     price: 1750000,
    //     typeOfApartment: "Luxury Mansion",
    //     type:"luxury",
    //     images: [
    //       "",
    //       "",
    //       "",
    //       "",
    //       "",
    //       "house120_img6.jpg"
    //     ]
    //   }
    ];
    const landlordNames = [
      'Mr. John Smith',
      'Ms. Emma Johnson',
      'Dr. Michael Williams',
      'Mrs. Sophia Brown',
      'Mr. James Jones',
      'Ms. Olivia Garcia',
      'Dr. David Miller',
      'Mrs. Isabella Davis',
      'Mr. Chris Martinez',
      'Ms. Mia Lopez',
      'Dr. Daniel Gonzalez',
      'Mrs. Emily Wilson',
      'Mr. Ethan Anderson',
      'Ms. Charlotte Thomas',
      'Dr. Liam Taylor',
      'Mrs. Abigail Moore',
      'Mr. Noah Jackson',
      'Ms. Ella Martin',
      'Dr. Mason Thompson',
      'Mrs. Amelia White',
      'Mr. Alexander Harris',
      'Ms. Lily Lewis',
      'Dr. Benjamin Young',
      'Mrs. Zoe Hall',
      'Mr. Jacob Walker',
      'Ms. Grace Allen',
      'Dr. Lucas King',
      'Mrs. Aria Wright',
      'Mr. Logan Scott',
      'Ms. Hazel Adams',
      'Dr. Caleb Baker',
      'Mrs. Scarlett Perez',
      'Mr. Henry Mitchell',
      'Ms. Stella Roberts',
      'Dr. Samuel Evans',
      'Mrs. Ellie Carter',
      'Mr. Owen Phillips',
      'Ms. Violet Campbell',
      'Dr. Jackson Parker',
      'Mrs. Hannah Rivera',
      'Mr. Jack Turner',
      'Ms. Claire Morgan',
      'Dr. William Cox',
      'Mrs. Layla Reed',
      'Mr. Aiden Cook',
      'Ms. Nora Bailey',
      'Dr. Wyatt Cooper',
      'Mrs. Penelope Rogers',
      'Mr. Sebastian Peterson',
      'Ms. Audrey Flores',
      'Dr. Levi Morales',
    ];
    
    export default apartments
    export  {landlordNames}