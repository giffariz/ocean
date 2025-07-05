const id = {
    home: {
        title1: "Temukan Kepribadian",
        title2: "Jagoan Kamu",
        greeting: "Jelajahi perjalanan mengenal diri lewat dunia kepribadian Big 5. Temui karakter penuh warna dan temukan sisi dominan dalam dirimu!",
    },

    characacters: {
        title1: "Temui para",
        title2: "Karakter",
        openness: {
            name: "Openness",
            title: "Sang Pencari",
            description:
                "Orang dengan trait Openness tinggi hidup dalam dunia ide, kemungkinan, dan keindahan yang belum tersentuh. Mereka tertarik pada hal-hal yang abstrak, imajinatif, dan tidak biasa. Imajinasi mereka tidak hanya digunakan untuk berfantasi, tetapi juga untuk mengeksplorasi konsep-konsep filosofis, seni, budaya, dan inovasi. Mereka mencintai hal-hal baru dan selalu mencari cara untuk memperluas wawasan.\n\nDalam penelitian IPIP dan NEO-PI-R, Openness sangat berkorelasi dengan minat artistik, rasa ingin tahu intelektual, dan toleransi terhadap ambiguitas. Mereka cenderung tidak menyukai rutinitas yang kaku dan lebih memilih jalan yang belum pernah ditempuh. Kreativitas adalah kekuatan utama mereka, dan dalam banyak kasus, mereka adalah pencetus ide-ide segar dalam kelompok atau organisasi.\n\nNamun, mereka bisa kehilangan pijakan karena terlalu larut dalam ide atau perubahan. Mereka sering kesulitan menyelesaikan satu hal sebelum pindah ke ide lain, dan bisa dianggap eksentrik atau sulit dimengerti. Bagi sebagian orang, mereka tampak \"terlalu idealis\" atau tidak praktis.\n\nMeski begitu, dunia membutuhkan Sang Pemimpi—karena tanpa mereka, tidak akan ada seni, penemuan besar, atau perubahan signifikan dalam peradaban.",
            description2: "Openness mencerminkan kecenderungan terhadap rasa ingin tahu, imajinasi, dan apresiasi terhadap pengalaman baru. Orang dengan tingkat trait ini yang tinggi cenderung menyukai hal-hal baru dan eksplorasi ide-ide abstrak, sementara yang lebih rendah biasanya lebih menyukai rutinitas, hal yang familiar, dan cara berpikir praktis.",
            core: ["Imajinatif", "Penasaran", "Kreatif", "Abstrak", "Inventif", "Unik"],
            strength: [
                "Berwawasan luas",
                "Berpikiran terbuka",
                "Visioner",
                "Cepat belajar",
                "Suka mencoba",
                "Ekspresif"
            ],
            weakness: [
                "Mudah bosan",
                "Tidak fokus",
                "Terlalu idealis",
                "Terlalu rumit",
                "Kurang realistik",
                "Tidak suka rutinitas"
            ],
            funfacts: [
                "Ganti hobi udah sesering ganti tab browser.",
                "Ngelike dokumenter, nggak ditonton, tapi ngerasa makin pinter.",
                "Pernah kepikiran ganti karier gara-gara satu video inspiratif.",
                "Bookmark-nya isinya filsafat, AI, sama cara budidaya jamur.",
                "Corat-coret simbol aneh pas meeting, katanya ‘lagi mikir’.",
                "Bisa bikin iklan random jadi bahan pertanyaan eksistensial."
            ]
        },
        conscientiousness: {
            name: "Conscientiousness",
            title: "Sang Strategis",
            description:
                "Mereka yang tinggi dalam Conscientiousness adalah perwujudan dari ketekunan dan tanggung jawab. Mereka menyukai keteraturan, punya kontrol diri yang kuat, dan jarang melupakan tugas atau janji. Dalam hidup, mereka berorientasi pada pencapaian, tidak hanya bekerja keras tapi juga bekerja cerdas, dengan rencana matang dan evaluasi diri yang ketat.\n\nSecara ilmiah, trait ini sangat berkorelasi dengan pencapaian akademik, ketekunan profesional, dan stabilitas hidup jangka panjang. Orang conscientious sering dijadikan panutan karena keandalan dan integritasnya. Mereka tipe yang akan menyusun ulang spreadsheet keuangan sebelum tidur dan bangun pagi dengan agenda penuh.\n\nNamun, mereka bisa terjebak dalam perfeksionisme, merasa bersalah jika istirahat terlalu lama, atau tidak tahan terhadap kekacauan spontan. Dalam dinamika tim, mereka terkadang terlalu kaku dan sulit menerima pendekatan yang berbeda dari rencana mereka.\n\nTetap saja, mereka adalah tulang punggung dari sistem yang bekerja. Tanpa mereka, struktur akan runtuh, dan visi tidak akan pernah menjadi aksi.",
            description2: "Conscientiousness mencerminkan kecenderungan untuk terorganisir, bertanggung jawab, dan berorientasi pada tujuan. Skor tinggi pada trait ini biasanya menunjukkan disiplin dan dapat diandalkan, sedangkan skor rendah sering dikaitkan dengan fleksibilitas, spontanitas, dan pendekatan yang lebih santai terhadap struktur.",
            core: ["Disiplin", "Teliti", "Gigih", "Fokus", "Tekun", "Terstruktur"],
            strength: [
                "Bisa diandalkan",
                "Berorientasi tujuan",
                "Bertanggung jawab",
                "Konsisten",
                "Tahan godaan",
                "Perencana hebat"
            ],
            weakness: [
                "Kaku",
                "Perfeksionis",
                "Takut gagal",
                "Terlalu serius",
                "Sulit berimprovisasi",
                "Rentan kelelahan"
            ],
            funfacts: [
                "Punya to-do list warna-warni... buat akhir pekan.",
                "Langsung stres kalau rencana berubah, bahkan cuma soal makan siang.",
                "Folder di laptop ditata kayak arsip museum.",
                "Ngerjain tugas lebih cepat biar bisa dicek dua kali.",
                "Nonton film pun gak tenang kalau ruangan berantakan.",
                "Bikin daftar bawaan... untuk perjalanan sehari."
            ]
        },
        extraversion: {
            name: "Extraversion",
            title: "Sang Penampil",
            description:
                "Extraversion mencerminkan dorongan sosial dan energi luar yang tinggi. Orang-orang ini merasa hidup ketika dikelilingi oleh orang lain. Mereka spontan, mudah bergaul, dan bisa membuat ruangan sepi jadi hangat hanya dengan kehadirannya. Dalam diskusi, mereka paling vokal, dalam kelompok, mereka jadi penggerak.\n\nPenelitian menunjukkan bahwa individu dengan trait Extraversion tinggi memiliki kadar emosi positif yang lebih tinggi, lebih banyak jaringan sosial, dan biasanya memiliki rasa percaya diri yang kuat. Mereka berani mengambil risiko sosial, tidak takut ditolak, dan cenderung bahagia saat aktif secara fisik maupun sosial.\n\nTapi bukan tanpa kekurangan. Mereka bisa kesulitan menyendiri, terlalu banyak bicara, atau mengabaikan sinyal non-verbal dari orang yang lebih tertutup. Mereka juga cenderung impulsif dan kadang sulit fokus dalam aktivitas yang monoton.\n\nMeski begitu, mereka adalah sumber energi dan semangat di mana pun mereka berada. Tanpa mereka, ruangan terasa sepi—hidup terasa datar.",
            description2: "Extraversion menggambarkan sejauh mana seseorang mencari stimulasi dari lingkungan sosial. Skor tinggi pada trait ini biasanya menunjukkan sifat yang ramah dan energik, sedangkan skor rendah berkaitan dengan sifat pendiam, introspektif, dan kecenderungan untuk menikmati kesendirian.",
            core: ["Ceria", "Energik", "Cerewet", "Ramah", "Berani", "Ekspresif"],
            strength: [
                "Mudah menyesuaikan diri",
                "Cepat akrab",
                "Karismatik",
                "Pemimpin alami",
                "Inisiatif tinggi",
                "Penghidup suasana"
            ],
            weakness: [
                "Cari perhatian",
                "Impulsif",
                "Menghindari kesendirian",
                "Suka menginterupsi",
                "Mendominasi obrolan",
                "Tidak mendalam"
            ],
            funfacts: [
                "Entah gimana bisa dapet temen baru cuma gara-gara ngantri.",
                "Ceritanya selalu mulai dengan ‘Ada tuh temenku yang…’.",
                "Lebih takut keheningan daripada spoiler film.",
                "Entah gimana jadi admin di semua grup chat.",
                "Ketawa duluan sebelum punchline-nya kelar.",
                "Selalu ada alasan buat nongkrong lebih lama."
            ]
        },
        agreeableness: {
            name: "Agreeableness",
            title: "Sang Penenang",
            description:
                "Trait ini mencerminkan kepedulian, kehangatan, dan empati terhadap sesama. Mereka yang tinggi dalam Agreeableness dikenal lembut, tidak suka konflik, dan rela berkorban demi keharmonisan. Dalam hubungan sosial, mereka lebih memilih jadi jembatan daripada jadi tembok.\n\nPenelitian dalam IPIP menunjukkan bahwa agreeableness berkaitan dengan perilaku prososial seperti memberi, membantu, dan mendengarkan. Orang yang tinggi dalam dimensi ini sangat cocok bekerja dalam tim, menjadi mediator, atau teman yang bisa diandalkan dalam situasi emosional.\n\nNamun, mereka juga memiliki titik lemah: terlalu mengalah, takut menyakiti orang lain, bahkan jika itu merugikan diri sendiri. Mereka cenderung tidak tegas, dan sulit mempertahankan batas pribadi yang sehat jika tidak dibarengi dengan kesadaran diri yang kuat.\n\nTetap saja, mereka adalah penyeimbang dunia. Mereka yang membuat orang merasa aman, didengar, dan diterima.",
            description2: "Agreeableness berkaitan dengan kecenderungan untuk bersikap ramah, kooperatif, dan empatik. Tingkat trait ini yang tinggi umumnya menunjukkan sifat penuh kasih dan mudah percaya, sedangkan tingkat rendah bisa mencerminkan skeptisisme, ketegasan, atau fokus yang lebih kuat pada kepentingan pribadi.",
            core: ["Baik", "Lembut", "Sabar", "Toleran", "Peduli", "Setia"],
            strength: [
                "Berempati",
                "Pemaaf",
                "Menghindari konflik",
                "Suportif",
                "Bisa dipercaya",
                "Berbelas kasih"
            ],
            weakness: [
                "Terlalu patuh",
                "Sulit menolak",
                "Rentan dimanfaatkan",
                "Kurang tegas",
                "Menghindari perbedaan pendapat",
                "Sulit menyuarakan diri"
            ],
            funfacts: [
                "Saran apapun ditutup dengan ‘kalau kamu gak keberatan’.",
                "Udah latihan nolak, ujungnya tetap bilang iya.",
                "Cuma bantu sekali, eh jadi penanggung jawab semuanya.",
                "Minta maaf padahal jelas-jelas bukan salahnya.",
                "Sering dimintain tolong, tapi sendiri segan minta bantuan.",
                "Nunggu semua mesen dulu, padahal udah laper banget."
            ]
        },
        neuroticism: {
            name: "Neuroticism",
            title: "Sang Pengamat",
            description:
                "Neuroticism menggambarkan kepekaan emosional yang tinggi. Mereka mudah merasa cemas, rentan terhadap stres, dan cenderung reflektif dalam menghadapi situasi. Di balik itu semua, mereka sering menyimpan dunia batin yang dalam dan kompleks.\n\nMenurut IPIP, trait ini berkaitan dengan emosi negatif seperti ketakutan, kesedihan, kemarahan, dan kerentanan. Tapi orang dengan skor tinggi juga biasanya sangat sadar diri, introspektif, dan memiliki empati emosional yang tajam. Mereka menangkap hal-hal yang luput dari perhatian orang lain.\n\nTentu, kelebihan ini bisa menjadi beban jika tidak diatur dengan baik. Mereka bisa tenggelam dalam pikiran sendiri, overthinking, atau merasa cemas akan hal-hal kecil. Stabilitas emosional menjadi tantangan, namun dengan kesadaran, mereka bisa mengelola emosi ini menjadi kekuatan.\n\nMereka bukan lemah—mereka dalam. Mereka merasakan dunia secara intens, dan dalam intensitas itu, ada kekuatan untuk menciptakan, mencintai, dan memahami secara tulus.",
            description2: "Neuroticism menggambarkan sensitivitas terhadap pengalaman emosional, terutama yang bersifat negatif. Individu dengan tingkat trait ini yang tinggi mungkin lebih rentan terhadap kecemasan, perubahan suasana hati, atau keraguan diri, sedangkan tingkat rendah menunjukkan stabilitas emosi dan ketahanan terhadap stres.",
            core: ["Cemas", "Labil", "Sensitif", "Tanggap", "Reaktif", "Gelisah"],
            strength: [
                "Introspektif",
                "Kewaspadaan",
                "Sangat jeli",
                "Intuitif",
                "Antisipatif",
                "Peka situasi"
            ],
            weakness: [
                "Gampang kewalahan",
                "Perubahan suasana hati",
                "Terjerat secara emosional",
                "Butuh diyakinkan",
                "Terjebak rasa bersalah",
                "Pikiran berbelit"
            ],
            funfacts: [
                "Ngetik panjang di chat, terus dihapus, terus diketik ulang.",
                "Kadang gak tau ini firasat atau cemas aja.",
                "Sering stres karena ngerasa terlalu stres.",
                "Gak bisa tenang kalau suasana hati belum ‘klik’.",
                "Butuh 'wkwk' susulan biar hati tenang.",
                "Tiap malam mikir: 'Apa aku terlalu banyak ngomong tadi?'"
            ]
        }
    },

    test: {
        title1: "Mulai Tes",
        title2: "Temukan Karaktermu",
        description: "Kenali kepribadianmu lewat tes Big 5 yang seru dan berbasis sains. Ungkap apa yang membuatmu unik luar dan dalam. Untuk gambaran umum, coba Tes Kilat dengan 40 pertanyaan. Mau hasil lebih akurat dan mendalam? Pilih Tes Lengkap dengan 140 pertanyaan.",
        quick1: "Tes Kilat",
        quick2: "40 total Pertanyaan",
        full1: "Tes Lengkap",
        full2: "140 total Pertanyaan",
        scaleLabels: ["Sangat Tidak", "Tidak", "Netral", "Setuju", "Sangat Setuju"],
    },

    tested: {
        title1: "Sudah Mengikuti Tes",
        title2: "Jelajahi Karaktermu",
        description: "Kamu sudah pernah mengikuti tes Big 5 dan menemukan kepribadian unikmu. Lihat kembali bagaimana trait-mu membentuk cara berpikir, merasa, dan bertindak. Penasaran apakah ada yang berubah? Lihat hasil sebelumnya atau coba tes ulang untuk perspektif baru.",
        seeResult: "Lihat Hasil",
        retest: "Tes Ulang",
        warning: "Jawaban barumu akan menimpa hasil yang sebelumnya. Setelah menyelesaikan tes ini, data trait sebelumnya akan tertimpa dan tidak bisa dipulihkan. Kamu yakin ingin melanjutkan?",
        cancel: "Batal",
    },

    footer: {
        highlight: [{
            title: "Saintifik",
            description: "berdasarkan penelitian IPIP",
        }, {
            title: "Fleksibel",
            description: "tes sesuai pilihanmu",
        }, {
            title: "Akurat",
            description: "analisis sifat yang detail",
        }],
        copyright: "© 2025 - All rights reserved - ",
        textLink: "Giff"
    },

    result: {
        intro: "Kamu Adalah",
        absolute: "Intensitas Sifat",
        relative: "Bagian Dirimu",
        core: {
            title1: "Yang Terpancar",
            title2: "Bagian dirimu yang langsung terasa",
        },
        description: {
            title1: "Ini bukan sekadar data,",
            title2: "Ini bagian dari dirimu.",
        },
        strength: {
            title1: "Yang Menopangmu,",
            title2: "Kekuatan yang tidak selalu terlihat, tapi selalu ada.",
        },
        weakness: {
            title1: "Tantanganmu,",
            title2: "Bukan kelemahan yang harus ditutupi, tapi sisi yang perlu dipahami.",
        },
        funfacts: {
            title1: "Hal-hal Kecil,",
            title2: "Tanda bahwa karakter ini ada dalam dirimu.",
        }
    },

    others: {
        velocity: "yang lainnya .",
        title1: "Tapi ingat, ini hanya ",
        title2: "dari dirimu.",
        title3: "Bagaimana dengan sisanya?",
        closure1: "Inilah 100% Dirimu",
        closure2: "Bukan cuma satu — kamu adalah mereka semua, dengan perpaduanmu sendiri.",
    },
    
    noResult: "Tidak Ditemukan",
    share: "Bagikan Hasil",
    download: "Unduh Gambar"
};

export default id;