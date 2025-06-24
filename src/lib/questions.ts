export type Question = {
  id: number;
  text: {
    en: string;
    id: string;
  };
  trait: string;
  reverse: boolean;
};

// Base questions for both tests
const baseQuestions: Question[] = [
  // Openness questions (1-8)
  { id: 1, text: { en: "I have a vivid imagination.", id: "Saya memiliki imajinasi yang jelas." }, trait: "openness", reverse: false },
  { id: 2, text: { en: "I have difficulty understanding abstract ideas.", id: "Saya kesulitan memahami ide-ide abstrak." }, trait: "openness", reverse: true },
  { id: 3, text: { en: "I have a rich vocabulary.", id: "Saya memiliki kosakata yang luas." }, trait: "openness", reverse: false },
  { id: 4, text: { en: "I am not interested in abstract ideas.", id: "Saya tidak tertarik pada ide-ide abstrak." }, trait: "openness", reverse: true },
  { id: 5, text: { en: "I have excellent ideas.", id: "Saya memiliki ide-ide yang luar biasa." }, trait: "openness", reverse: false },
  { id: 6, text: { en: "I do not have a good imagination.", id: "Saya tidak memiliki imajinasi yang baik." }, trait: "openness", reverse: true },
  { id: 7, text: { en: "I am quick to understand things.", id: "Saya cepat memahami sesuatu." }, trait: "openness", reverse: false },
  { id: 8, text: { en: "I use difficult words.", id: "Saya menggunakan kata-kata yang sulit." }, trait: "openness", reverse: false },

  // Conscientiousness questions (9-16)
  { id: 9, text: { en: "I am always prepared.", id: "Saya selalu penuh persiapan." }, trait: "conscientiousness", reverse: false },
  { id: 10, text: { en: "I leave my belongings around.", id: "Saya sering meninggalkan barang-barang saya sembarangan." }, trait: "conscientiousness", reverse: true },
  { id: 11, text: { en: "I pay attention to details.", id: "Saya memperhatikan hal-hal kecil." }, trait: "conscientiousness", reverse: false },
  { id: 12, text: { en: "I make a mess of things.", id: "Saya sering membuat berantakan." }, trait: "conscientiousness", reverse: true },
  { id: 13, text: { en: "I get chores done right away.", id: "Saya menyelesaikan pekerjaan rumah segera." }, trait: "conscientiousness", reverse: false },
  { id: 14, text: { en: "I often forget to put things back in their proper place.", id: "Saya sering lupa mengembalikan barang ke tempatnya." }, trait: "conscientiousness", reverse: true },
  { id: 15, text: { en: "I like order.", id: "Saya menyukai keteraturan." }, trait: "conscientiousness", reverse: false },
  { id: 16, text: { en: "I shirk my duties.", id: "Saya sering mengabaikan tugas saya." }, trait: "conscientiousness", reverse: true },

  // Extraversion questions (17-24)
  { id: 17, text: { en: "I am the life of the party.", id: "Saya adalah pusat perhatian di pesta." }, trait: "extraversion", reverse: false },
  { id: 18, text: { en: "I don't talk a lot.", id: "Saya tidak banyak bicara." }, trait: "extraversion", reverse: true },
  { id: 19, text: { en: "I feel comfortable around people.", id: "Saya merasa nyaman berada di dekat orang lain." }, trait: "extraversion", reverse: false },
  { id: 20, text: { en: "I keep in the background.", id: "Saya lebih suka berada di balik layar." }, trait: "extraversion", reverse: true },
  { id: 21, text: { en: "I start conversations.", id: "Saya suka memulai percakapan." }, trait: "extraversion", reverse: false },
  { id: 22, text: { en: "I have little to say.", id: "Saya tidak banyak bicara." }, trait: "extraversion", reverse: true },
  { id: 23, text: { en: "I talk to a lot of different people at parties.", id: "Saya suka berbicara dengan banyak orang saat pesta." }, trait: "extraversion", reverse: false },
  { id: 24, text: { en: "I don't like to draw attention to myself.", id: "Saya tidak suka menarik perhatian untuk diri saya." }, trait: "extraversion", reverse: true },

  // Agreeableness questions (25-32)
  { id: 25, text: { en: "I am interested in people.", id: "Saya tertarik dengan orang-orang di sekitar saya." }, trait: "agreeableness", reverse: false },
  { id: 26, text: { en: "I insult people.", id: "Saya menghina orang lain." }, trait: "agreeableness", reverse: true },
  { id: 27, text: { en: "I sympathize with others feelings.", id: "Saya bersimpati dengan perasaan orang lain." }, trait: "agreeableness", reverse: false },
  { id: 28, text: { en: "I am not interested in other people's problems.", id: "Saya tidak tertarik dengan masalah orang lain." }, trait: "agreeableness", reverse: true },
  { id: 29, text: { en: "I have a soft heart.", id: "Saya berhati lembut." }, trait: "agreeableness", reverse: false },
  { id: 30, text: { en: "I am not really interested in others.", id: "Saya tidak terlalu tertarik dengan orang lain." }, trait: "agreeableness", reverse: true },
  { id: 31, text: { en: "I take time out for others.", id: "Saya meluangkan waktu untuk orang lain." }, trait: "agreeableness", reverse: false },
  { id: 32, text: { en: "I feel little concern for others.", id: "Saya tidak terlalu peduli pada orang lain." }, trait: "agreeableness", reverse: true },

  // Neuroticism questions (33-40)
  { id: 33, text: { en: "I get stressed out easily.", id: "Saya mudah stres." }, trait: "neuroticism", reverse: false },
  { id: 34, text: { en: "I am relaxed most of the time.", id: "Saya merasa santai di sebagian besar waktu saya." }, trait: "neuroticism", reverse: true },
  { id: 35, text: { en: "I worry about things.", id: "Saya sering khawatir." }, trait: "neuroticism", reverse: false },
  { id: 36, text: { en: "I seldom feel blue.", id: "Saya jarang merasa murung." }, trait: "neuroticism", reverse: true },
  { id: 37, text: { en: "I am easily disturbed.", id: "Saya mudah terganggu." }, trait: "neuroticism", reverse: false },
  { id: 38, text: { en: "I get upset easily.", id: "Saya mudah marah atau kesal." }, trait: "neuroticism", reverse: false },
  { id: 39, text: { en: "I change my mood a lot.", id: "Suasana hati saya sering berubah-ubah." }, trait: "neuroticism", reverse: false },
  { id: 40, text: { en: "I have frequent mood swings.", id: "Saya sering mengalami perubahan suasana hati." }, trait: "neuroticism", reverse: false },
]

// Additional questions for full test
const additionalQuestions: Question[] = [
  // Additional Openness questions (41-60)
  { id: 41, text: { en: "I enjoy hearing new ideas.", id: "Saya senang mendengar ide-ide baru." }, trait: "openness", reverse: false },
  { id: 42, text: { en: "I avoid philosophical discussions.", id: "Saya menghindari diskusi filosofis." }, trait: "openness", reverse: true },
  { id: 43, text: { en: "I enjoy wild flights of fantasy.", id: "Saya senang membayangkan hal-hal fantastis." }, trait: "openness", reverse: false },
  { id: 44, text: { en: "I am not interested in theoretical discussions.", id: "Saya tidak tertarik pada diskusi teoretis." }, trait: "openness", reverse: true },
  { id: 45, text: { en: "I love to read challenging material.", id: "Saya suka membaca materi yang menantang." }, trait: "openness", reverse: false },
  { id: 46, text: { en: "I prefer to stick with things that I know.", id: "Saya lebih suka berpegang pada hal-hal yang sudah saya kenal." }, trait: "openness", reverse: true },
  { id: 47, text: { en: "I enjoy thinking about things.", id: "Saya senang memikirkan berbagai hal." }, trait: "openness", reverse: false },
  { id: 48, text: { en: "I avoid complex people.", id: "Saya menghindari orang-orang yang rumit." }, trait: "openness", reverse: true },
  { id: 49, text: { en: "I love to think up new ways of doing things.", id: "Saya senang menemukan cara baru dalam melakukan sesuatu." }, trait: "openness", reverse: false },
  { id: 50, text: { en: "I dislike changes.", id: "Saya tidak menyukai perubahan." }, trait: "openness", reverse: true },
  { id: 51, text: { en: "I carry the conversation to a higher level.", id: "Saya membawa percakapan ke tingkat yang lebih tinggi." }, trait: "openness", reverse: false },
  { id: 52, text: { en: "I will not probe deeply into a subject.", id: "Saya tidak mendalami suatu topik secara serius." }, trait: "openness", reverse: true },
  { id: 53, text: { en: "I can say things beautifully.", id: "Saya bisa mengungkapkan sesuatu dengan indah." }, trait: "openness", reverse: false },
  { id: 54, text: { en: "I avoid difficult reading material.", id: "Saya menghindari bacaan yang sulit." }, trait: "openness", reverse: true },
  { id: 55, text: { en: "I like to solve complex problems.", id: "Saya suka memecahkan masalah yang kompleks." }, trait: "openness", reverse: false },
  { id: 56, text: { en: "I prefer simple to complex procedures.", id: "Saya lebih suka prosedur yang sederhana daripada yang rumit." }, trait: "openness", reverse: true },
  { id: 57, text: { en: "I formulate ideas clearly.", id: "Saya merumuskan ide dengan jelas." }, trait: "openness", reverse: false },
  { id: 58, text: { en: "I rarely look for a deeper meaning in things.", id: "Saya jarang mencari makna yang lebih dalam dalam sesuatu." }, trait: "openness", reverse: true },
  { id: 59, text: { en: "I spend time reflecting on things.", id: "Saya meluangkan waktu untuk merenungkan berbagai hal." }, trait: "openness", reverse: false },
  { id: 60, text: { en: "I do not like art.", id: "Saya tidak menyukai seni." }, trait: "openness", reverse: true },

  // Additional Conscientiousness questions (61-80)
  { id: 61, text: { en: "I complete tasks successfully.", id: "Saya berhasil menyelesaikan tugas dengan baik." }, trait: "conscientiousness", reverse: false },
  { id: 62, text: { en: "I waste my time.", id: "Saya sering membuang-buang waktu." }, trait: "conscientiousness", reverse: true },
  { id: 63, text: { en: "I work hard.", id: "Saya bekerja keras." }, trait: "conscientiousness", reverse: false },
  { id: 64, text: { en: "I do just enough work to get by.", id: "Saya bekerja sekadarnya saja." }, trait: "conscientiousness", reverse: true },
  { id: 65, text: { en: "I set high standards for myself and others.", id: "Saya menetapkan standar tinggi untuk diri sendiri dan orang lain." }, trait: "conscientiousness", reverse: false },
  { id: 66, text: { en: "I don't see things through.", id: "Saya jarang menuntaskan sesuatu sampai akhir." }, trait: "conscientiousness", reverse: true },
  { id: 67, text: { en: "I demand quality.", id: "Saya menuntut kualitas." }, trait: "conscientiousness", reverse: false },
  { id: 68, text: { en: "I do things I later regret.", id: "Saya sering melakukan hal yang saya sesali kemudian." }, trait: "conscientiousness", reverse: true },
  { id: 69, text: { en: "I stick to my chosen path.", id: "Saya berpegang teguh pada jalan yang saya pilih." }, trait: "conscientiousness", reverse: false },
  { id: 70, text: { en: "I act without thinking.", id: "Saya bertindak tanpa berpikir terlebih dahulu." }, trait: "conscientiousness", reverse: true },
  { id: 71, text: { en: "I finish what I begin.", id: "Saya menyelesaikan apa yang saya mulai." }, trait: "conscientiousness", reverse: false },
  { id: 72, text: { en: "I rush into things.", id: "Saya terburu-buru dalam melakukan sesuatu." }, trait: "conscientiousness", reverse: true },
  { id: 73, text: { en: "I plan ahead.", id: "Saya merencanakan segala sesuatunya terlebih dahulu." }, trait: "conscientiousness", reverse: false },
  { id: 74, text: { en: "I make rash decisions.", id: "Saya membuat keputusan secara gegabah." }, trait: "conscientiousness", reverse: true },
  { id: 75, text: { en: "I am goal oriented.", id: "Saya berorientasi pada tujuan." }, trait: "conscientiousness", reverse: false },
  { id: 76, text: { en: "I jump into things without thinking.", id: "Saya langsung terjun ke sesuatu tanpa berpikir." }, trait: "conscientiousness", reverse: true },
  { id: 77, text: { en: "I turn plans into actions.", id: "Saya mengubah rencana menjadi tindakan." }, trait: "conscientiousness", reverse: false },
  { id: 78, text: { en: "I make mistakes.", id: "Saya sering melakukan kesalahan." }, trait: "conscientiousness", reverse: true },
  { id: 79, text: { en: "I excel in what I do.", id: "Saya unggul dalam apa yang saya kerjakan." }, trait: "conscientiousness", reverse: false },
  { id: 80, text: { en: "I do things in a half-way manner.", id: "Saya melakukan sesuatu dengan setengah hati." }, trait: "conscientiousness", reverse: true },

  // Additional Extraversion questions (81-100)
  { id: 81, text: { en: "I make friends easily.", id: "Saya mudah berteman." }, trait: "extraversion", reverse: false },
  { id: 82, text: { en: "I find it difficult to approach others.", id: "Saya kesulitan mendekati orang lain." }, trait: "extraversion", reverse: true },
  { id: 83, text: { en: "I am skilled in handling social situations.", id: "Saya terampil dalam situasi sosial." }, trait: "extraversion", reverse: false },
  { id: 84, text: { en: "I bottle up my feelings.", id: "Saya memendam perasaan saya." }, trait: "extraversion", reverse: true },
  { id: 85, text: { en: "I love large parties.", id: "Saya suka pesta besar." }, trait: "extraversion", reverse: false },
  { id: 86, text: { en: "I prefer to be alone.", id: "Saya lebih suka menyendiri." }, trait: "extraversion", reverse: true },
  { id: 87, text: { en: "I take charge.", id: "Saya suka memimpin." }, trait: "extraversion", reverse: false },
  { id: 88, text: { en: "I wait for others to lead the way.", id: "Saya menunggu orang lain untuk memimpin." }, trait: "extraversion", reverse: true },
  { id: 89, text: { en: "I know how to captivate people.", id: "Saya tahu cara memikat orang lain." }, trait: "extraversion", reverse: false },
  { id: 90, text: { en: "I am quiet around strangers.", id: "Saya pendiam di sekitar orang asing." }, trait: "extraversion", reverse: true },
  { id: 91, text: { en: "I would describe my experiences as somewhat dull.", id: "Saya menggambarkan pengalaman saya agak membosankan." }, trait: "extraversion", reverse: true },
  { id: 92, text: { en: "I am always busy.", id: "Saya selalu sibuk." }, trait: "extraversion", reverse: false },
  { id: 93, text: { en: "I prefer to do things alone.", id: "Saya lebih suka melakukan sesuatu sendiri." }, trait: "extraversion", reverse: true },
  { id: 94, text: { en: "I like to be where the action is.", id: "Saya suka berada di tengah keramaian." }, trait: "extraversion", reverse: false },
  { id: 95, text: { en: "I retreat from others.", id: "Saya menarik diri dari orang lain." }, trait: "extraversion", reverse: true },
  { id: 96, text: { en: "I take control of things.", id: "Saya mengambil alih kendali." }, trait: "extraversion", reverse: false },
  { id: 97, text: { en: "I keep others at a distance.", id: "Saya menjaga jarak dengan orang lain." }, trait: "extraversion", reverse: true },
  { id: 98, text: { en: "I seek adventure.", id: "Saya mencari petualangan." }, trait: "extraversion", reverse: false },
  { id: 99, text: { en: "I avoid crowds.", id: "Saya menghindari keramaian." }, trait: "extraversion", reverse: true },
  { id: 100, text: { en: "I express myself easily.", id: "Saya mudah mengekspresikan diri." }, trait: "extraversion", reverse: false },

  //Additional Agreeableness questions (101-120)
  { id: 101, text: { en: "I respect others.", id: "Saya menghormati orang lain." }, trait: "agreeableness", reverse: false },
  { id: 102, text: { en: "I make people feel uncomfortable.", id: "Saya membuat orang merasa tidak nyaman." }, trait: "agreeableness", reverse: true },
  { id: 103, text: { en: "I am easy to satisfy.", id: "Saya mudah untuk dipuaskan." }, trait: "agreeableness", reverse: false },
  { id: 104, text: { en: "I tend to be cynical.", id: "Saya cenderung sinis terhadap orang lain." }, trait: "agreeableness", reverse: true },
  { id: 105, text: { en: "I forgive others easily.", id: "Saya mudah memaafkan orang lain." }, trait: "agreeableness", reverse: false },
  { id: 106, text: { en: "I hold grudges.", id: "Saya menyimpan dendam." }, trait: "agreeableness", reverse: true },
  { id: 107, text: { en: "I try to be courteous to everyone I meet.", id: "Saya berusaha bersikap sopan kepada semua orang yang saya temui." }, trait: "agreeableness", reverse: false },
  { id: 108, text: { en: "I am rude to people.", id: "Saya bersikap kasar kepada orang lain." }, trait: "agreeableness", reverse: true },
  { id: 109, text: { en: "I take others needs into account.", id: "Saya mempertimbangkan kebutuhan orang lain." }, trait: "agreeableness", reverse: false },
  { id: 110, text: { en: "I enjoy seeing others fail.", id: "Saya senang melihat orang lain gagal." }, trait: "agreeableness", reverse: true },
  { id: 111, text: { en: "I believe others have good intentions.", id: "Saya percaya orang lain memiliki niat baik." }, trait: "agreeableness", reverse: false },
  { id: 112, text: { en: "I suspect hidden motives in others.", id: "Saya mencurigai motif tersembunyi dari orang lain." }, trait: "agreeableness", reverse: true },
  { id: 113, text: { en: "I try to see the best in people.", id: "Saya berusaha melihat sisi terbaik dari orang lain." }, trait: "agreeableness", reverse: false },
  { id: 114, text: { en: "I think most people are untrustworthy.", id: "Saya menganggap kebanyakan orang tidak bisa dipercaya." }, trait: "agreeableness", reverse: true },
  { id: 115, text: { en: "I am concerned about others.", id: "Saya peduli terhadap orang lain." }, trait: "agreeableness", reverse: false },
  { id: 116, text: { en: "I think only about myself.", id: "Saya hanya memikirkan diri saya sendiri." }, trait: "agreeableness", reverse: true },
  { id: 117, text: { en: "I value cooperation over competition.", id: "Saya lebih menghargai kerja sama daripada kompetisi." }, trait: "agreeableness", reverse: false },
  { id: 118, text: { en: "I am judgmental of others.", id: "Saya suka menghakimi orang lain." }, trait: "agreeableness", reverse: true },
  { id: 119, text: { en: "I treat others with kindness.", id: "Saya memperlakukan orang lain dengan baik." }, trait: "agreeableness", reverse: false },
  { id: 120, text: { en: "I am critical of others.", id: "Saya sering mengkritik orang lain." }, trait: "agreeableness", reverse: true },

  //Additional Neuroticism questions (121-140)
  { id: 121, text: { en: "I often feel insecure about my future.", id: "Saya sering merasa tidak yakin dengan masa depan saya." }, trait: "neuroticism", reverse: false },
  { id: 122, text: { en: "I generally feel emotionally strong.", id: "Secara umum saya merasa kuat secara emosional." }, trait: "neuroticism", reverse: true },
  { id: 123, text: { en: "I ruminate about past mistakes.", id: "Saya sering memikirkan kembali kesalahan di masa lalu." }, trait: "neuroticism", reverse: false },
  { id: 124, text: { en: "I recover quickly after emotional distress.", id: "Saya cepat pulih setelah gangguan emosional." }, trait: "neuroticism", reverse: true },
  { id: 125, text: { en: "I often feel tense even in calm situations.", id: "Saya sering merasa tegang bahkan dalam situasi tenang." }, trait: "neuroticism", reverse: false },
  { id: 126, text: { en: "I rarely let stress affect me.", id: "Saya jarang membiarkan stres mempengaruhi saya." }, trait: "neuroticism", reverse: true },
  { id: 127, text: { en: "I feel overwhelmed when plans change suddenly.", id: "Saya merasa kewalahan ketika rencana tiba-tiba berubah." }, trait: "neuroticism", reverse: false },
  { id: 128, text: { en: "I feel confident handling unexpected problems.", id: "Saya percaya diri dalam menangani masalah tak terduga." }, trait: "neuroticism", reverse: true },
  { id: 129, text: { en: "I tend to take criticism very personally.", id: "Saya cenderung mengambil kritik secara pribadi." }, trait: "neuroticism", reverse: false },
  { id: 130, text: { en: "I accept feedback calmly and objectively.", id: "Saya menerima masukan dengan tenang dan objektif." }, trait: "neuroticism", reverse: true },
  { id: 131, text: { en: "I often feel emotionally drained.", id: "Saya sering merasa lelah secara emosional." }, trait: "neuroticism", reverse: false },
  { id: 132, text: { en: "I feel emotionally recharged after rest.", id: "Saya merasa segar kembali setelah beristirahat." }, trait: "neuroticism", reverse: true },
  { id: 133, text: { en: "I sometimes cry without a clear reason.", id: "Saya kadang menangis tanpa alasan yang jelas." }, trait: "neuroticism", reverse: false },
  { id: 134, text: { en: "I rarely feel like crying.", id: "Saya jarang merasa ingin menangis." }, trait: "neuroticism", reverse: true },
  { id: 135, text: { en: "I feel nervous when talking to authority figures.", id: "Saya merasa gugup saat berbicara dengan atasan atau tokoh otoritas." }, trait: "neuroticism", reverse: false },
  { id: 136, text: { en: "I stay calm even when under scrutiny.", id: "Saya tetap tenang bahkan saat diawasi." }, trait: "neuroticism", reverse: true },
  { id: 137, text: { en: "I dwell on negative thoughts.", id: "Saya sering tenggelam dalam pikiran negatif." }, trait: "neuroticism", reverse: false },
  { id: 138, text: { en: "I find it easy to focus on the positive.", id: "Saya mudah fokus pada hal-hal positif." }, trait: "neuroticism", reverse: true },
  { id: 139, text: { en: "I often feel embarrassed over small things.", id: "Saya sering merasa malu karena hal-hal kecil." }, trait: "neuroticism", reverse: false },
  { id: 140, text: { en: "I rarely feel self-conscious.", id: "Saya jarang merasa canggung dengan diri sendiri." }, trait: "neuroticism", reverse: true },
]

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Function to get randomized questions based on test type
export function getRandomizedQuestions(testType: string) {
  if (testType === "quick") {
    return shuffleArray(baseQuestions)
  } else {
    return shuffleArray([...baseQuestions, ...additionalQuestions])
  }
}

// Export for backward compatibility
export const quickQuestions = baseQuestions
export const fullQuestions = [...baseQuestions, ...additionalQuestions]