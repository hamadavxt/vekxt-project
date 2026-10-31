/* Vekxt Zero - dashboard trader (login, akun, withdrawal, profile, terminal Perps).
   Dimuat hanya di halaman /p/login.html oleh template statis. */
(function(){if(document.documentElement.getAttribute("data-v")!=="login")return;
var CFG={apiKey:"AIzaSyCVJG4IKxyRqFDEdM3j-nD0H_azN-DbCpk",authDomain:"vekxtzero.firebaseapp.com",projectId:"vekxtzero",storageBucket:"vekxtzero.firebasestorage.app",messagingSenderId:"918745170835",appId:"1:918745170835:web:891a76e2bc31c5acfede66"}; /* Firebase: ganti null dengan objek config dari Firebase console, contoh {apiKey:"...",authDomain:"...",projectId:"...",appId:"..."} */
var lang="id";try{lang=localStorage.getItem("lang")||"id"}catch(e){}
var T={"id": {"demo": "Mode demo: data hanya tersimpan di browser ini dan belum aman untuk akun sungguhan.", "tl": "Masuk", "ts": "Daftar", "hl": "Masuk ke akun trader", "hs": "Buat akun trader", "name": "Nama lengkap", "email": "Email", "pass": "Kata sandi", "bl": "Masuk", "bs": "Buat akun", "forgot": "Lupa kata sandi?", "hello": "Halo, ", "mine": "Challenge saya", "none": "Belum ada challenge aktif.", "start": "Mulai challenge", "out": "Keluar", "reset": "Email reset kata sandi sudah dikirim. Cek inbox kamu.", "resetDemo": "Reset kata sandi tersedia setelah Firebase dihubungkan.", "eBad": "Email atau kata sandi salah.", "eExists": "Email sudah terdaftar.", "eWeak": "Kata sandi minimal 8 karakter.", "eEmail": "Format email tidak valid.", "eName": "Isi nama lengkap.", "eGen": "Terjadi kesalahan. Coba lagi.", "note": "Contoh data. Akan terhubung ke platform trading setelah integrasi selesai.", "phase": "Fase", "active": "Aktif", "size": "Ukuran akun", "days": "Hari trading", "progress": "Progres challenge", "target": "Target profit", "dlimit": "Rugi harian", "mlimit": "Rugi total", "cert": "Sertifikat", "support": "Hubungi CS"}, "en": {"demo": "Demo mode: data is stored only in this browser and is not secure for real accounts.", "tl": "Log in", "ts": "Sign up", "hl": "Log in to your trader account", "hs": "Create your trader account", "name": "Full name", "email": "Email", "pass": "Password", "bl": "Log in", "bs": "Create account", "forgot": "Forgot password?", "hello": "Hello, ", "mine": "My challenges", "none": "No active challenge yet.", "start": "Start a challenge", "out": "Log out", "reset": "Password reset email sent. Check your inbox.", "resetDemo": "Password reset works once Firebase is connected.", "eBad": "Wrong email or password.", "eExists": "This email is already registered.", "eWeak": "Password must be at least 8 characters.", "eEmail": "Invalid email address.", "eName": "Enter your full name.", "eGen": "Something went wrong. Try again.", "note": "Sample data. Will connect to your trading platform once integrated.", "phase": "Phase", "active": "Active", "size": "Account size", "days": "Trading days", "progress": "Challenge progress", "target": "Profit target", "dlimit": "Daily loss", "mlimit": "Max loss", "cert": "Certificate", "support": "Contact support"}};
Object.assign(T.id,{"n_home": "Akun", "n_wd": "Withdrawal", "n_prof": "Profile", "n_aff": "Affiliate", "wdT": "Penarikan profit", "wdAv": "Profit tersedia", "wdSch": "Jadwal payout", "wdBi": "Biweekly payout", "wdAmt": "Jumlah penarikan (USD)", "wdAddr": "Alamat wallet / rekening tujuan", "wdBtn": "Ajukan penarikan", "wdHist": "Riwayat penarikan", "wdNone": "Belum ada permintaan penarikan.", "wdPend": "Menunggu", "wdBad": "Isi jumlah penarikan yang valid.", "wdMax": "Jumlah melebihi profit yang tersedia.", "wdNoAddr": "Isi alamat wallet / rekening tujuan.", "wdOk": "Permintaan tersimpan.", "wdDemo": "Masih tahap uji coba: permintaan hanya tersimpan di browser ini dan belum diproses.", "pfTg": "Username Telegram (opsional)", "pfSave": "Simpan", "pfOk": "Profil tersimpan.", "affT": "Program affiliate", "affCode": "Kode referral kamu", "affCopy": "Salin", "affCopied": "Tersalin", "affClicks": "Klik", "affSign": "Pendaftaran", "affComm": "Komisi", "affRate": "Komisi", "affNote": "Pelacakan referral dan komisi belum aktif, jadi angka di atas masih 0."});Object.assign(T.en,{"n_home": "Account", "n_wd": "Withdrawal", "n_prof": "Profile", "n_aff": "Affiliate", "wdT": "Profit withdrawal", "wdAv": "Available profit", "wdSch": "Payout schedule", "wdBi": "Biweekly payout", "wdAmt": "Withdrawal amount (USD)", "wdAddr": "Destination wallet / account", "wdBtn": "Request withdrawal", "wdHist": "Withdrawal history", "wdNone": "No withdrawal requests yet.", "wdPend": "Pending", "wdBad": "Enter a valid withdrawal amount.", "wdMax": "Amount exceeds available profit.", "wdNoAddr": "Enter the destination wallet / account.", "wdOk": "Request saved.", "wdDemo": "Still in testing: requests are only saved in this browser and are not processed.", "pfTg": "Telegram username (optional)", "pfSave": "Save", "pfOk": "Profile saved.", "affT": "Affiliate program", "affCode": "Your referral code", "affCopy": "Copy", "affCopied": "Copied", "affClicks": "Clicks", "affSign": "Sign-ups", "affComm": "Commission", "affRate": "Commission", "affNote": "Referral and commission tracking is not active yet, so the numbers above are 0."});
Object.assign(T.id,{"pnlT": "Kalender PnL", "pnlTot": "Total bulan ini", "pnlWL": "Hari profit / rugi"});Object.assign(T.en,{"pnlT": "PnL calendar", "pnlTot": "Month total", "pnlWL": "Profit / loss days"});
Object.assign(T.id,{"accHint": "Ketuk akun untuk melihat progress challenge dan kalender PnL.", "accBack": "Semua akun"});Object.assign(T.en,{"accHint": "Tap an account to see its challenge progress and PnL calendar.", "accBack": "All accounts"});
Object.assign(T.id,{"accLoad": "Memuat akun...", "accErr": "Gagal memuat akun.", "accRetry": "Coba lagi"});Object.assign(T.en,{"accLoad": "Loading accounts...", "accErr": "Could not load accounts.", "accRetry": "Try again"});
Object.assign(T.id,{"accOff": "Offline", "accOffMsg": "Koneksi akun sedang terputus, data belum tersedia. Coba lagi beberapa saat."});Object.assign(T.en,{"accOff": "Offline", "accOffMsg": "The account connection is down, data is not available yet. Try again shortly."});
Object.assign(T.id,{"addr": "Alamat lengkap", "addrPh": "Jalan, nomor, kota, kode pos, negara", "eAddr": "Isi alamat lengkap (minimal 10 karakter).", "google": "Lanjut dengan Google", "or": "atau", "needAddr": "Lengkapi alamat lengkap kamu untuk melanjutkan.", "verT": "Verifikasi email kamu", "verMsg": "Kami mengirim tautan verifikasi ke email kamu. Buka tautannya, lalu tekan tombol di bawah.", "verDone": "Saya sudah verifikasi", "verResend": "Kirim ulang email verifikasi", "verSent": "Email verifikasi dikirim.", "verNot": "Email belum terverifikasi. Cek inbox atau folder spam.", "eGoogle": "Login dengan Google gagal atau dibatalkan.", "pfAddr": "Alamat lengkap", "eProf": "Gagal menyimpan profil. Coba lagi."});Object.assign(T.en,{"addr": "Full address", "addrPh": "Street, number, city, postal code, country", "eAddr": "Enter your full address (at least 10 characters).", "google": "Continue with Google", "or": "or", "needAddr": "Please complete your full address to continue.", "verT": "Verify your email", "verMsg": "We sent a verification link to your email. Open it, then tap the button below.", "verDone": "I have verified", "verResend": "Resend verification email", "verSent": "Verification email sent.", "verNot": "Email is not verified yet. Check your inbox or spam folder.", "eGoogle": "Google sign-in failed or was cancelled.", "pfAddr": "Full address", "eProf": "Could not save your profile. Try again."});
Object.assign(T.id,{"stT": "Statistik trading", "stWin": "Win rate", "stTrades": "Total trade", "stWL": "Menang / kalah", "stAvgW": "Rata-rata menang", "stAvgL": "Rata-rata kalah", "stPF": "Profit factor", "stBest": "Trade terbaik", "stWorst": "Trade terburuk", "stNet": "Total PnL", "stNone": "Belum ada trade tertutup.", "hiT": "Riwayat trading", "hiMore": "Tampilkan lebih banyak", "wdCrypto": "Crypto", "wdBank": "Bank (Indonesia)", "wdRise": "Rise", "wdSoon": "Segera hadir", "wdAddr": "Alamat wallet", "wdBankName": "Nama bank", "wdBankNo": "Nomor rekening", "wdBankHolder": "Nama pemilik rekening", "wdEAddr": "Alamat wallet tidak valid untuk network ini.", "wdEBank": "Lengkapi data bank dengan benar (nama bank, nomor rekening, nama pemilik).", "wdNote": "Permintaan penarikan ditinjau oleh tim sebelum diproses."});Object.assign(T.en,{"stT": "Trading statistics", "stWin": "Win rate", "stTrades": "Total trades", "stWL": "Wins / losses", "stAvgW": "Average win", "stAvgL": "Average loss", "stPF": "Profit factor", "stBest": "Best trade", "stWorst": "Worst trade", "stNet": "Total PnL", "stNone": "No closed trades yet.", "hiT": "Trading history", "hiMore": "Show more", "wdCrypto": "Crypto", "wdBank": "Bank (Indonesia)", "wdRise": "Rise", "wdSoon": "Coming soon", "wdAddr": "Wallet address", "wdBankName": "Bank name", "wdBankNo": "Account number", "wdBankHolder": "Account holder name", "wdEAddr": "Invalid wallet address for this network.", "wdEBank": "Complete the bank details correctly (bank name, account number, holder name).", "wdNote": "Withdrawal requests are reviewed by the team before they are processed."});
Object.assign(T.id,{"n_billing":"Billing","billT":"Billing","billLoad":"Memuat riwayat pembayaran...","billErr":"Riwayat pembayaran belum bisa dimuat. Coba lagi nanti.","billNone":"Belum ada pembayaran. Pembelian challenge kamu akan muncul di sini.","billTotal":"Total pembayaran","billOrders":"Jumlah order","billPaid":"Lunas","billInv":"Invoice","billOld":"Nominal tidak tercatat (order lama)","billCp":"Kupon","billNote":"Nominal sesuai yang dibayar setelah kupon. Butuh bukti pembayaran? Hubungi CS dengan nomor invoice.","n_offers":"Offers","n_cert":"Certificate","rf":"Perbarui","rfAgo":"Diperbarui","rfNow":"baru saja","rfS":" dtk lalu","rfM":" mnt lalu","rfFail":"Gagal memperbarui. Coba lagi.","rfTip":"Perbarui data akun (otomatis tiap 30 detik)",
"crT":"Kredensial akun","crLogin":"Login","crPass":"Password","crServer":"Server","crShow":"Lihat","crHide":"Sembunyi","crNote":"Pakai data ini untuk login di aplikasi MetaTrader. Jangan bagikan ke siapa pun.",
"kycT":"Verifikasi dokumen","kyc_none":"Belum diverifikasi","kyc_pending":"Menunggu review","kyc_verified":"Terverifikasi","kyc_rejected":"Ditolak","kycDesc":"Upload foto dokumen identitas (KTP, paspor, atau SIM) dan selfie sambil memegang dokumen tersebut. Pastikan semua teks terbaca jelas.","kycType":"Jenis dokumen","kycPass":"Paspor","kycId":"Foto dokumen identitas","kycSelfie":"Selfie sambil memegang dokumen","kycBtn":"Kirim untuk verifikasi","kycEFile":"Pilih foto dokumen dan selfie dulu.","kycEType":"Format file tidak didukung. Pakai JPG, PNG, atau WebP (dokumen boleh PDF, selfie harus foto).","kycEBig":"Ukuran file terlalu besar (maksimal 10 MB).","kycUp":"Mengunggah dokumen...","kycPendMsg":"Dokumen kamu sudah dikirim dan sedang ditinjau tim.","kycOkMsg":"Identitas kamu sudah terverifikasi.","kycRej":"Alasan penolakan","kycOff":"Verifikasi dokumen belum tersedia saat ini. Muat ulang halaman lalu coba lagi.",
"ofT":"Penawaran untuk kamu","ofNone":"Belum ada penawaran aktif.","ofUse":"Pakai sekarang","ofUntil":"Berlaku sampai",
"ceT":"Sertifikat","ceNone":"Sertifikat akan muncul di sini setelah akun kamu funded.","ceView":"Lihat sertifikat","ceFunded":"Funded"});
Object.assign(T.en,{"n_billing":"Billing","billT":"Billing","billLoad":"Loading payment history...","billErr":"Could not load payment history. Try again later.","billNone":"No payments yet. Your challenge purchases will appear here.","billTotal":"Total paid","billOrders":"Orders","billPaid":"Paid","billInv":"Invoice","billOld":"Amount not recorded (older order)","billCp":"Coupon","billNote":"Amounts are what you paid after coupons. Need a receipt? Contact support with the invoice number.","n_offers":"Offers","n_cert":"Certificate","rf":"Refresh","rfAgo":"Updated","rfNow":"just now","rfS":"s ago","rfM":" min ago","rfFail":"Could not refresh. Try again.","rfTip":"Refresh account data (automatic every 30 seconds)",
"crT":"Account credentials","crLogin":"Login","crPass":"Password","crServer":"Server","crShow":"Show","crHide":"Hide","crNote":"Use these details to log in on the MetaTrader app. Never share them with anyone.",
"kycT":"Document verification","kyc_none":"Not verified","kyc_pending":"Pending review","kyc_verified":"Verified","kyc_rejected":"Rejected","kycDesc":"Upload a photo of your ID (national ID, passport, or driver license) and a selfie holding that document. Make sure all text is clearly readable.","kycType":"Document type","kycPass":"Passport","kycId":"Photo of your ID document","kycSelfie":"Selfie holding the document","kycBtn":"Submit for verification","kycEFile":"Choose the ID photo and the selfie first.","kycEType":"Unsupported file. Use JPG, PNG, or WebP (the ID may be a PDF, the selfie must be a photo).","kycEBig":"File is too large (10 MB max).","kycUp":"Uploading documents...","kycPendMsg":"Your documents were submitted and are being reviewed by the team.","kycOkMsg":"Your identity is verified.","kycRej":"Rejection reason","kycOff":"Document verification is not available right now. Reload the page and try again.",
"ofT":"Offers for you","ofNone":"No active offers right now.","ofUse":"Use now","ofUntil":"Valid until","ceT":"Certificates","ceNone":"Your certificate will appear here once your account is funded.","ceView":"View certificate","ceFunded":"Funded"});Object.assign(T.id,{"wdPaid":"Dibayar","pcView":"Lihat sertifikat payout"});Object.assign(T.en,{"wdPaid":"Paid","pcView":"View payout certificate"});
var $=function(i){return document.getElementById(i)};
var t=function(k){return T[lang][k]};
Object.assign(T.id,{"tabActive":"Active","tabInactive":"Inactive","accTabNone":"Tidak ada akun di tab ini.","frz":"Statistik akun ini sudah dibekukan di posisi terakhir sebelum breach.","breached":"Breached","brD":"Akun ini menyentuh batas daily drawdown dan dinonaktifkan.","brM":"Akun ini menyentuh batas max drawdown dan dinonaktifkan."});Object.assign(T.en,{"tabActive":"Active","tabInactive":"Inactive","accTabNone":"No accounts in this tab.","frz":"This account's stats are frozen at the last position before the breach.","breached":"Breached","brD":"This account hit the daily drawdown limit and was deactivated.","brM":"This account hit the max drawdown limit and was deactivated."});
Object.assign(T.id,{"country":"Negara","prov":"Provinsi","city":"Kota","phone":"No. HP","eLoc":"Isi negara, provinsi, dan kota.","ePhone":"No. HP tidak valid (8-15 digit).","needAddr":"Lengkapi data profil kamu (alamat, negara, provinsi, kota, dan no. HP) untuk melanjutkan."});Object.assign(T.en,{"country":"Country","prov":"Province / State","city":"City","phone":"Phone number","eLoc":"Enter your country, province, and city.","ePhone":"Invalid phone number (8-15 digits).","needAddr":"Please complete your profile (address, country, province, city, and phone number) to continue."});
function phoneOk(p){return /^\+?\d{8,15}$/.test(String(p||"").replace(/[\s()-]/g,""))}
function profDone(p){return !!(p&&p.address&&p.country&&p.province&&p.city&&p.phone)}
var mode="login",user=null,fb=null;
function msg(k,ok){var m=$("lgMsg");m.textContent=k?t(k):"";}
var SUPPORT="https://t.me/Hamadavxt";
var KYC_API="https://vekxt-kyc-api.hamada69r.workers.dev";
var ACC_API="https://monitor.hamada69r.workers.dev"; /* alamat Worker Cloudflare yang mengirim daftar akun trader (lihat catatan format di bawah). Kosong = tidak ada akun yang ditampilkan.
Worker menerima POST berisi {"email":"...","token":"..."} dan membalas {"accounts":[{"id":"NV-48217","program":"Nova 2 Step","phase":1,"phases":2,"size":50000,"equity":51920,"target":8,"dd":5,"md":10,"ddUsed":620,"mdUsed":310,"days":10,"minDays":5,"pnl":{"2026-10-15":-30}}]}
target = null untuk akun tanpa target profit. pnl = hasil per hari dalam USD, kunci "YYYY-MM-DD" (positif = profit, negatif = rugi). */
var ACCOUNTS=[],accState="idle",accInfo="",selAcc=null,accTab="active";
var AUTO_MS=30000,accSig="",lastSync=0,refreshing=false,rfErr="",credShow=false,animKey="",lastSel=null;
function curAcc(){return selAcc!==null?ACCOUNTS[selAcc]:null}
/* aturan tiap program: Zero Instant daily 3% / max 7% trailing; Hyper 1 Step 4% / 8% / target 10%; Nova 2 Step 5% / 10% static / target fase 1 8%, fase 2 5% */
function ruleOf(p,ph){p=String(p||"").toLowerCase();
 if(p.indexOf("zero")>-1)return{dd:3,md:7};
 if(p.indexOf("hyper")>-1)return{dd:4,md:8,target:10};
 if(p.indexOf("nova")>-1)return{dd:5,md:10,target:Number(ph)===2?5:8};
 if(p.indexOf("perp")>-1)return{dd:4,md:8,target:10};
 return{dd:0,md:0}}
function withRules(a){var r=ruleOf(a.program,a.phase),o={};for(var k in a)o[k]=a[k];
 if(!Number(o.dd))o.dd=r.dd;if(!Number(o.md))o.md=r.md;
 if((o.target===undefined||o.target===null)&&r.target)o.target=r.target;
 return o}
/* akun breached dibekukan: snapshot terakhir disimpan, data live (ticker/Worker) tidak dipakai lagi */
var FRZ={},frzP=null;
function frzLoad(){
 if(frzP)return frzP;
 if(!CFG||!fs||!user||!user.uid)return Promise.resolve();
 frzP=fs.collection("frozen").where("uid","==",user.uid).get().then(function(q){q.docs.forEach(function(d){var r=d.data();if(r&&r.acc&&r.accId)FRZ[r.accId]=r.acc})}).catch(function(){frzP=null});
 return frzP}
function applyFrozen(list){
 return list.map(function(c){
  if(FRZ[c.id])return Object.assign({},FRZ[c.id],{frozen:true,breach:FRZ[c.id].breach||c.breach||"max"});
  if(c.breach&&CFG&&fs&&user&&user.uid){
   var snap=Object.assign({},c,{frozen:true,breachedAt:new Date().toISOString().slice(0,10)});
   FRZ[c.id]=snap;
   try{fs.collection("frozen").doc(user.uid+"_"+String(c.id).replace(/[^\w-]/g,"_")).set({uid:user.uid,accId:c.id,acc:JSON.parse(JSON.stringify(snap)),createdAt:firebase.firestore.FieldValue.serverTimestamp()}).catch(function(){})}catch(e){}
   return snap}
  return c})}
function liveAny(){return ACCOUNTS.some(function(c){return !c.breach})}
function breachOf(a){var n=function(v){v=Number(v);return isFinite(v)?v:0};
 if(a.breached===true||a.status==="breached"){var r=String(a.breachReason||"");return(r==="daily"||r==="daily_drawdown")?"daily":"max"}
 var s=n(a.size);if(s<=0)return"";
 if(n(a.md)>0&&n(a.mdUsed)>=s*n(a.md)/100)return"max";
 if(n(a.dd)>0&&n(a.ddUsed)>=s*n(a.dd)/100)return"daily";
 return""}
function normAcc(a){a=withRules(a);var n=function(v){v=Number(v);return isFinite(v)?v:0};return{unlock:(a.unlock&&Number(a.unlock.until)>Date.now())?{until:Number(a.unlock.until),max:Number(a.unlock.max)||10}:null,id:esc(a.id||""),program:esc(a.program||"Account"),phase:a.phase?n(a.phase):null,phases:a.phases?n(a.phases):null,size:n(a.size),equity:n(a.equity),target:a.target?n(a.target):null,dd:n(a.dd),md:n(a.md),ddUsed:n(a.ddUsed),mdUsed:n(a.mdUsed),days:n(a.days),minDays:n(a.minDays),pnl:(a.pnl&&typeof a.pnl==="object")?a.pnl:{},stats:(a.stats&&typeof a.stats==="object")?{trades:n(a.stats.trades),wins:n(a.stats.wins),losses:n(a.stats.losses),winRate:a.stats.winRate==null?null:n(a.stats.winRate),avgWin:n(a.stats.avgWin),avgLoss:n(a.stats.avgLoss),profitFactor:a.stats.profitFactor==null?null:n(a.stats.profitFactor),best:n(a.stats.best),worst:n(a.stats.worst),net:n(a.stats.net)}:null,trades:Array.isArray(a.trades)?a.trades.slice(0,50).map(function(x){return{t:esc(String(x.t||"").slice(0,19).replace("T"," ")),s:esc(x.s||""),d:x.d==="SELL"?"SELL":"BUY",v:n(x.v),p:n(x.p)}}):[],offline:!!a.offline,breach:breachOf(a),funded:!!a.funded,firstEntry:String(a.firstEntry||"").slice(0,10),fundedDate:String(a.fundedDate||"").slice(0,10),certId:String(a.certId||"").slice(0,40),cred:(a.login||a.password||a.server)?{login:String(a.login||"").slice(0,40),pass:String(a.password||"").slice(0,64),server:String(a.server||"").slice(0,80),platform:String(a.platform||"MT5").slice(0,12)}:null}}
var fs=null,prof=null,signingUp=false;
var kyc=null,kycState="idle",fbs=null;
function saveProfile(uid,data){return fs.collection("users").doc(uid).set(Object.assign({updatedAt:firebase.firestore.FieldValue.serverTimestamp()},data),{merge:true})}
function loadProfile(){
  if(!CFG||!fs||!user||!user.uid)return;
  fs.collection("users").doc(user.uid).get().then(function(d){
    prof=d.exists?d.data():{};
    if(!profDone(prof))view="prof";
    dash();
  }).catch(function(){prof=prof||{};dash()});
}
function loadAccounts(){
  if(CFG&&user&&!user.verified)return;
  if(!ACC_API||accState==="loading"||accState==="ok")return;
  accState="loading";dash();
  var go=function(tok){
    fetch(ACC_API,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({email:user.email,token:tok||null})}).then(function(r){return r.json().then(function(d){if(!r.ok||!d||d.error||!Array.isArray(d.accounts))throw d||{error:"format"};return d})}).then(function(d){return frzLoad().then(function(){return d})}).then(function(d){ACCOUNTS=applyFrozen(d.accounts.map(normAcc));accSig=JSON.stringify(ACCOUNTS);lastSync=Date.now();accState="ok";accInfo="";dash()}).catch(function(e){accState="err";accInfo=(e&&e.error)?String(e.error):(e&&typeof e==="object"&&!(e instanceof Error)?"format":"network");dash()});
  };
  if(CFG&&fb&&fb.auth().currentUser)fb.auth().currentUser.getIdToken().then(go,function(){go(null)});else go(null);
}

function agoText(){
  if(!lastSync)return"";
  var sc=Math.max(0,Math.floor((Date.now()-lastSync)/1000));
  return t("rfAgo")+" "+(sc<5?t("rfNow"):sc<60?sc+t("rfS"):Math.floor(sc/60)+t("rfM"));
}
function syncBar(){
  return'<div class="syncbar"><span id="rfTxt">'+esc(rfErr||agoText())+'</span><button type="button" class="rf-btn'+(refreshing?" spin":"")+'" id="rfBtn" title="'+esc(t("rfTip"))+'"'+(refreshing?' disabled="disabled"':'')+'><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/></svg>'+t("rf")+'</button></div>';
}
function setSync(){
  var a=$("rfTxt"),b=$("rfBtn");
  if(a)a.textContent=rfErr||agoText();
  if(b){b.classList.toggle("spin",refreshing);b.disabled=refreshing}
}
function refreshAccounts(manual){
  if(!ACC_API||!user||refreshing||accState==="loading")return;
  if(CFG&&!user.verified)return;
  refreshing=true;if(manual)rfErr="";setSync();
  var bad=function(){refreshing=false;rfErr=manual?t("rfFail"):"";setSync()};
  var go=function(tok){
    fetch(ACC_API,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({email:user.email,token:tok||null})})
    .then(function(r){return r.json().then(function(d){if(!r.ok||!d||d.error||!Array.isArray(d.accounts))throw d||{error:"format"};return d})})
    .then(function(d){
      var n=applyFrozen(d.accounts.map(normAcc)),sg=JSON.stringify(n),ch=sg!==accSig;
      ACCOUNTS=n;accSig=sg;lastSync=Date.now();rfErr="";refreshing=false;accState="ok";
      if(selAcc!==null&&!ACCOUNTS[selAcc])selAcc=null;
      if(ch||manual)dash();else setSync();
    }).catch(bad);
  };
  if(CFG&&fb&&fb.auth().currentUser)fb.auth().currentUser.getIdToken().then(go,function(){go(null)});else go(null);
}
function skel(){
  var c='<div class="lg-card sk"><i class="h"></i><i></i><i style="width:70%"></i></div>';
  return'<div role="status" aria-label="'+esc(t("accLoad"))+'">'+c+c+'</div>';
}
function copyTxt(txt,btn){
  var old=btn.textContent;
  var ok=function(){btn.textContent=t("affCopied");setTimeout(function(){btn.textContent=old},1500)};
  var fb2=function(){var ta=document.createElement("textarea");ta.value=txt;ta.style.cssText="position:fixed;opacity:0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy");ok()}catch(e){}document.body.removeChild(ta)};
  try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(ok,fb2);else fb2()}catch(e){fb2()}
}
function credCard(a){
  var c=a.cred;if(!c)return"";
  var r=function(k,l,v,sec){
    if(!v)return"";
    return'<div class="cr"><div><small>'+l+'</small><strong>'+(sec&&!credShow?"&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;":esc(v))+'</strong></div><div class="cr-a">'+(sec?'<button type="button" class="cr-b" id="crEye">'+t(credShow?"crHide":"crShow")+'</button>':'')+'<button type="button" class="cr-b" data-cp="'+k+'">'+t("affCopy")+'</button></div></div>';
  };
  return'<div class="lg-card"><div class="dtop" style="margin-bottom:0"><b>'+t("crT")+'</b><span class="tag">'+esc(c.platform)+'</span></div>'+r("login",t("crLogin"),c.login)+r("pass",t("crPass"),c.pass,1)+r("server",t("crServer"),c.server)+'<p class="cr-n">'+t("crNote")+'</p></div>';
}
function money(n){return Math.round(n).toLocaleString("en-US")+" USD"}
function row(l,v,p){p=isFinite(p)?Math.max(0,Math.min(100,p)):0;return '<div class="rw"><div class="rl"><span>'+l+'</span><span>'+v+'</span></div><div class="bar"><i style="width:'+p+'%"></i></div></div>'}
var calY=null,calM=null;
function pfmt(v){var a=Math.abs(v);return(v>0?"+":v<0?"-":"")+(a>=1000?(a/1000).toFixed(1).replace(/\.0$/,"")+"k":String(Math.round(a)))}
function calCard(a){
  var pn=(a&&a.pnl)||{},now=new Date();
  if(calY===null){calY=now.getFullYear();calM=now.getMonth()}
  var first=new Date(calY,calM,1),dim=new Date(calY,calM+1,0).getDate(),off=(first.getDay()+6)%7;
  var ym=calY+"-"+(calM<9?"0":"")+(calM+1),tot=0,w=0,l=0;
  var wk=lang==="en"?["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]:["Sen","Sel","Rab","Kam","Jum","Sab","Min"];
  var g=wk.map(function(d){return'<div class="cal-w">'+d+'</div>'}).join("");
  for(var i=0;i<off;i++)g+='<div class="pc pc-x"></div>';
  for(var d=1;d<=dim;d++){
    var k=ym+"-"+(d<10?"0":"")+d,v=pn[k],c="pc",b="";
    if(typeof v==="number"){tot+=v;if(v>0){w++;c+=" pc-p"}else if(v<0){l++;c+=" pc-n"}b="<b>"+pfmt(v)+"</b>"}
    if(d===now.getDate()&&calM===now.getMonth()&&calY===now.getFullYear())c+=" pc-t";
    g+='<div class="'+c+'"><span>'+d+'</span>'+b+'</div>';
  }
  var title=first.toLocaleDateString(lang==="en"?"en-US":"id-ID",{month:"long",year:"numeric"});
  return'<div class="lg-card"><div class="cal-h"><b>'+t("pnlT")+" | "+title+'</b><div class="cal-nav"><button type="button" id="calPrev" aria-label="Previous">&#8249;</button><button type="button" id="calNext" aria-label="Next">&#8250;</button></div></div>'
   +'<div class="cal-sum"><div>'+t("pnlTot")+'<strong class="'+(tot>0?"up":tot<0?"dn":"")+'">'+(tot<0?"-":tot>0?"+":"")+money(Math.abs(tot))+'</strong></div><div>'+t("pnlWL")+'<strong>'+w+" / "+l+'</strong></div></div>'
   +'<div class="cal-g">'+g+'</div></div>';
}
function kfmt(n){return n>=1000?(n/1000)+"K":String(n)}
var histN=10;
function pm(v){return(v>0?"+":v<0?"-":"")+Math.abs(v).toFixed(2)+" USD"}
function statsCard(a){
  var s=a.stats;
  if(!s||!s.trades)return'<div class="lg-card"><b>'+t("stT")+'</b><p>'+t("stNone")+'</p></div>';
  return'<div class="lg-card"><b>'+t("stT")+'</b>'+row(t("stWin"),(s.winRate==null?"-":s.winRate.toFixed(1)+"%"),s.winRate||0)
   +'<div class="sg"><div><small>'+t("stTrades")+'</small><strong>'+s.trades+'</strong></div><div><small>'+t("stWL")+'</small><strong>'+s.wins+" / "+s.losses+'</strong></div>'
   +'<div><small>'+t("stAvgW")+'</small><strong class="up">'+pm(s.avgWin)+'</strong></div><div><small>'+t("stAvgL")+'</small><strong class="dn">'+pm(s.avgLoss)+'</strong></div>'
   +'<div><small>'+t("stPF")+'</small><strong>'+(s.profitFactor==null?"-":s.profitFactor.toFixed(2))+'</strong></div><div><small>'+t("stNet")+'</small><strong class="'+(s.net>0?"up":s.net<0?"dn":"")+'">'+pm(s.net)+'</strong></div>'
   +'<div><small>'+t("stBest")+'</small><strong class="up">'+pm(s.best)+'</strong></div><div><small>'+t("stWorst")+'</small><strong class="dn">'+pm(s.worst)+'</strong></div></div></div>';
}
function histCard(a){
  var tr=a.trades||[];
  if(!tr.length)return'<div class="lg-card"><b>'+t("hiT")+'</b><p>'+t("stNone")+'</p></div>';
  var x='<div class="lg-card"><b>'+t("hiT")+'</b><div style="margin-top:8px">';
  x+=tr.slice(0,histN).map(function(r,j){return'<div class="th"><div><b>'+r.s+'</b><span class="tg-b">'+r.d+" "+r.v+'</span><small>'+r.t+'</small>'+(PM==="perp"?'<button type="button" class="pchip pcard" data-pa="tcard" data-j="'+j+'">PnL Card</button>':"")+'</div><strong class="'+(r.p>0?"up":r.p<0?"dn":"")+'">'+pm(r.p)+'</strong></div>'}).join("");
  x+='</div>';
  if(tr.length>histN)x+='<button type="button" class="more" id="histMore">'+t("hiMore")+'</button>';
  return x+'</div>';
}
function consRow(a){var cs=wdCons(a),p=cs.pct;return row(t("wdCons")+" (15%)",(p==null?"-":p.toFixed(1)+"%")+" / 15%",p==null?0:p/15*100)+'<p class="acc-hint">'+t("wdConsHint")+'</p>'}
var WDBANKS=["BCA","BRI","BNI","Mandiri","BSI","CIMB Niaga","Permata","Danamon","BTN","OCBC","Maybank","Panin","Mega","BTPN","Jenius","SeaBank","Jago","Neo Commerce","Allo Bank","blu by BCA Digital","Bank DKI","BJB","Bank Jatim","Sinarmas","UOB","Muamalat"];
function wdBankVal(){var s=$("wdBankName");if(!s)return"";if(s.value==="__other"){var o=$("wdBankOther");return o?o.value:""}return s.value}
function accDetail(a){
  var home=$("lgHome").href,tg=a.target?a.size*a.target/100:0,pf=a.equity-a.size,dl=a.size*a.dd/100,ml=a.size*a.md/100,x="";
  if(a.offline)return'<button type="button" class="acc-back" id="accBack">&#8249; '+t("accBack")+'</button><div class="lg-card"><b>'+a.program+" "+kfmt(a.size)+'</b><p>ID '+a.id+'</p><p>'+t("accOffMsg")+'</p></div>';
  x+='<button type="button" class="acc-back" id="accBack">&#8249; '+t("accBack")+'</button>';
  x+='<div class="lg-card"><div class="dtop"><div><b>'+a.program+" "+kfmt(a.size)+'</b><p>'+(a.phase?t("phase")+" "+a.phase+"/"+a.phases+" | ":"")+'ID '+a.id+'</p></div><span class="tag'+(a.breach?' kyc-rejected':'')+'">'+(a.breach?t("breached"):t("active"))+'</span></div>';
  x+='<div class="grid"><div><small>'+t("size")+'</small><strong>'+money(a.size)+'</strong></div><div><small>Equity</small><strong>'+money(a.equity)+'</strong></div><div><small>Profit</small><strong>'+(pf<0?"-":"+")+money(Math.abs(pf))+'</strong></div><div><small>'+t("days")+'</small><strong>'+a.days+(a.minDays?"/"+a.minDays:"")+'</strong></div></div></div>';
  x+=a.breach?'<div class="lg-card"><b>'+t("breached")+'</b><p style="margin-top:8px">'+t(a.breach==="daily"?"brD":"brM")+' '+t("frz")+'</p></div>':credCard(a);
  x+='<div class="lg-card"><b>'+t("progress")+'</b>'+(a.target?row(t("target")+" ("+a.target+"%)",money(Math.max(pf,0))+" / "+money(tg),pf/tg*100):"")+(a.dd?row(t("dlimit")+" ("+a.dd+"%)",money(a.ddUsed)+" / "+money(dl),a.ddUsed/dl*100):"")+(a.md?row(t("mlimit")+" ("+a.md+"%)",money(a.mdUsed)+" / "+money(ml),a.mdUsed/ml*100):"")+(wdIsInst(a)?consRow(a):"")+'</div>';
  x+=eqCard(a);
  x+=statsCard(a);
  x+=calCard(a);
  x+=histCard(a);
  return x;
}
/* perp-engine.mjs (inline) */
var PE=(function(){
// perp-engine.mjs — mesin simulasi perpetual (tanpa I/O, mudah diuji).
// Satuan: USDT. Mode satu arah (tanpa hedge) per simbol, cross margin.
// Harga masuk lewat "books": { BTCUSDT: { bid, ask } } dari data publik bursa.
// Semua angka fee dan batas di bawah ini hanya nilai awal; ubah lewat cfg.

const DEFAULT_CFG = {
  takerFee: 0.00055, // 0,055% untuk order yang langsung terisi
  makerFee: 0.0002,  // 0,02% untuk limit order yang menunggu
  defaultLev: 10,
  maxLev: 100, levMax: {}, // levMax[simbol] = batas leverage per koin (diisi dari Bybit)
  mmr: 0.005,        // maintenance margin 0,5% dari nilai posisi (disederhanakan)
  slippage: 0,       // slippage tambahan untuk market order, pecahan (0,0005 = 0,05%)
  maxSpread: 0.02,   // book dengan spread di atas 2% dianggap data rusak dan diabaikan
};

const r8 = (x) => Math.round(x * 1e8) / 1e8;
const EPS = 1e-12;
const QC = {}; // QC[simbol](harga) = nilai USD dari 1 satuan mata uang kuotasi; kosong = kuotasi USD (Perps dan pair USD)
const cv = (s, p) => (QC[s] ? QC[s](p) : 1);
const utcDay = (t) => new Date(t).toISOString().slice(0, 10);
const mid = (b) => (b.bid + b.ask) / 2;

function validBook(b, cfg = DEFAULT_CFG) {
  return !!b && b.bid > 0 && b.ask >= b.bid && (b.ask - b.bid) / b.bid <= cfg.maxSpread;
}

function newAccount({ id, size, rules = {}, now = Date.now() }) {
  return {
    id, size, balance: size, peak: size, realized: 0, fees: 0, funding: 0,
    positions: {}, orders: [], lev: {}, trades: [], fundDay: {}, firstOpen: null, status: "active", reason: null,
    rules: { dailyDd: 3, maxDd: 7, trailing: false, ...rules },
    day: { date: utcDay(now), startBal: size }, nextOrderId: 1,
  };
}

function upnl(p, b) {
  const px = p.side === "long" ? b.bid : b.ask; // harga yang didapat kalau ditutup sekarang
  return (p.side === "long" ? px - p.entry : p.entry - px) * p.qty * cv(p.symbol, px);
}

function equity(acc, books) {
  let u = 0;
  for (const p of Object.values(acc.positions)) u += upnl(p, books[p.symbol]);
  return r8(acc.balance + u);
}

function usedMargin(acc) {
  let m = 0;
  for (const p of Object.values(acc.positions)) m += p.mg ? p.qty * p.mg : (p.qty * p.entry * cv(p.symbol, p.entry)) / p.lev;
  return m;
}

function maintMargin(acc, books, cfg) {
  let m = 0;
  for (const p of Object.values(acc.positions)) m += p.mg ? p.qty * p.mg * (cfg.mmFut == null ? 0.5 : cfg.mmFut) : p.qty * mid(books[p.symbol]) * cv(p.symbol, mid(books[p.symbol])) * cfg.mmr;
  return m;
}

function setLeverage(acc, symbol, lev, cfg = DEFAULT_CFG) {
  const mx = (cfg.levMax && cfg.levMax[symbol]) || cfg.maxLev;
  if (!(lev >= 1 && lev <= mx)) return { ok: false, error: "bad_leverage" };
  if (acc.positions[symbol]) return { ok: false, error: "position_open" };
  acc.lev[symbol] = lev;
  return { ok: true };
}

// Mengisi order: menutup posisi berlawanan dulu, sisanya membuka atau menambah posisi.
// Tiap penutupan dicatat sebagai trade; fee pembukaan dibagi sesuai porsi yang ditutup.
let CLOSE_WHY = null; // alasan penutupan untuk trade berikutnya: sl | tp | liq | null (manual)
function applyFill(acc, symbol, side, qty, price, maker, cfg, reduceOnly, now) {
  const buy = side === "buy", rate = maker ? cfg.makerFee : cfg.takerFee, fu = cfg.feeU && cfg.feeU[symbol];
  const ev = [];
  let rest = qty, fee = 0;
  const pos = acc.positions[symbol];
  if (pos && (pos.side === "long") !== buy) {
    const cq = Math.min(rest, pos.qty), before = pos.qty;
    const gross = (pos.side === "long" ? price - pos.entry : pos.entry - price) * cq * cv(symbol, price);
    const closeFee = fu != null ? cq * fu : price * cq * cv(symbol, price) * rate;
    const share = (pos.feePaid || 0) * (cq / before);
    pos.feePaid = r8((pos.feePaid || 0) - share);
    acc.balance = r8(acc.balance + gross);
    acc.realized = r8(acc.realized + gross);
    acc.trades.push({ at: now, s: symbol, d: pos.side === "long" ? "BUY" : "SELL", v: r8(cq), o: pos.entry, c: price, l: pos.lev, w: CLOSE_WHY || undefined, p: r8(gross - closeFee - share), g: r8(gross), f: r8(closeFee + share), ot: pos.since || undefined });
    if (acc.trades.length > 1000) acc.trades.shift();
    fee += closeFee;
    pos.qty = r8(pos.qty - cq);
    rest = r8(rest - cq);
    if (pos.qty <= EPS) delete acc.positions[symbol];
    ev.push({ type: "close", symbol, qty: r8(cq), price, pnl: r8(gross) });
  }
  if (rest > EPS && !reduceOnly) {
    const openFee = fu != null ? rest * fu : price * rest * cv(symbol, price) * rate;
    fee += openFee;
    const cur = acc.positions[symbol];
    if (cur) {
      cur.entry = r8((cur.entry * cur.qty + price * rest) / (cur.qty + rest));
      cur.qty = r8(cur.qty + rest);
      cur.feePaid = r8((cur.feePaid || 0) + openFee);
    } else {
      acc.positions[symbol] = { symbol, side: buy ? "long" : "short", qty: r8(rest), entry: price, lev: acc.lev[symbol] || cfg.defaultLev, sl: null, tp: null, feePaid: r8(openFee), since: now, ...(cfg.mgU && cfg.mgU[symbol] ? { mg: cfg.mgU[symbol] } : {}) };
    }
    if (!acc.firstOpen) acc.firstOpen = utcDay(now);
    ev.push({ type: "open", symbol, side: buy ? "long" : "short", qty: r8(rest), price });
    rest = 0;
  }
  fee = r8(fee);
  acc.balance = r8(acc.balance - fee);
  acc.fees = r8(acc.fees + fee);
  ev.push({ type: "fee", symbol, fee });
  return ev;
}

// Cek margin sebelum order: bagian yang membuka posisi butuh margin awal + fee.
function marginCheck(acc, books, symbol, side, qty, price, maker, cfg, reduceOnly) {
  const pos = acc.positions[symbol];
  const opposite = pos && (pos.side === "long") !== (side === "buy");
  if (reduceOnly && !opposite) return "reduce_only_no_position";
  const closing = opposite ? Math.min(qty, pos.qty) : 0;
  const opening = reduceOnly ? 0 : qty - closing;
  const mgU = cfg.mgU && cfg.mgU[symbol], fu = cfg.feeU && cfg.feeU[symbol];
  if (cfg.wU && cfg.capU > 0 && opening > 0) {
    let cur = 0;
    for (const p of Object.values(acc.positions)) cur += p.qty * (cfg.wU[p.symbol] || 0);
    const w = cfg.wU[symbol] || 0;
    if (cur - closing * w + opening * w > cfg.capU + EPS) return "max_contracts";
  }
  const lev = acc.lev[symbol] || cfg.defaultLev;
  const fee = fu != null ? qty * fu : price * qty * cv(symbol, price) * (maker ? cfg.makerFee : cfg.takerFee);
  const need = (mgU ? opening * mgU : (opening * price * cv(symbol, price)) / lev) + fee;
  const free = equity(acc, books) - usedMargin(acc);
  return need > free + EPS ? "insufficient_margin" : null;
}

function placeOrder(acc, o, books, cfg = DEFAULT_CFG, now = Date.now()) {
  if (acc.status !== "active") return { ok: false, error: "account_" + acc.status };
  const b = books[o.symbol];
  if (!validBook(b, cfg)) return { ok: false, error: "no_price" };
  if (!(o.qty > 0) || (o.side !== "buy" && o.side !== "sell")) return { ok: false, error: "bad_order" };
  const buy = o.side === "buy";
  const limitOk = o.type === "limit" && o.price > 0, stopOk = o.type === "stop" && o.price > 0;
  if (o.type !== "market" && !limitOk && !stopOk) return { ok: false, error: "bad_order" };
  if (stopOk && (buy ? o.price <= b.ask : o.price >= b.bid)) return { ok: false, error: "bad_stop" };

  const crossing = o.type === "market" || (!stopOk && (buy ? o.price >= b.ask : o.price <= b.bid));
  if (crossing) {
    const px = buy ? b.ask * (1 + cfg.slippage) : b.bid * (1 - cfg.slippage);
    const err = marginCheck(acc, books, o.symbol, o.side, o.qty, px, false, cfg, !!o.reduceOnly);
    if (err) return { ok: false, error: err };
    const events = applyFill(acc, o.symbol, o.side, o.qty, px, false, cfg, !!o.reduceOnly, now);
    if (acc.positions[o.symbol]) {
      if (o.sl) acc.positions[o.symbol].sl = o.sl;
      if (o.tp) acc.positions[o.symbol].tp = o.tp;
    }
    return { ok: true, filled: true, price: px, events };
  }
  const id = acc.nextOrderId++;
  acc.orders.push({ id, symbol: o.symbol, side: o.side, qty: o.qty, price: o.price, reduceOnly: !!o.reduceOnly, sl: o.sl || null, tp: o.tp || null, ...(stopOk ? { kind: "stop" } : {}) });
  return { ok: true, filled: false, orderId: id, events: [] };
}

function cancelOrder(acc, id) {
  const n = acc.orders.length;
  acc.orders = acc.orders.filter((x) => x.id !== id);
  return { ok: acc.orders.length < n };
}

function setStops(acc, symbol, { sl, tp }) {
  const p = acc.positions[symbol];
  if (!p) return { ok: false, error: "no_position" };
  if (sl !== undefined) p.sl = sl || null;
  if (tp !== undefined) p.tp = tp || null;
  return { ok: true };
}

function closeAll(acc, books, cfg, now) {
  const ev = [];
  for (const sym of Object.keys(acc.positions)) {
    const p = acc.positions[sym], b = books[sym];
    if (!validBook(b, cfg)) continue;
    const buy = p.side === "short";
    ev.push(...applyFill(acc, sym, buy ? "buy" : "sell", p.qty, buy ? b.ask : b.bid, false, cfg, true, now));
  }
  acc.orders = [];
  return ev;
}

function breach(acc, books, cfg, reason, now) {
  CLOSE_WHY = "liq";
  const events = closeAll(acc, books, cfg, now);
  CLOSE_WHY = null;
  if (acc.balance < 0) acc.balance = 0; // akun simulasi tidak bisa minus
  acc.status = "breached";
  acc.reason = reason;
  events.push({ type: "breach", reason });
  return events;
}

// Dipanggil tiap ada harga baru: isi limit order, SL/TP, likuidasi, lalu aturan drawdown.
function onTick(acc, books, cfg = DEFAULT_CFG, now = Date.now()) {
  if (acc.status !== "active") return [];
  const events = [];
  const day = utcDay(now);
  if (acc.day.date !== day) acc.day = { date: day, startBal: acc.balance };

  // 1) limit order yang menunggu
  for (const o of [...acc.orders]) {
    const b = books[o.symbol];
    if (!validBook(b, cfg)) continue;
    const stop = o.kind === "stop";
    const hit = stop ? (o.side === "buy" ? b.ask >= o.price : b.bid <= o.price) : (o.side === "buy" ? b.ask <= o.price : b.bid >= o.price);
    if (!hit) continue;
    acc.orders = acc.orders.filter((x) => x.id !== o.id);
    const fpx = stop ? (o.side === "buy" ? b.ask : b.bid) : o.price;
    const err = marginCheck(acc, books, o.symbol, o.side, o.qty, fpx, !stop, cfg, o.reduceOnly);
    if (err) { events.push({ type: "order_cancelled", id: o.id, reason: err }); continue; }
    events.push(...applyFill(acc, o.symbol, o.side, o.qty, fpx, !stop, cfg, o.reduceOnly, now));
    if (acc.positions[o.symbol]) { if (o.sl) acc.positions[o.symbol].sl = o.sl; if (o.tp) acc.positions[o.symbol].tp = o.tp; }
  }

  // 2) stop loss dan take profit
  for (const sym of Object.keys(acc.positions)) {
    const p = acc.positions[sym], b = books[sym];
    if (!validBook(b, cfg)) continue;
    const long = p.side === "long", exit = long ? b.bid : b.ask, closeSide = long ? "sell" : "buy";
    if (p.sl && (long ? exit <= p.sl : exit >= p.sl)) {
      CLOSE_WHY = "sl"; events.push({ type: "stop_loss", symbol: sym }, ...applyFill(acc, sym, closeSide, p.qty, exit, false, cfg, true, now)); CLOSE_WHY = null;
    } else if (p.tp && (long ? exit >= p.tp : exit <= p.tp)) {
      CLOSE_WHY = "tp"; events.push({ type: "take_profit", symbol: sym }, ...applyFill(acc, sym, closeSide, p.qty, p.tp, true, cfg, true, now)); CLOSE_WHY = null;
    }
  }

  // semua posisi yang masih ada harus punya harga valid, kalau tidak lewati pengecekan risiko
  const live = Object.values(acc.positions);
  if (live.some((p) => !validBook(books[p.symbol], cfg))) return events;

  // 3) likuidasi
  if (live.length && equity(acc, books) <= maintMargin(acc, books, cfg)) return events.concat(breach(acc, books, cfg, "liquidation", now));

  // 4) aturan drawdown
  const eq = equity(acc, books);
  if (eq > acc.peak) acc.peak = eq;
  const r = acc.rules;
  if (r.dailyDd > 0 && acc.day.startBal - eq >= (acc.size * r.dailyDd) / 100) return events.concat(breach(acc, books, cfg, "daily", now));
  const ref = r.trailing ? (r.lock ? Math.min(acc.peak, acc.size * (1 + r.maxDd / 100)) : acc.peak) : acc.size;
  if (ref - eq >= (acc.size * r.maxDd) / 100) return events.concat(breach(acc, books, cfg, "max", now));
  return events;
}

// Funding: rate positif berarti long membayar dan short menerima.
function applyFunding(acc, symbol, rate, markPrice, now = Date.now()) {
  const p = acc.positions[symbol];
  if (!p || acc.status !== "active") return 0;
  const pay = r8((p.side === "long" ? 1 : -1) * p.qty * markPrice * rate);
  acc.balance = r8(acc.balance - pay);
  acc.funding = r8(acc.funding - pay);
  const d = utcDay(now);
  acc.fundDay[d] = r8((acc.fundDay[d] || 0) - pay);
  return pay;
}

// Ringkasan untuk dashboard.
function snapshot(acc, books) {
  const eq = equity(acc, books);
  return {
    status: acc.status, reason: acc.reason, size: acc.size, balance: r8(acc.balance), equity: eq,
    unrealized: r8(eq - acc.balance), usedMargin: r8(usedMargin(acc)), freeMargin: r8(eq - usedMargin(acc)),
    realized: acc.realized, fees: acc.fees, funding: acc.funding,
    dailyLoss: Math.max(0, r8(acc.day.startBal - eq)), dailyLimit: (acc.size * acc.rules.dailyDd) / 100,
    maxLoss: Math.max(0, r8((acc.rules.trailing ? (acc.rules.lock ? Math.min(acc.peak, acc.size * (1 + acc.rules.maxDd / 100)) : acc.peak) : acc.size) - eq)), maxLimit: (acc.size * acc.rules.maxDd) / 100,
    floor: r8((acc.rules.trailing ? (acc.rules.lock ? Math.min(acc.peak, acc.size * (1 + acc.rules.maxDd / 100)) : acc.peak) : acc.size) - (acc.size * acc.rules.maxDd) / 100),
    positions: Object.values(acc.positions).map((p) => ({ ...p, upnl: r8(upnl(p, books[p.symbol])) })),
    orders: acc.orders,
  };
}

// Buku harian + statistik, bentuknya sama dengan akun CFD di dashboard.
function ledger(acc) {
  const r2 = (x) => Math.round(x * 100) / 100, pnl = {}, days = new Set(), tr = acc.trades || [];
  for (const x of tr) { const d = utcDay(x.at); pnl[d] = r2((pnl[d] || 0) + x.p); days.add(d); }
  for (const [d, v] of Object.entries(acc.fundDay || {})) pnl[d] = r2((pnl[d] || 0) + v);
  const wins = tr.filter((x) => x.p > 0), losses = tr.filter((x) => x.p < 0);
  const sumW = wins.reduce((a, x) => a + x.p, 0), sumL = losses.reduce((a, x) => a + x.p, 0), decided = wins.length + losses.length;
  const stats = {
    trades: tr.length, wins: wins.length, losses: losses.length,
    winRate: decided ? r2((wins.length / decided) * 100) : null,
    avgWin: wins.length ? r2(sumW / wins.length) : 0, avgLoss: losses.length ? r2(sumL / losses.length) : 0,
    profitFactor: sumL < 0 ? r2(sumW / -sumL) : null,
    best: tr.length ? r2(Math.max(...tr.map((x) => x.p))) : 0, worst: tr.length ? r2(Math.min(...tr.map((x) => x.p))) : 0,
    net: r2(tr.reduce((a, x) => a + x.p, 0)),
  };
  const recent = tr.slice(-200).reverse().map((x) => ({ t: new Date(x.at).toISOString().slice(0, 19), s: x.s, d: x.d, v: x.v, o: x.o, c: x.c, l: x.l, w: x.w, p: r2(x.p), g: x.g, f: x.f, ot: x.ot }));
  return { pnl, days: days.size, firstEntry: acc.firstOpen || undefined, stats, trades: recent };
}

return{QC,DEFAULT_CFG,validBook,newAccount,equity,usedMargin,setLeverage,placeOrder,cancelOrder,setStops,onTick,applyFunding,snapshot,ledger};
})();
/* ===== PERPS: dual login (CFD / Perps) + terminal. Harga: Bybit publik. Mesin: perp-engine.mjs (inline di atas) ===== */
var PM=(function(){var m=document.documentElement.getAttribute("data-mode");return m==="perp"||m==="fut"?m:"cfd"})();
var PSYMS=["BTCUSDT","ETHUSDT","SOLUSDT","XRPUSDT","DOGEUSDT","XAUUSDT"],PDEC={BTCUSDT:1,ETHUSDT:2,SOLUSDT:3,XRPUSDT:4,DOGEUSDT:5,XAUUSDT:2},QSTEP={BTCUSDT:.001,ETHUSDT:.01,SOLUSDT:.1,XRPUSDT:1,DOGEUSDT:1,XAUUSDT:.01},PTICK={},PMINQ={},INFO={BTCUSDT:1,ETHUSDT:1,SOLUSDT:1,XRPUSDT:1,DOGEUSDT:1,XAUUSDT:1},INFO_OK=false,ALLT={},pAllAt=0,pInfoBusy=false,pSubs={};
/* --- daftar koin: semua perpetual USDT Bybit (otomatis) + kategori Major / Meme / Micin / Emas --- */
var PMEME=/^(DOGE|SHIB|PEPE|WIF|BONK|FLOKI|MEME|TURBO|BRETT|POPCAT|MOG|NEIRO|PNUT|GOAT|ACT|MOODENG|FARTCOIN|TRUMP|MEW|BOME|DOGS|CAT|BABYDOGE|SATS|RATS|LADYS|WOJAK|MYRO|SLERF|BODEN|MICHI|GIGA|SPX|CHILLGUY|PENGU|AI16Z|VINE|HIPPO|BANANA|TOSHI|DEGEN|MOCHI|APU|PONKE|HMSTR|CATI|MUBARAK|BROCCOLI|BANANAS31|PUMP|USELESS|FWOG|PEOPLE|MELANIA|LIBRA|PIPPIN|ZEREBRO|GRIFFAIN|SWARMS|TST|BULLY|MEMEFI|MAGA|SUNDOG|KEYCAT|MANEKI|SIGMA|SNEK|BOBO|WEN|ELON|CHEEMS)$/;
var PMAJ={BTC:1,ETH:1,BNB:1,SOL:1,XRP:1,ADA:1,AVAX:1,DOT:1,LINK:1,LTC:1,TRX:1,TON:1,BCH:1,ATOM:1,NEAR:1,SUI:1,APT:1,ARB:1,OP:1,UNI:1,AAVE:1,ETC:1,XLM:1,HBAR:1,FIL:1,INJ:1},PGOLD={XAU:1,XAUT:1,PAXG:1};
var PQUICK=["BTCUSDT","ETHUSDT","SOLUSDT","XAUUSDT","DOGEUSDT","1000PEPEUSDT","WIFUSDT","1000BONKUSDT"],PTFS=[["1","1m"],["3","3m"],["5","5m"],["15","15m"],["30","30m"],["60","1h"],["120","2h"],["240","4h"],["360","6h"],["720","12h"],["D","1D"],["W","1W"],["M","1M"]],TFSEC={"1":60,"3":180,"5":300,"15":900,"30":1800,"60":3600,"120":7200,"240":14400,"360":21600,"720":43200,"D":86400,"W":604800,"M":2592000},PCATS=[["all","Semua","All"],["major","Major","Major"],["meme","Meme","Meme"],["micin","Micin","Micin"],["gold","Emas","Gold"]],pCatSel="all",pPickOpen=false;
function pBase(s){return String(s).replace(/USDT$/,"")}
function pCatOf(s){var b=pBase(s),n=b.replace(/^(1000000|100000|10000|1000)/,"");
  if(PGOLD[b])return"gold";
  if(PMEME.test(n)||(n!==b&&!/^(LUNC|XEC|X)$/.test(n)))return"meme";
  if(PMAJ[b])return"major";
  var t=ALLT[s];return t&&t.vol<25e6?"micin":"alt"}
function pLevMax(s){return PCFG.levMax[s]||50}
function decOf(v){var x=String(v);if(x.indexOf(".")<0)return 0;return x.replace(/0+$/,"").length-x.indexOf(".")-1}
function pLoadInfo(){
  if(INFO_OK||pInfoBusy||!window.fetch)return;pInfoBusy=true;
  fetch(PREST+"/v5/market/instruments-info?category=linear&limit=1000").then(function(r){return r.json()}).then(function(d){
    var l=(d&&d.result&&d.result.list)||[],o={},syms=[];
    l.forEach(function(x){
      if(!x||x.status!=="Trading"||x.quoteCoin!=="USDT"||x.contractType!=="LinearPerpetual")return;
      var pf=x.priceFilter||{},lf=x.lotSizeFilter||{},lv=x.leverageFilter||{},tk=+pf.tickSize,qs=+lf.qtyStep,mq=+lf.minOrderQty,ml=Math.floor(+lv.maxLeverage),s=x.symbol;
      if(!(tk>0&&qs>0))return;
      PTICK[s]=tk;PDEC[s]=decOf(pf.tickSize);QSTEP[s]=qs;PMINQ[s]=mq>0?mq:qs;if(ml>=1)PCFG.levMax[s]=ml;o[s]=1;syms.push(s)});
    pInfoBusy=false;
    if(!syms.length){setTimeout(pLoadInfo,8000);return}
    INFO=o;INFO_OK=true;PSYMS=syms.sort();
    if($("pTerm")&&selP!==null)dash()}).catch(function(){pInfoBusy=false;setTimeout(pLoadInfo,8000)})}
function pLoadAllT(force){
  var n=Date.now();if(!window.fetch||(!force&&n-pAllAt<20000))return;pAllAt=n;
  fetch(PREST+"/v5/market/tickers?category=linear").then(function(r){return r.json()}).then(function(d){
    ((d&&d.result&&d.result.list)||[]).forEach(function(x){if(/USDT$/.test(x.symbol))ALLT[x.symbol]={last:+x.lastPrice,chg:+x.price24hPcnt,vol:+x.turnover24h}});
    pRenderQuick();pRenderList()}).catch(function(){pAllAt=0})}
function pQuickHtml(){var l=PQUICK.filter(function(s){return INFO[s]});if(l.indexOf(pSym)<0)l.unshift(pSym);
  return l.map(function(s){return'<button type="button" class="pchip" data-pa="sym" data-s="'+s+'" aria-pressed="'+(s===pSym)+'">'+esc(pBase(s))+'</button>'}).join("")}
function pRenderQuick(){var e=$("pQuick");if(e)e.innerHTML=pQuickHtml()}
function pRenderList(){
  var e=$("pList");if(!e)return;
  var q=String(($("pSrch")||{}).value||"").toUpperCase().replace(/[^A-Z0-9]/g,""),
  rows=PSYMS.filter(function(s){return(!q||s.indexOf(q)>-1)&&(pCatSel==="all"||q||pCatOf(s)===pCatSel)});
  rows.sort(function(a,b){var d=((ALLT[b]||{}).vol||0)-((ALLT[a]||{}).vol||0);return d||(a<b?-1:1)});
  var tot=rows.length,x=rows.slice(0,100).map(function(s){var t=ALLT[s],d=PDEC[s]||2;
    return'<button type="button" class="prow" data-pa="sym" data-s="'+s+'"><b>'+esc(pBase(s))+'</b><span class="pm">'+pLevMax(s)+'x</span><span class="pp">'+(t&&t.last>0?t.last.toFixed(Math.min(d,8)):"-")+'</span><span class="pcc '+(t?pc(t.chg):"")+'">'+(t&&isFinite(t.chg)?(t.chg>0?"+":"")+(t.chg*100).toFixed(2)+"%":"-")+'</span></button>'}).join("");
  e.innerHTML=x?x+(tot>100?'<p class="acc-hint">'+L("Menampilkan 100 dari ","Showing 100 of ")+tot+L(". Ketik untuk mencari.",". Type to search.")+'</p>':""):'<p class="acc-hint">'+L("Koin tidak ditemukan.","No coin found.")+'</p>'}
/* --- langganan harga dinamis: hanya koin yang dipakai (dipilih + posisi + order) --- */
function pNeed(){var m={};m[pSym]=1;PERPS.forEach(function(a){if(a.status!=="active"||a.vt)return;Object.keys(a.positions).forEach(function(s){m[s]=1});a.orders.forEach(function(o){m[o.symbol]=1})});return m}
function pSync(){
  var w=pWs;if(!w||w.readyState!==1)return;var need=pNeed(),add=[],del=[],s;
  for(s in need)if(!pSubs[s])add.push(s);
  for(s in pSubs)if(!need[s])del.push(s);
  for(var i=0;i<add.length;i+=10){var c=add.slice(i,i+10);w.send(JSON.stringify({op:"subscribe",args:c.map(function(x){return"tickers."+x})}));c.forEach(function(x){pSubs[x]=1})}
  for(var j=0;j<del.length;j+=10){var d=del.slice(j,j+10);w.send(JSON.stringify({op:"unsubscribe",args:d.map(function(x){return"tickers."+x})}));d.forEach(function(x){delete pSubs[x];delete BK[x]})}}
var PWS="wss://stream.bybit.com/v5/public/linear",PREST="https://api.bybit.com",PPROG="Vekxt 1 Step Perpetuals",PRULES={dailyDd:4,maxDd:8,trailing:false},PTARGET=10,PSIZES=[5000,10000,25000,50000,100000];
var PCFG=Object.assign({},PE.DEFAULT_CFG),PERPS=[],pKeyLoaded="",selP=null,pSym="BTCUSDT",pTf="15",pSide="buy",pType="market";
var TK={},BK={},pWs=null,pBo=1000,pLastStep=0,pLastMsg=0,pSavedAt=0,pSig="",pHk="",pCD=[],pCDKey="",pNoteT=null,pDrawAt=0;
var pChart=null,pSer=null,pChEl=null,pRO=null,pLines=[],pLsig="",pArm=null,pDrag=null,pDrawnKey=null,pCdFail=0,pLwBusy=false,pLwFail=false;
PCFG.levMax={};PCFG.maxLev=50;
function L(i,e){return lang==="en"?e:i}
function f2(n){return Number(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
function isPerp(a){return /perp/i.test(String(a&&a.program||""))}
function notPerp(a){return !isPerp(a)}
function pmu(v){return(v>0?"+":v<0?"-":"")+f2(Math.abs(v))+" USDT"}
function pc(v){return v>0?"pup":v<0?"pdn":""}
/* --- dual login: satu akun, dua produk --- */
function modeLinks(){return'<a href="#" data-pm="cfd" aria-pressed="'+(PM==="cfd")+'">CFD</a><a href="#" data-pm="perp" aria-pressed="'+(PM==="perp")+'">Perps</a><a href="#" data-pm="fut" aria-pressed="'+(PM==="fut")+'">Futures</a>'}
function modeSw(){return'<div class="modesw" role="group" aria-label="Produk">'+modeLinks()+'</div>'}
function paintMode(){var e=$("lgMode");if(!e)return;e.style.display=user?"none":"";e.innerHTML=modeLinks()}
function setMode(m){if(m===PM)return;PM=m;try{localStorage.setItem("vzMode",m)}catch(e){}var h=document.documentElement;if(m==="perp"||m==="fut")h.setAttribute("data-mode",m);else h.removeAttribute("data-mode");selAcc=null;selP=null;selV=null;paintMode();if(user)dash()}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("[data-pm]");if(!a)return;e.preventDefault();setMode(a.getAttribute("data-pm"))});
/* --- penyimpanan akun uji (browser ini) --- */
function pKey(){return"vzPerp:"+((user&&(user.uid||user.email))||"x")}
function pLoadAll(){var k=pKey();if(pKeyLoaded===k)return;pKeyLoaded=k;pBootSt="idle";pFsState="idle";pPushed={};PEN=[];PENst="idle";try{PERPS=JSON.parse(localStorage.getItem(k)||"[]")}catch(e){PERPS=[]}if(!Array.isArray(PERPS))PERPS=[];if(selP!==null&&!PERPS[selP])selP=null}
function pSaveLocal(){try{localStorage.setItem(pKey(),JSON.stringify(PERPS))}catch(e){}}
function pSave(){pSavedAt=Date.now();pSaveLocal();pPush(false)}
/* --- sinkron ke Firebase (Firestore koleksi "perps", satu dokumen per akun: uid_id) --- */
var pFsState="idle",pPushed={},pPushT=0,pBootSt="idle",pClaiming=false;
function pFsOn(){return !!(CFG&&fs&&user&&user.uid)}
function pPush(now){
  if(!pFsOn()||pFsState!=="ok")return;
  var n=Date.now();if(!now&&n-pPushT<8000)return;pPushT=n;var ps=[];
  PERPS.forEach(function(a){var t=a._t;delete a._t;var b=JSON.stringify(a);if(pPushed[a.id]===b){if(t)a._t=t;return}a._t=n;ps.push([a.id,b,JSON.stringify(a)])});
  ps.forEach(function(p){pPushed[p[0]]=p[1];fs.collection("perps").doc(user.uid+"_"+p[0]).set({uid:user.uid,email:String(user.email||""),id:p[0],d:p[2],at:firebase.firestore.FieldValue.serverTimestamp()},{merge:true}).catch(function(){delete pPushed[p[0]]})})}
function pRemoteLoad(cb){
  if(!pFsOn()){pFsState="ok";cb();return}
  if(pFsState==="loading")return;pFsState="loading";
  fs.collection("perps").where("uid","==",user.uid).get().then(function(q){
    q.forEach(function(doc){var d=doc.data(),a;try{a=JSON.parse(d.d)}catch(e){return}if(!a||!a.id)return;
      var t=a._t;delete a._t;pPushed[a.id]=JSON.stringify(a);if(t)a._t=t;
      var i=-1;PERPS.forEach(function(x,k){if(x.id===a.id)i=k});
      if(i<0){PERPS.push(a);i=PERPS.length-1}else if((a._t||0)>(PERPS[i]._t||0))PERPS[i]=a;
      /* perintah admin (field di luar "d", hanya admin yang bisa menulis): funded dan reset breach */
      var z=PERPS[i];z.funded=!!d.funded||!!z.isFunded;
      if(d.resetNonce>(z._rn||0)){z._rn=d.resetNonce;if(z.status==="breached"){z.status="active";z.reason=null;z.day={date:new Date().toISOString().slice(0,10),startBal:z.balance}}}});
    pFsState="ok";pHeal();pSaveLocal();cb()}).catch(function(){pFsState="err";cb()})}
document.addEventListener("visibilitychange",function(){if(document.hidden)pPush(true)});window.addEventListener("pagehide",function(){pPush(true)});
function pNew(size,id){var a=PE.newAccount({id:id||("PP-"+Math.floor(10000+Math.random()*90000)),size:size,rules:PRULES});a.program=PPROG;PERPS.push(a);pSave();selP=PERPS.length-1}
/* --- challenge lolos -> akun funded baru otomatis (ukuran sama, ID turunan: PP-123 -> PF-123 supaya tidak dobel lintas perangkat) --- */
function pFid(a){return "PF-"+String(a.id).replace(/^[A-Za-z]+-/,"")}
function pFund(a){
  var id=pFid(a);a.passedTo=id;
  if(PERPS.some(function(x){return x.id===id}))return;
  var f=PE.newAccount({id:id,size:a.size,rules:PRULES});
  f.program=PPROG;f.funded=true;f.isFunded=true;f.fromId=a.id;f.fundedDate=new Date().toISOString().slice(0,10);f.certId="VZ-"+id;
  PERPS.push(f)}
function pHeal(){PERPS.slice().forEach(function(a){if(a.status==="passed"&&!a.isFunded&&!a.vt)pFund(a)});vtHeal()}
function pCheckPass(a){
  if(a.status!=="active"||a.isFunded)return false;
  if(Object.keys(a.positions).length||a.orders.length)return false;   /* profit harus sudah realized dan posisi tertutup */
  if(a.balance<a.size*(1+PTARGET/100)-1e-9)return false;
  a.status="passed";a.reason="target";pFund(a);return true}
/* --- harga Bybit (WebSocket publik, topik tickers: bid1/ask1, mark, funding) --- */
function pConnect(){
  if(pWs||!window.WebSocket)return;
  var w,pg;try{w=new WebSocket(PWS)}catch(e){return}pWs=w;
  var drop=function(){clearInterval(pg);if(pWs!==w)return;pWs=null;pSubs={};setTimeout(pConnect,pBo);pBo=Math.min(pBo*2,15000)};
  w.onopen=function(){pBo=1000;pSubs={};pSync();pg=setInterval(function(){try{w.send('{"op":"ping"}')}catch(e){}},20000)};
  w.onmessage=function(m){var d;try{d=JSON.parse(m.data)}catch(e){return}
    if(!d.data||String(d.topic||"").indexOf("tickers.")!==0)return;
    var x=d.data,s=x.symbol,o=TK[s]||(TK[s]={});for(var k in x)o[k]=x[k];
    var bid=+o.bid1Price,ask=+o.ask1Price;if(bid>0&&ask>0)BK[s]={bid:bid,ask:ask};
    pStep()};
  w.onclose=drop;w.onerror=drop}
function pReady(a){return Object.keys(a.positions).every(function(s){return PE.validBook(BK[s],PCFG)})}
function pStep(){
  var n=Date.now();pLastMsg=n;if(n-pLastStep<250)return;pLastStep=n;var ch=false;
  PERPS.forEach(function(a){if(a.status!=="active"||a.vt)return;
    var slot=Math.floor(n/28800000);if(a.fSlot===undefined)a.fSlot=slot;
    if(slot>a.fSlot){var ok=true;Object.keys(a.positions).forEach(function(s){var t=TK[s];if(t&&isFinite(+t.fundingRate)&&+t.markPrice>0)PE.applyFunding(a,s,+t.fundingRate,+t.markPrice,n);else ok=false});if(ok){a.fSlot=slot;ch=true}}
    var ev=PE.onTick(a,BK,PCFG,n);if(ev.length){ch=true;pEvents(a,ev)}
    if(pCheckPass(a)){ch=true;pNote(L("Selamat! Challenge lolos. Akun funded "+a.passedTo+" dibuat otomatis.","Congrats! Challenge passed. Funded account "+a.passedTo+" was created automatically."),false);if(PM==="perp"&&(selP===null||PERPS[selP]===a))setTimeout(dash,0)}});
  if(ch||n-pSavedAt>5000)pSave();
  pLive()}
var PERR={insufficient_margin:["Margin tidak cukup.","Insufficient margin."],no_price:["Harga belum tersedia.","No price yet."],bad_order:["Order tidak valid.","Invalid order."],bad_leverage:["Leverage tidak valid.","Invalid leverage."],position_open:["Tutup posisi dulu untuk ganti leverage.","Close the position to change leverage."],reduce_only_no_position:["Reduce-only butuh posisi berlawanan.","Reduce-only needs an opposite position."],account_breached:["Akun sudah breached.","Account is breached."],account_passed:["Challenge sudah lolos. Trading di akun funded.","Challenge already passed. Trade on the funded account."],no_position:["Tidak ada posisi.","No position."]};
function perr(c){var x=PERR[c];return x?L(x[0],x[1]):String(c)}
function pNote(s,bad){if(TRV&&TRV.style.display==="flex")trNote(s,bad);var e=$("pMsg");if(!e)return;e.textContent=s;e.className="lg-msg"+(bad?" pdn":"");clearTimeout(pNoteT);pNoteT=setTimeout(function(){var x=$("pMsg");if(x)x.textContent=""},8000)}
function pEvents(a,ev){var m=[];ev.forEach(function(e){
  if(e.type==="stop_loss")pLog(a,{symbol:e.symbol,status:"sl",type:"stop",note:"Stop loss"});
  else if(e.type==="take_profit")pLog(a,{symbol:e.symbol,status:"tp",type:"take profit",note:"Take profit"});
  else if(e.type==="open")pLog(a,{symbol:e.symbol,side:e.side==="long"?"buy":"sell",type:"limit",qty:e.qty,price:e.price,status:"open"});
  else if(e.type==="order_cancelled")pLog(a,{symbol:"-",status:"cancelled",type:"limit",note:String(e.reason)});
  else if(e.type==="breach")pLog(a,{symbol:"-",status:"liq",type:e.reason,note:String(e.reason)});
  if(e.type==="breach")m.push(L("Akun breached: ","Account breached: ")+({liquidation:L("likuidasi","liquidation"),daily:"daily drawdown",max:"max drawdown"}[e.reason]||e.reason));
  else if(e.type==="stop_loss")m.push("Stop loss "+e.symbol);
  else if(e.type==="take_profit")m.push("Take profit "+e.symbol);
  else if(e.type==="open")m.push(L("Limit terisi ","Limit filled ")+e.symbol);
  else if(e.type==="order_cancelled")m.push(L("Order dibatalkan: ","Order cancelled: ")+e.reason)});
  if(m.length)pNote(a.id+": "+m.join(" | "),1)}
function breachMsg(a){if(a.status==="passed")return L("Challenge lolos! Akun funded "+a.passedTo+" dibuat otomatis.","Challenge passed! Funded account "+a.passedTo+" was created automatically.");return a.reason==="liquidation"?L("Akun dilikuidasi.","Account was liquidated."):a.reason==="daily"?t("brD"):t("brM")}
/* --- tampilan --- */
/* --- akun Perps yang dibeli: setelah bayar, akun dibuat otomatis dan disimpan di Firebase --- */
var PEN=[],PENst="idle",PENmsg="",PENsig="";
function pLoadEnt(force){
  if(PENst==="loading"||(PENst==="ok"&&!force)||!user)return;PENst="loading";
  apiPost({action:"perp"},function(d){
    PEN=Array.isArray(d.entitlements)?d.entitlements:[];PENst="ok";
    var sg=JSON.stringify(PEN)+PERPS.length;if(sg!==PENsig){PENsig=sg;if(PM==="perp"&&selP===null)dash()}
    if(pFsState==="ok")pAutoClaim()},
    function(){PENst="err";if(PM==="perp"&&selP===null)dash()})}
function pAutoClaim(){
  var un=PEN.filter(function(e){return e.status==="unused"});if(!un.length||pClaiming)return;
  pClaiming=true;
  pClaimOne(un[0].orderId,function(){pClaiming=false;pLoadEnt(true)},function(){pClaiming=false})}
function pClaimOne(oid,ok,fail){
  PENmsg="";
  apiPost({action:"perp_claim",orderId:oid},function(d){
    if(!(d&&d.ok&&d.accountId)){fail();return}
    var ex=PERPS.filter(function(x){return x.id===d.accountId})[0];
    if(!ex){
      if(d.already){PENmsg=L("Akun ini sudah diaktifkan tetapi datanya tidak ditemukan. Hubungi support.","This account was activated but its data was not found. Contact support.");fail();return}
      pNew(d.size,d.accountId);pPush(true)}
    ok()},fail)}
function pClaim(oid){
  pClaimOne(oid,function(){pLoadEnt(true);dash()},function(){if(!PENmsg)PENmsg=L("Gagal mengaktifkan akun. Coba lagi.","Could not activate the account. Try again.");dash()})}
function pBoot(){
  if(!user||pBootSt!=="idle")return;pBootSt="run";
  pRemoteLoad(function(){pLoadEnt(true);if(PM==="perp"&&selP===null)dash()});
  if(!pBootT)pBootT=setInterval(function(){if(!document.hidden&&PM==="perp"&&selP===null&&user&&pFsState!=="loading")pLoadEnt(true)},10000)}
var pBootT=0;
function perpHome(){
  pLoadAll();pConnect();pLoadInfo();pSync();pBoot();
  var a=selP!==null?PERPS[selP]:null;if(a)return perpDetail(a);
  var x=modeSw();
  var PL=PERPS.filter(function(c){return !c.vt}),nA=PL.filter(function(c){return c.status==="active"}).length,nI=PL.length-nA;
  if(PL.length){
    x+='<div class="lg-tabs" role="group" id="accTabs"><button type="button" data-at="active" aria-pressed="'+(accTab==="active")+'">'+t("tabActive")+' ('+nA+')</button><button type="button" data-at="inactive" aria-pressed="'+(accTab==="inactive")+'">'+t("tabInactive")+' ('+nI+')</button></div>';
    if(accTab==="inactive"?!nI:!nA)x+='<div class="lg-card"><p>'+t("accTabNone")+'</p></div>'}
  x+=PERPS.map(function(c,i){if(c.vt||(c.status!=="active")!==(accTab==="inactive"))return"";var br=c.status!=="active",pf=c.balance-c.size;return'<button type="button" class="acc" data-pa="open" data-i="'+i+'"><div><b>'+esc(c.program)+" "+kfmt(c.size)+'</b><small>ID '+esc(c.id)+(c.funded?' · Funded':'')+'</small></div><div class="acc-r">'+(c.status==="passed"?'<strong class="up">'+L("Lolos","Passed")+'</strong>':br?'<strong class="dn">Breached</strong>':'<strong class="'+(pf>0?"up":pf<0?"dn":"")+'">'+(pf<0?"-":pf>0?"+":"")+""+f2(Math.abs(pf))+" USDT"+'</strong>')+'<small>Balance '+f2(c.balance)+" USDT"+'</small></div><span class="acc-a">&#8250;</span></button>'}).join("");
  x+=pBuyCard();
  return x}
function pBuyCard(){
  var un=PEN.filter(function(e){return e.status==="unused"});
  var h='<div class="lg-card"><b>'+L("Akun Perps kamu","Your Perps accounts")+'</b>';
  if(PENst==="loading"||PENst==="idle")h+='<p class="acc-hint">'+L("Memuat...","Loading...")+'</p>';
  else if(PENst==="err")h+='<p class="acc-hint pdn">'+L("Gagal memuat pembelian.","Could not load purchases.")+'</p><button type="button" class="lg-btn ghost" data-pa="entreload">'+L("Coba lagi","Retry")+'</button>';
  else if(!un.length)h+='<p class="acc-hint">'+L("Akun yang kamu beli akan muncul di sini otomatis setelah pembayaran terkonfirmasi (biasanya kurang dari satu menit).","Accounts you buy appear here automatically once payment is confirmed (usually under a minute).")+'</p><a class="lg-btn ghost" href="/p/perpetuals.html">'+L("Beli akun Perps","Buy a Perps account")+'</a>';
  else h+='<p>'+L("Aturan: daily drawdown 4%, max drawdown 8%, target 10%.","Rules: 4% daily drawdown, 8% max drawdown, 10% target.")+'</p><div class="pchips">'+un.map(function(e){return'<button type="button" class="pchip" data-pa="claim" data-oid="'+esc(e.orderId)+'">'+L("Aktifkan ","Activate ")+kfmt(e.size)+'</button>'}).join("")+'</div>';
  if(PENmsg)h+='<div class="lg-msg pdn">'+esc(PENmsg)+'</div>';
  return h+'</div>'}
function ticket(a){
  var mx=pLevMax(pSym),lev=Math.min(a.lev[pSym]||PCFG.defaultLev,mx),q=QSTEP[pSym],mq=PMINQ[pSym]||q,lk=!!a.positions[pSym];
  var pr=function(k,v,l){return'<button type="button" data-pa="'+k+'" data-v="'+v+'" aria-pressed="false">'+l+'</button>'};
  return'<div class="lg-card pf" id="pTk"><div class="pside"><button type="button" class="pb pb-long" data-pa="side" data-v="buy">Long</button><button type="button" class="pb pb-short" data-pa="side" data-v="sell">Short</button></div>'
  +'<div class="lg-tabs">'+pr("type","market","Market")+pr("type","limit","Limit")+'</div>'
  +'<div class="plev"><div class="plevh"><span>Leverage'+(lk?' <small>('+L("terkunci, ada posisi","locked, position open")+')</small>':"")+'</span><b id="pLevV">'+lev+'x</b></div>'
  +'<input id="pLev" type="range" min="1" max="'+mx+'" step="1" value="'+lev+'"'+(lk?" disabled":"")+'/><div class="pchips">'+pLevChips(mx,lev,lk)+'</div></div>'
  +'<label>'+L("Jumlah","Size")+' ('+esc(pBase(pSym))+')<input id="pQty" type="number" inputmode="decimal" min="'+mq+'" step="'+q+'" placeholder="'+mq+'"/></label>'
  +'<label id="pPxL">'+L("Harga limit","Limit price")+'<input id="pPx" type="number" inputmode="decimal" step="any"/></label>'
  +'<div class="r2"><label>Stop loss<input id="pSl" type="number" inputmode="decimal" step="any"/></label><label>Take profit<input id="pTp" type="number" inputmode="decimal" step="any"/></label></div>'
  +'<label class="ck"><input id="pRo" type="checkbox"/>Reduce-only</label><p class="acc-hint" id="pSum"></p><div class="lg-msg" id="pMsg" role="alert"></div>'
  +'<button type="button" class="lg-btn" id="pGo" data-pa="go"></button></div>'}
function pHint(){return L("Tap garis ENTRY di chart untuk pasang SL/TP, lalu geser garisnya.","Tap the ENTRY line on the chart to add SL/TP, then drag the lines.")}
function pHintUI(){
  var h=$("pChH"),c=$("pCh");if(!h)return;
  var a=selP!==null?PERPS[selP]:null,p=a&&a.status==="active"?a.positions[pSym]:null;
  if(c)c.classList.toggle("pedit",!!(pEdit&&p));
  if(pArm){h.textContent=L("Tap harga di chart untuk set ","Tap a price on the chart to set ")+pArm.toUpperCase();return}
  var x=p&&pEdit?L("Mode geser aktif: tarik garis SL/TP.","Drag mode on: pull the SL/TP lines."):pHint();
  if(p){x+=(p.sl?' <button type="button" class="pchip pa-sl" data-pa="rmstop" data-v="sl">SL '+p.sl+' &#215;</button>':"")+(p.tp?' <button type="button" class="pchip pa-tp" data-pa="rmstop" data-v="tp">TP '+p.tp+' &#215;</button>':"");
    if(pEdit)x+=' <button type="button" class="pchip" data-pa="editdone">'+L("Selesai","Done")+'</button>'}
  h.innerHTML=x}
function pLevChips(mx,lev,lk){
  var v=[1,5,10,25,50].filter(function(x){return x<mx});
  return v.map(function(x){return'<button type="button" class="pchip" data-pa="lev" data-v="'+x+'" aria-pressed="'+(x===lev)+'"'+(lk?" disabled":"")+'>'+x+'x</button>'}).join("")
  +'<button type="button" class="pchip pmax" data-pa="lev" data-v="'+mx+'" aria-pressed="'+(mx===lev)+'"'+(lk?" disabled":"")+'>MAX '+mx+'x</button>'}

/* ===== Riwayat order + tab ala futures ===== */
var pTab="pos",pTrN=20,pOrN=20;
function pLog(a,o){if(!a.log)a.log=[];o.at=Date.now();a.log.push(o);if(a.log.length>300)a.log.shift()}
function pHM(ms){var d=new Date(ms);return d.toISOString().slice(5,10)+" "+d.toISOString().slice(11,19)}
function pTrHtml(a){
  var tr=PE.ledger(a).trades;if(!tr.length)return'<p>'+L("Belum ada trade tertutup.","No closed trades yet.")+'</p>';
  var why={sl:"SL",tp:"TP",liq:L("Likuidasi","Liquidated")};
  return tr.slice(0,pTrN).map(function(r,j){var d=PDEC[r.s]||2,nt=r.v*r.o,roe=nt>0?r.p/(r.l>0?nt/r.l:nt)*100:0,lg=r.d==="BUY";
    return'<div class="pos"><div><b>'+esc(pBase(r.s))+'</b><span class="tg-b '+(lg?"pup":"pdn")+'">'+(lg?"LONG":"SHORT")+(r.l?" "+r.l+"x":"")+'</span>'+(r.w?'<span class="tg-b">'+why[r.w]+'</span>':"")+'<small>'+r.v+" | "+L("Masuk ","Entry ")+(+r.o).toFixed(d)+" > "+L("Keluar ","Exit ")+(+r.c).toFixed(d)+'</small><small>'+pHM(new Date(String(r.t)+"Z").getTime())+' UTC</small></div><div class="pr"><strong class="'+pc(r.p)+'">'+pmu(r.p)+'</strong><small class="'+pc(r.p)+'">'+(roe>0?"+":"")+roe.toFixed(2)+'%'+(r.l?" ROE":"")+'</small><button type="button" class="pchip pcard" data-pa="tcard" data-j="'+j+'">PnL Card</button></div></div>'}).join("")
  +(tr.length>pTrN?'<button type="button" class="more" data-pa="trmore">'+L("Tampilkan lagi","Show more")+'</button>':"")}
function pOrHtml(a){
  var lg=(a.log||[]).slice().reverse();if(!lg.length)return'<p>'+L("Belum ada riwayat order.","No order history yet.")+'</p>';
  var st={filled:L("Terisi","Filled"),placed:L("Dipasang","Placed"),cancelled:L("Dibatalkan","Cancelled"),sl:"Stop loss",tp:"Take profit",liq:L("Likuidasi","Liquidated"),open:L("Limit terisi","Limit filled"),stops:"SL/TP"};
  return lg.slice(0,pOrN).map(function(o){var d=PDEC[o.symbol]||2,b=o.side==="buy";
    return'<div class="pos"><div><b>'+esc(pBase(o.symbol||"-"))+'</b>'+(o.side?'<span class="tg-b '+(b?"pup":"pdn")+'">'+(b?"BUY":"SELL")+'</span>':"")+'<span class="tg-b">'+(o.type?esc(o.type):"-")+'</span><small>'+(o.qty?o.qty+" @ "+(o.price?(+o.price).toFixed(d):L("market","market")):(o.note||""))+'</small><small>'+pHM(o.at)+' UTC</small></div><div class="pr"><strong>'+(st[o.status]||esc(o.status||"-"))+'</strong></div></div>'}).join("")
  +(lg.length>pOrN?'<button type="button" class="more" data-pa="ormore">'+L("Tampilkan lagi","Show more")+'</button>':"")}
function pTabsUI(a){
  var tabs=[["pos",L("Posisi","Positions"),Object.keys(a.positions).length],["ord",L("Order","Orders"),a.orders.length],["oh",L("Riwayat order","Order history"),0],["th",L("Riwayat trade","Trade history"),0]];
  var e=$("pTabs");if(e)e.innerHTML=tabs.map(function(t){return'<button type="button" class="pchip" data-pa="ptab" data-v="'+t[0]+'" aria-pressed="'+(t[0]===pTab)+'">'+t[1]+(t[2]?" ("+t[2]+")":"")+'</button>'}).join("");
  ["pos","ord","oh","th"].forEach(function(k){var p=$("pPane_"+k);if(p)p.hidden=(k!==pTab)})}
function perpDetail(a){
  pArm=null;pEdit=false;pPickOpen=false;var on=a.status==="active";
  var x='<div id="pTerm"><button type="button" class="acc-back" data-pa="back">&#8249; '+L("Semua akun","All accounts")+'</button><div class="trbtnwrap"><button type="button" class="lg-btn" data-pa="trade">Trade Now</button></div><div class="lg-card" id="pHead"></div><div class="lg-card" id="pEq"></div><div class="pt"><div>'
  +'<div class="lg-card trhide"><div class="psel"><button type="button" class="psym" data-pa="pickt" id="pSymB">'+esc(pBase(pSym))+'<small>/USDT</small> &#9662;</button><div class="pchips" id="pQuick">'+pQuickHtml()+'</div></div>'
  +'<div class="ppick" id="pPick" hidden><input id="pSrch" type="search" autocomplete="off" placeholder="'+L("Cari koin, mis. PEPE, SOL, XAU","Search coin, e.g. PEPE, SOL, XAU")+'"/><div class="pchips">'+PCATS.map(function(c){return'<button type="button" class="pchip" data-pa="cat" data-v="'+c[0]+'" aria-pressed="'+(c[0]===pCatSel)+'">'+L(c[1],c[2])+'</button>'}).join("")+'</div><div class="plist" id="pList"></div></div>'
  +'<div class="pq" id="pQ"></div>'
  +'<div class="pchips ptb">'+PTFS.map(function(z){return'<button type="button" class="pchip" data-pa="tf" data-tf="'+z[0]+'" aria-pressed="'+(z[0]===pTf)+'">'+z[1]+'</button>'}).join("")
  +(on?'<span class="psp"></span><button type="button" class="pchip pa-sl" data-pa="arm" data-v="sl" aria-pressed="false">+SL</button><button type="button" class="pchip pa-tp" data-pa="arm" data-v="tp" aria-pressed="false">+TP</button>':"")+'</div>'
  +'<div id="pCh"></div><p class="acc-hint pchh" id="pChH">'+pHint()+'</p></div>'
  +'<div class="lg-card"><div class="pchips ptabs" id="pTabs"></div><div id="pPane_pos"><div id="pPos"></div></div><div id="pPane_ord" hidden><div id="pOrd"></div></div><div id="pPane_oh" hidden><div id="pOH"></div></div><div id="pPane_th" hidden><div id="pTH"></div></div></div>'
  +'</div><div>'+(on?ticket(a):"")+'<div class="lg-card" id="pRisk"></div></div></div><div id="pHist"></div>'
  +'</div>';
  return x}
function pForm(){
  document.querySelectorAll("[data-pa=side]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-v")===pSide)});
  document.querySelectorAll("[data-pa=type]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-v")===pType)});
  var l=$("pPxL");if(l)l.style.display=pType==="limit"?"":"none";
  var g=$("pGo");if(g){g.className="lg-btn "+(pSide==="buy"?"pb-long":"pb-short");g.textContent=(pSide==="buy"?"Long ":"Short ")+pSym.replace("USDT","")+(pType==="limit"?" Limit":" Market")}
  pSum()}
function pSum(){
  var e=$("pSum");if(!e)return;var q=parseFloat($("pQty").value),b=BK[pSym],lev=+$("pLev").value||10,px=pType==="limit"?parseFloat($("pPx").value):(b?(pSide==="buy"?b.ask:b.bid):0);
  if(!(q>0)||!(px>0)){e.textContent="";return}
  var nt=q*px;e.textContent=L("Nilai","Notional")+" "+f2(nt)+" USDT"+" | Margin "+f2(nt/lev)+" USDT"+" | Fee ~ "+f2(nt*PCFG.takerFee)+" USDT"}
function pLive(){
  var a=selP!==null?PERPS[selP]:null,hd=$("pHead");if(!a||!hd)return;pEqRender(a);
  var n=Date.now(),b=BK[pSym],tk=TK[pSym]||{},d=PDEC[pSym],rd=pReady(a),s=rd?PE.snapshot(a,BK):null,on=a.status==="active",eq=s?s.equity:a.balance,pf=eq-a.size,tg=a.size*PTARGET/100,live=n-pLastMsg<5000;
  hd.innerHTML='<div class="dtop"><div><b>'+esc(a.program)+" "+kfmt(a.size)+'</b><p>ID '+esc(a.id)+'</p></div><span class="tag'+(on||a.status==="passed"?"":" kyc-rejected")+'">'+(on?(a.isFunded?"Funded":(pf>=tg?L("Target tercapai","Target hit"):L("Aktif","Active"))):(a.status==="passed"?L("Lolos","Passed"):"Breached"))+'</span></div>'
  +'<div class="pbig">'+f2(eq)+" USDT"+'</div><p class="'+pc(pf)+'">'+(pf<0?"-":"+")+""+f2(Math.abs(pf))+" USDT"+" ("+(pf/a.size*100).toFixed(2)+'%)</p>'
  +'<div class="grid"><div><small>Balance</small><strong>'+f2(a.balance)+" USDT"+'</strong></div><div><small>Unrealized</small><strong class="'+(s?pc(s.unrealized):"")+'">'+(s?pmu(s.unrealized):"-")+'</strong></div><div><small>'+L("Margin terpakai","Used margin")+'</small><strong>'+f2(s?s.usedMargin:PE.usedMargin(a))+" USDT"+'</strong></div><div><small>'+L("Margin bebas","Free margin")+'</small><strong>'+(s?""+f2(s.freeMargin)+" USDT":"-")+'</strong></div></div>';
  var fr=tk.fundingRate,nf=+tk.nextFundingTime-n,mk=+tk.markPrice,ch=tk.price24hPcnt;
  $("pQ").innerHTML=b?'<span>Bid <b>'+b.bid.toFixed(d)+'</b></span><span>Ask <b>'+b.ask.toFixed(d)+'</b></span><span>Mark <b>'+(mk>0?mk.toFixed(d):"-")+'</b></span><span>24h <b class="'+pc(+ch)+'">'+(ch!==undefined&&isFinite(+ch)?(ch*100).toFixed(2)+"%":"-")+'</b></span><span>Max lev <b>'+pLevMax(pSym)+'x</b></span><span>Funding <b>'+(fr!==undefined&&isFinite(+fr)?(fr*100).toFixed(4)+"%":"-")+(nf>0&&nf<864e5?" / "+new Date(nf).toISOString().substr(11,8):"")+'</b></span>'+(live?"":'<span class="pdn">'+L("Feed terputus","Feed disconnected")+'</span>'):L("Menghubungkan ke Bybit...","Connecting to Bybit...");
  $("pRisk").innerHTML='<b>Risk</b>'+(s?row("Daily drawdown ("+a.rules.dailyDd+"%)",""+f2(s.dailyLoss)+" / "+f2(s.dailyLimit)+" USDT",s.dailyLoss/s.dailyLimit*100)+row("Max drawdown ("+a.rules.maxDd+"%)",""+f2(s.maxLoss)+" / "+f2(s.maxLimit)+" USDT",s.maxLoss/s.maxLimit*100)+(a.isFunded?"":row("Target ("+PTARGET+"%)",""+f2(Math.max(pf,0))+" / "+f2(tg)+" USDT",pf/tg*100))+'<p class="acc-hint">Fee '+f2(a.fees)+" USDT"+' | Funding '+pmu(a.funding)+'</p>':'<p>'+L("Menunggu harga...","Waiting for prices...")+'</p>')+(on?"":'<p class="'+(a.status==="passed"?"pup":"pdn")+'">'+breachMsg(a)+'</p>');
  var sig=JSON.stringify([a.positions,a.orders,on]);
  if(sig!==pSig){pSig=sig;
    $("pPos").innerHTML=Object.keys(a.positions).map(function(k){var p=a.positions[k],dc=PDEC[k]||2;return'<div class="pos"><div><b>'+k.replace("USDT","")+'</b><span class="tg-b '+(p.side==="long"?"pup":"pdn")+'">'+p.side.toUpperCase()+" "+p.lev+'x</span><small>'+p.qty+" @ "+p.entry.toFixed(dc)+" | Margin "+f2(p.qty*p.entry/p.lev)+" USDT"+'</small><small>SL '+(p.sl||"-")+" | TP "+(p.tp||"-")+'</small></div><div class="pr"><strong data-pu="'+k+'"></strong><div>'+(on?'<button type="button" class="pchip" data-pa="stops" data-s="'+k+'">SL/TP</button> <button type="button" class="pchip" data-pa="close" data-s="'+k+'">'+L("Tutup","Close")+'</button> ':"")+'<button type="button" class="pchip pcard" data-pa="card" data-s="'+k+'">PnL Card</button></div></div></div>'}).join("")||'<p>'+L("Belum ada posisi.","No open positions.")+'</p>';
    pTabsUI(a);pHintUI();
    $("pOrd").innerHTML=a.orders.map(function(o){return'<div class="pos"><div><b>'+o.symbol.replace("USDT","")+'</b><span class="tg-b">Limit '+o.side.toUpperCase()+(o.reduceOnly?" RO":"")+'</span><small>'+o.qty+" @ "+o.price+'</small></div><div class="pr"><button type="button" class="pchip" data-pa="cancel" data-id="'+o.id+'">'+L("Batal","Cancel")+'</button></div></div>'}).join("")||'<p>'+L("Tidak ada order terbuka.","No open orders.")+'</p>'}
  document.querySelectorAll("[data-pu]").forEach(function(e){var k=e.getAttribute("data-pu"),z=s&&s.positions.filter(function(p){return p.symbol===k})[0];e.textContent=z?pmu(z.upnl):"-";e.className=z?pc(z.upnl):""});
  var hk=a.trades.length+":"+a.status+":"+(a.log||[]).length+":"+pTrN+":"+pOrN;
  if(hk!==pHk){pHk=hk;var lg=PE.ledger(a);$("pHist").innerHTML=statsCard({stats:lg.stats})+calCard({pnl:lg.pnl});
    var th=$("pTH");if(th)th.innerHTML=pTrHtml(a);var oh=$("pOH");if(oh)oh.innerHTML=pOrHtml(a)}
  if(b&&pCD.length&&pDrawnKey===pCDKey){var m=+tk.lastPrice>0?+tk.lastPrice:(b.bid+b.ask)/2,per=(TFSEC[pTf]||900)*1e3,st=Math.floor(n/per)*per,l=pCD[pCD.length-1];
    if(l[0]===st){l[4]=m;if(m>l[2])l[2]=m;if(m<l[3])l[3]=m}else if(st>l[0]){l=[st,l[4],Math.max(l[4],m),Math.min(l[4],m),m];pCD.push(l);if(pCD.length>600)pCD.shift()}
    if(pSer&&l[0]===st){try{pSer.update({time:l[0]/1e3,open:l[1],high:l[2],low:l[3],close:l[4]})}catch(e){}}}
  if(!pCD.length&&!pCDKey&&n-pCdFail>5000)pLoadCD();
  pSync();pLevLock();
  if(n-pDrawAt>700){pDrawAt=n;pDraw()}}
/* ===== Chart: TradingView Lightweight Charts (dimuat dari CDN, ada cadangan) ===== */
var LWU=["https://cdnjs.cloudflare.com/ajax/libs/lightweight-charts/4.1.3/lightweight-charts.standalone.production.js","https://cdn.jsdelivr.net/npm/lightweight-charts@4.2.0/dist/lightweight-charts.standalone.production.js"];
function pLoadLW(){
  if(window.LightweightCharts||pLwBusy)return;pLwBusy=true;pLwFail=false;var i=0;
  (function go(){
    if(window.LightweightCharts){pLwBusy=false;pDraw();return}
    if(i>=LWU.length){pLwBusy=false;pLwFail=true;pDraw();return}
    var s=document.createElement("script");s.async=true;s.src=LWU[i++];
    s.onload=function(){go()};s.onerror=function(){s.remove();go()};document.head.appendChild(s)})()}
function pLoadCD(){
  var key=pSym+pTf;if(pCDKey===key&&pCD.length)return;pCDKey=key;pCD=[];
  fetch(PREST+"/v5/market/kline?category=linear&symbol="+pSym+"&interval="+pTf+"&limit=300").then(function(r){return r.json()}).then(function(d){
    if(pCDKey!==key)return;var l=(d&&d.result&&d.result.list)||[];
    pCD=l.map(function(k){return[+k[0],+k[1],+k[2],+k[3],+k[4]]}).reverse();if(!pCD.length){pCDKey="";pCdFail=Date.now()}pDraw()
  }).catch(function(){pCD=[];pCDKey="";pCdFail=Date.now();pDraw()})}
function pRound(v){var t=PTICK[pSym]||Math.pow(10,-(PDEC[pSym]||2));return +(Math.round(v/t)*t).toFixed(PDEC[pSym]||2)}
function pPnlAt(p,price){return(p.side==="long"?price-p.entry:p.entry-price)*p.qty}
function pPosPnl(p){var b=BK[p.symbol];if(!PE.validBook(b,PCFG))return null;return pPnlAt(p,p.side==="long"?b.bid:b.ask)}
function pChInit(el){
  if(pChart&&pChEl===el)return true;
  if(pChart){try{pChart.remove()}catch(e){}}
  pChart=pSer=null;pLines=[];pLsig="";pDrawnKey=null;pDrag=null;el.innerHTML="";el.removeAttribute("data-m");
  var C=window.LightweightCharts,cs=getComputedStyle(document.documentElement),cv=function(k,f){return cs.getPropertyValue(k).trim()||f},
  up=cv("--up","#22C55E"),dn=cv("--dn","#F04452"),mu=cv("--muted","#888"),ln=cv("--line","#333"),dec=PDEC[pSym]||2;
  try{
    pChart=C.createChart(el,{width:el.clientWidth||320,height:el.clientHeight||300,
      layout:{background:{type:"solid",color:"transparent"},textColor:mu,fontSize:11},
      grid:{vertLines:{color:ln},horzLines:{color:ln}},
      rightPriceScale:{borderColor:ln,scaleMargins:{top:.1,bottom:.1}},
      timeScale:{borderColor:ln,timeVisible:true,secondsVisible:false,rightOffset:6},
      crosshair:{mode:0}});
    pSer=pChart.addCandlestickSeries({upColor:up,downColor:dn,borderUpColor:up,borderDownColor:dn,wickUpColor:up,wickDownColor:dn,
      priceFormat:{type:"price",precision:dec,minMove:PTICK[pSym]||Math.pow(10,-dec)}})
  }catch(e){pChart=pSer=null;pLwFail=true;return false}
  pChEl=el;
  if(window.ResizeObserver){if(pRO)pRO.disconnect();pRO=new ResizeObserver(function(){if(pChart&&pChEl&&pChEl.clientWidth)pChart.resize(pChEl.clientWidth,pChEl.clientHeight)});pRO.observe(el)}
  pChart.subscribeClick(pChartClick);pBindDrag(el);return true}
function pDraw(){
  var el=$("pCh");if(!el)return;
  if(!window.LightweightCharts){
    var m=pLwFail?"f":"l";if(el.getAttribute("data-m")!==m){el.setAttribute("data-m",m);
      el.innerHTML=pLwFail?'<p class="acc-hint">'+L("Chart gagal dimuat.","Chart failed to load.")+' <button type="button" class="pchip" data-pa="lwretry">'+L("Coba lagi","Retry")+'</button></p>':'<p class="acc-hint">'+L("Memuat chart...","Loading chart...")+'</p>'}
    if(!pLwFail)pLoadLW();return}
  if(!pChInit(el))return;
  if(pCD.length&&pDrawnKey!==pCDKey){
    pSer.setData(pCD.map(function(k){return{time:k[0]/1e3,open:k[1],high:k[2],low:k[3],close:k[4]}}));pDrawnKey=pCDKey;pChart.timeScale().fitContent()}
  pSyncLines()}
/* --- garis Entry / SL / TP / limit di chart --- */
function pSyncLines(){
  if(!pSer||pDrag||selP===null)return;var a=PERPS[selP];if(!a)return;
  var p=a.positions[pSym],b=BK[pSym],it=[],cs=getComputedStyle(document.documentElement),
  dn=cs.getPropertyValue("--dn").trim()||"#F04452",up=cs.getPropertyValue("--up").trim()||"#22C55E",ac=cs.getPropertyValue("--accent").trim()||"#F5B84B";
  if(p){
    var px=b?(p.side==="long"?b.bid:b.ask):0,u=px?pPnlAt(p,px):null;
    it.push({k:"entry",price:p.entry,color:ac,style:0,title:p.side.toUpperCase()+" "+p.lev+"x | "+(u===null?"-":pmu(u))+((p.sl||p.tp)?"":" | tap = SL/TP")});
    if(p.sl>0)it.push({k:"sl",price:p.sl,color:dn,style:2,title:pStopLbl("sl",p,p.sl)});
    if(p.tp>0)it.push({k:"tp",price:p.tp,color:up,style:2,title:pStopLbl("tp",p,p.tp)})
  }else if($("pTk")){
    var sl=parseFloat(($("pSl")||{}).value),tp=parseFloat(($("pTp")||{}).value),lp=parseFloat(($("pPx")||{}).value);
    if(pType==="limit"&&lp>0)it.push({k:"lim",price:lp,color:ac,style:1,title:"LIMIT "+(pSide==="buy"?"LONG":"SHORT")});
    if(sl>0)it.push({k:"sl",price:sl,color:dn,style:2,title:"SL"});
    if(tp>0)it.push({k:"tp",price:tp,color:up,style:2,title:"TP"})}
  a.orders.forEach(function(o){if(o.symbol===pSym)it.push({k:"ord"+o.id,price:o.price,color:"#4C8DFF",style:1,title:"LIMIT "+(o.side==="buy"?"LONG":"SHORT")})});
  var sig=JSON.stringify(it.map(function(i){return[i.k,i.price,i.color,i.style]}));
  if(sig!==pLsig){
    pLines.forEach(function(l){try{pSer.removePriceLine(l.h)}catch(e){}});
    pLines=it.map(function(i){return{k:i.k,price:i.price,t:i.title,h:pSer.createPriceLine({price:i.price,color:i.color,lineWidth:(i.k==="entry"||i.k==="sl"||i.k==="tp")?2:1,lineStyle:i.style,axisLabelVisible:true,title:i.title})}});pLsig=sig
  }else{
    it.forEach(function(i,j){var l=pLines[j];if(l&&l.t!==i.title){l.t=i.title;l.h.applyOptions({title:i.title})}})}}
/* set SL/TP: posisi terbuka -> langsung ke posisi; belum ada posisi -> isi kolom tiket */
function pApplyLevel(k,price){
  var a=selP!==null?PERPS[selP]:null;if(!a||a.status!=="active"||!(price>0))return false;
  price=pRound(price);var p=a.positions[pSym],b=BK[pSym],long,ref,bad;
  if(p){
    long=p.side==="long";ref=b?(long?b.bid:b.ask):0;bad=k==="sl"?(long?price>=ref:price<=ref):(long?price<=ref:price>=ref);
    if(ref&&bad){pNote(L("SL/TP di sisi yang salah.","SL/TP on the wrong side."),1);pLsig="";pSyncLines();return false}
    var o={};o[k]=price;PE.setStops(a,pSym,o);pLog(a,{symbol:pSym,status:"stops",type:k.toUpperCase(),note:k.toUpperCase()+" @ "+price});pSave();pSig="";pLsig="";pLive();pSyncLines();return true}
  var inp=$(k==="sl"?"pSl":"pTp");if(!inp){return false}
  long=pSide==="buy";ref=b?(long?b.ask:b.bid):0;bad=k==="sl"?(long?price>=ref:price<=ref):(long?price<=ref:price>=ref);
  if(ref&&bad){pNote(L("SL/TP di sisi yang salah.","SL/TP on the wrong side."),1);pLsig="";pSyncLines();return false}
  inp.value=price;pSum();pLsig="";pSyncLines();return true}
function pArmUI(){
  document.querySelectorAll("[data-pa=arm]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-v")===pArm)});
  var e=$("pCh");if(e)e.style.cursor=pArm?"crosshair":"";pHintUI()}
function pChartClick(pr){
  if(!pArm||!pr||!pr.point||!pSer)return;var v=pSer.coordinateToPrice(pr.point.y);
  if(v>0&&pApplyLevel(pArm,v)){pArm=null;pArmUI()}}
function pNearLine(el,cy,kinds,tol){
  var r=el.getBoundingClientRect(),y=cy-r.top,hit=null,bd=tol||14;
  pLines.forEach(function(l){if(!kinds[l.k])return;var c=pSer.priceToCoordinate(l.price);if(c!==null&&Math.abs(c-y)<bd){bd=Math.abs(c-y);hit=l}});
  return hit}
function pDragEnd(){
  if(!pDrag)return;var d=pDrag;pDrag=null;
  try{pChart.applyOptions({handleScroll:true,handleScale:true})}catch(e){}
  if(d.price>0)pApplyLevel(d.l.k,d.price);else{pLsig="";pSyncLines()}}
/* Tap garis ENTRY -> SL/TP otomatis muncul (garis putus-putus), lalu geser naik/turun seperti di app futures.
   Garis SL/TP yang sudah ada langsung bisa ditekan dan digeser. Lepas jari = tersimpan ke posisi. */
function pBindDrag(el){
  var KD={sl:1,tp:1},KE={entry:1},KA={sl:1,tp:1,entry:1};
  el.addEventListener("pointerdown",function(e){
    if(!pSer||pArm)return;var tol=e.pointerType==="touch"?22:12,hit=pNearLine(el,e.clientY,KD,tol);
    if(hit){pDrag={l:hit,price:0};pEditSet(true);pChart.applyOptions({handleScroll:false,handleScale:false});
      try{el.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault();return}
    pTapE=pNearLine(el,e.clientY,KE,tol)?{x:e.clientX,y:e.clientY,t:Date.now()}:null},true);
  el.addEventListener("pointermove",function(e){
    if(!pSer)return;
    if(pDrag){var v=pSer.coordinateToPrice(e.clientY-el.getBoundingClientRect().top);if(v>0){pDrag.price=pRound(v);pDrag.l.t=pDragTitle(pDrag.l.k,pDrag.price);pDrag.l.h.applyOptions({price:pDrag.price,title:pDrag.l.t})}e.preventDefault();return}
    if(pTapE&&(Math.abs(e.clientX-pTapE.x)>8||Math.abs(e.clientY-pTapE.y)>8))pTapE=null;
    el.style.cursor=pArm?"crosshair":(pNearLine(el,e.clientY,KA,12)?"pointer":"")},true);
  el.addEventListener("pointerup",function(){
    if(pDrag){pDragEnd();return}
    var t=pTapE;pTapE=null;if(t&&Date.now()-t.t<600)pStopsFromEntry()},true);
  el.addEventListener("pointercancel",function(){pTapE=null;pDragEnd()},true);
  el.addEventListener("touchmove",function(e){if(pDrag)e.preventDefault()},{passive:false})}
var pEdit=false,pEditT=null,pTapE=null;
function pEditSet(on){pEdit=!!on;clearTimeout(pEditT);if(pEdit)pEditT=setTimeout(function(){pEdit=false;pHintUI()},25000);pHintUI()}
function pStopLbl(k,p,price){
  var u=pPnlAt(p,price),mg=p.qty*p.entry/(p.lev||1),roe=mg>0?u/mg*100:0;
  return(k==="sl"?"SL ":"TP ")+pmu(u)+" ("+(roe>0?"+":"")+roe.toFixed(1)+"%)"}
function pDragTitle(k,price){
  var a=selP!==null?PERPS[selP]:null,p=a&&a.positions[pSym];
  return p?pStopLbl(k,p,price):(k==="sl"?"SL":"TP")}
/* default SL 1% dan TP 2% dari entry, selalu di sisi yang benar terhadap harga sekarang */
function pDefStop(p,k){
  var b=BK[p.symbol],long=p.side==="long",ref=b?(long?b.bid:b.ask):p.entry,e=p.entry,v;
  if(k==="sl")v=long?Math.min(e*.99,ref*.995):Math.max(e*1.01,ref*1.005);
  else v=long?Math.max(e*1.02,ref*1.005):Math.min(e*.98,ref*.995);
  return pRound(v)}
function pStopsFromEntry(){
  var a=selP!==null?PERPS[selP]:null,p=a&&a.positions[pSym];if(!p||a.status!=="active")return;
  var had=!!(p.sl&&p.tp);
  if(!p.sl)pApplyLevel("sl",pDefStop(p,"sl"));
  if(!p.tp)pApplyLevel("tp",pDefStop(p,"tp"));
  pEditSet(true);
  pNote(had?L("Geser garis SL/TP untuk mengubah.","Drag the SL/TP lines to change them."):L("SL/TP dipasang. Geser garisnya untuk atur.","SL/TP added. Drag the lines to adjust."))}
function pLevLock(){
  var a=selP!==null?PERPS[selP]:null,i=$("pLev");if(!a||!i)return;var lk=!!a.positions[pSym];
  if(i.disabled!==lk){i.disabled=lk;document.querySelectorAll("[data-pa=lev]").forEach(function(b){b.disabled=lk})}}
function pSetLev(a,v){
  var mx=pLevMax(pSym);v=Math.max(1,Math.min(mx,Math.round(v)||1));
  var r=PE.setLeverage(a,pSym,v,PCFG);
  if(!r.ok){pNote(perr(r.error),1);v=Math.min(a.lev[pSym]||PCFG.defaultLev,mx)}else pSave();
  var i=$("pLev");if(i)i.value=v;var l=$("pLevV");if(l)l.textContent=v+"x";
  document.querySelectorAll("[data-pa=lev]").forEach(function(b){b.setAttribute("aria-pressed",+b.getAttribute("data-v")===v)});
  pSum()}

/* ===== PnL Card (kartu hijau = profit, merah = loss) ===== */
var PCARDIMG={green:"data:image/webp;base64,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",red:"data:image/webp;base64,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"},pCardI={};
function pCardImg(k,cb){
  var i=pCardI[k];if(i&&i.complete&&i.naturalWidth){cb(i);return}
  i=new Image();pCardI[k]=i;i.onload=function(){cb(i)};i.onerror=function(){cb(null)};i.src=PCARDIMG[k]}
function pCardSize(n){n=Math.abs(n);return(n>=1e6?(n/1e6).toFixed(2).replace(/\.?0+$/,"")+"M":n>=1e3?(n/1e3).toFixed(1).replace(/\.0$/,"")+"K":n.toFixed(2))+" USDT"}
function pFit(g,txt,tpl,maxW,px,min){while(px>min){g.font=tpl.replace("{px}",px);if(g.measureText(txt).width<=maxW)break;px-=2}g.font=tpl.replace("{px}",px);return px}
function pDrawCard(cv,o,img){
  var W=1024,H=1536,g=cv.getContext("2d",{willReadFrequently:true}),win=o.pnl>=0,F='"Inter","Segoe UI",system-ui,-apple-system,Roboto,Arial,sans-serif',sc=img?img.naturalWidth/W:1,
  Lo={dy:348,by:378,bh:124,fs:112,r:[548,600,652]},
  pn=(o.pnl>=0?"+":"-")+""+f2(Math.abs(o.pnl))+" USDT",rt=(Math.abs(o.ret)<.005?"":o.ret>0?"+":"-")+Math.abs(o.ret).toFixed(2)+"%";
  cv.width=W;cv.height=H;
  if(img)g.drawImage(img,0,0,W,H);
  else{var bg=g.createLinearGradient(0,0,W,H);bg.addColorStop(0,win?"#06150A":"#120505");bg.addColorStop(1,win?"#2F7A14":"#5A0B0B");g.fillStyle=bg;g.fillRect(0,0,W,H);
    g.fillStyle="#fff";g.textBaseline="alphabetic";g.textAlign="left";g.font="800 60px "+F;g.fillText("VEKXT ZERO",84,150);g.font="800 84px "+F;g.fillText("Perpetuals PnL",80,300);
    g.fillStyle="rgba(255,255,255,.55)";g.font="500 36px "+F;g.fillText("Return",84,Lo.r[0]+12);g.fillText("Position Size",84,Lo.r[1]+12);g.fillText("Win Rate",84,Lo.r[2]+12)}
  g.textBaseline="middle";g.textAlign="left";
  var ds=o.date.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
  g.fillStyle=win?"#8E9A8E":"#9A9A98";pFit(g,ds,"500 {px}px "+F,300,38,24);g.fillText(ds,84,Lo.dy);
  if(o.pair){g.textAlign="right";var pt=o.pair+(o.side?"  \u00b7  "+o.side:"");pFit(g,pt,"600 {px}px "+F,470,32,20);g.fillText(pt,816,Lo.dy);g.textAlign="left"}
  g.fillStyle=win?"#97F63C":"#FF3B3B";g.fillRect(82,Lo.by,734,Lo.bh);
  g.fillStyle="#070A06";g.textAlign="center";pFit(g,pn,"800 {px}px "+F,734-56,Lo.fs,48);g.fillText(pn,449,Lo.by+Lo.bh/2+4);
  g.textAlign="right";
  g.font="600 38px "+F;g.fillStyle=win?"#9CF54A":"#FF5A5A";g.fillText(rt,800,Lo.r[0]);
  g.fillStyle="#fff";var szT=pCardSize(o.size);pFit(g,szT,"600 {px}px "+F,320,38,22);g.fillText(szT,800,Lo.r[1]);g.font="600 38px "+F;g.fillText(o.win==null?"-":Math.round(o.win)+"%",800,Lo.r[2]);
  if(!img){g.textAlign="left";g.fillStyle="#97A397";g.font="500 27px "+F;g.fillText("vekxtzero.com  \u2022  Trade Smarter",84,1450)}}
function pShowCard(o){
  var old=document.getElementById("pCardM");if(old)old.remove();
  var m=document.createElement("div");m.id="pCardM";m.className="pcm";
  m.innerHTML='<div class="pcm-b" role="dialog" aria-modal="true"><canvas id="pCardC"></canvas><div class="pcm-a"><button type="button" class="pcm-btn" id="pCardDl">'+L("Unduh PNG","Download PNG")+'</button><button type="button" class="pcm-btn g" id="pCardSh">'+L("Bagikan","Share")+'</button><button type="button" class="pcm-btn g" id="pCardX">'+L("Tutup","Close")+'</button></div></div>';
  m.style.zIndex="400";document.body.appendChild(m);
  var cv=document.getElementById("pCardC"),fn="vekxt-pnl-"+String(o.pair||"card").replace(/[^A-Za-z0-9]+/g,"-")+".png";
  var close=function(){document.removeEventListener("keydown",esc2);m.remove()},esc2=function(e){if(e.key==="Escape")close()};
  document.addEventListener("keydown",esc2);
  m.addEventListener("click",function(e){if(e.target===m)close()});
  document.getElementById("pCardX").onclick=close;
  var blob=function(cb){cv.toBlob(cb,"image/png")};
  var save=function(){blob(function(b){if(!b)return;var u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download=fn;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(u)},4000)})};
  document.getElementById("pCardDl").onclick=save;
  document.getElementById("pCardSh").onclick=function(){blob(function(b){if(!b)return;
    try{var f=new File([b],fn,{type:"image/png"});if(navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f],title:"Vekxt Zero PnL"}).catch(function(){});return}}catch(e){}
    save()})};
  pCardImg(o.pnl>=0?"green":"red",function(img){pDrawCard(cv,o,img)})}
function pCardPos(a,p){
  var u=pPosPnl(p);if(u===null){pNote(L("Harga belum live.","Price is not live yet."),1);return}
  var nt=p.qty*p.entry,st=PE.ledger(a).stats;
  pShowCard({pnl:u,ret:nt>0?u/nt*100:0,size:nt,win:st.winRate,pair:pBase(p.symbol)+"/USDT",side:p.side.toUpperCase()+" "+p.lev+"x",date:new Date()})}
function pCardTrade(a,r){
  if(!r)return;var nt=r.v*r.o,st=PE.ledger(a).stats,dt=new Date(String(r.t)+"Z");
  pShowCard({pnl:r.p,ret:nt>0?r.p/nt*100:0,size:nt,win:st.winRate,pair:pBase(r.s)+"/USDT",side:r.d==="BUY"?"LONG":"SHORT",date:isNaN(dt.getTime())?new Date():dt})}
function pAfter(){pSig="";pHk="";pLoadCD();pForm();pRenderList();pLoadAllT(true);pSync();pLive()}
/* --- aksi order --- */
function pSubmit(a){
  var step=QSTEP[pSym],q=Math.round(Math.floor(parseFloat($("pQty").value)/step+1e-9)*step*1e8)/1e8,b=BK[pSym],n=Date.now();
  var mnq=PMINQ[pSym]||step;if(!(q>=mnq-1e-12)){pNote(L("Isi jumlah minimal ","Enter at least ")+mnq,1);return}
  if(!b||n-pLastMsg>5000){pNote(L("Harga belum live. Tunggu koneksi Bybit.","Price feed is not live. Wait for Bybit."),1);return}
  var o={symbol:pSym,side:pSide,type:pType,qty:q,reduceOnly:$("pRo").checked},sl=parseFloat($("pSl").value),tp=parseFloat($("pTp").value),long=pSide==="buy";
  if(pType==="limit"){o.price=parseFloat($("pPx").value);if(!(o.price>0)){pNote(L("Isi harga limit.","Enter a limit price."),1);return}}
  var ref=pType==="limit"?o.price:(long?b.ask:b.bid);
  if(sl>0){if(long?sl>=ref:sl<=ref){pNote(L("Stop loss di sisi yang salah.","Stop loss is on the wrong side."),1);return}o.sl=sl}
  if(tp>0){if(long?tp<=ref:tp>=ref){pNote(L("Take profit di sisi yang salah.","Take profit is on the wrong side."),1);return}o.tp=tp}
  var r=PE.placeOrder(a,o,BK,PCFG,n);
  if(!r.ok){pNote(perr(r.error),1);return}
  pLog(a,{symbol:o.symbol,side:o.side,type:o.type,qty:o.qty,price:r.filled?r.price:o.price,status:r.filled?"filled":"placed"});
  pSave();pSig="";
  pNote(r.filled?L("Terisi @ ","Filled @ ")+f2(r.price):L("Limit order dipasang.","Limit order placed.")+((sl>0||tp>0)?L(" SL/TP diatur lewat tombol SL/TP setelah terisi."," Set SL/TP with the SL/TP button once filled."):""));
  pLive()}
(function(){
  var dB=$("dBody");
  dB.addEventListener("click",function(e){
    var el=e.target.closest&&e.target.closest("[data-pa]");if(!el)return;
    var act=el.getAttribute("data-pa"),a=selP!==null?PERPS[selP]:null,sym=el.getAttribute("data-s");
    if(act==="open"){selP=+el.getAttribute("data-i");dash();return}
    if(act==="claim"){pClaim(el.getAttribute("data-oid"));return}
    if(act==="entreload"){pLoadEnt(true);return}
    if(act==="back"){selP=null;dash();return}
    if(!a)return;
    if(act==="eqr"){pEqR=el.getAttribute("data-v")||"all";pEqSig="";pEqRender(a);return}
    if(act==="trade"){trOpen();return}
    if(act==="sym"){pSym=sym;pPickOpen=false;dash();return}
    if(act==="tf"){pTf=el.getAttribute("data-tf");dash();return}
    if(act==="pickt"){pPickOpen=!pPickOpen;var pk=$("pPick");if(pk)pk.hidden=!pPickOpen;if(pPickOpen){pLoadAllT();pRenderList();var si=$("pSrch");if(si&&window.matchMedia&&window.matchMedia("(hover:hover)").matches)si.focus()}return}
    if(act==="cat"){pCatSel=el.getAttribute("data-v");document.querySelectorAll("[data-pa=cat]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-v")===pCatSel)});pRenderList();return}
    if(act==="arm"){var av=el.getAttribute("data-v");pArm=pArm===av?null:av;pArmUI();return}
    if(act==="rmstop"){var rp=a.positions[pSym];if(rp){var ro={};ro[el.getAttribute("data-v")]=0;PE.setStops(a,pSym,ro);pSave();pSig="";pLsig="";pLive();pSyncLines()}return}
    if(act==="editdone"){pEditSet(false);return}
    if(act==="lev"){pSetLev(a,el.getAttribute("data-v")==="max"?pLevMax(pSym):+el.getAttribute("data-v"));return}
    if(act==="lwretry"){pLwFail=false;pLoadLW();pDraw();return}
    if(act==="ptab"){pTab=el.getAttribute("data-v");pTabsUI(a);return}
    if(act==="trmore"){pTrN+=20;pHk="";pLive();return}
    if(act==="ormore"){pOrN+=20;pHk="";pLive();return}
    if(act==="tcard"){pCardTrade(a,PE.ledger(a).trades[+el.getAttribute("data-j")]);return}
    if(act==="side"){pSide=el.getAttribute("data-v");pForm();pLsig="";pSyncLines();return}
    if(act==="type"){pType=el.getAttribute("data-v");pForm();return}
    if(act==="go"){pSubmit(a);return}
    if(act==="cancel"){var co=a.orders.filter(function(x){return x.id===+el.getAttribute("data-id")})[0];PE.cancelOrder(a,+el.getAttribute("data-id"));if(co)pLog(a,{symbol:co.symbol,side:co.side,type:"limit",qty:co.qty,price:co.price,status:"cancelled"});pSave();pSig="";pLive();return}
    var p=a.positions[sym];if(!p)return;
    if(act==="card"){pCardPos(a,p);return}
    if(act==="close"){
      var r=PE.placeOrder(a,{symbol:sym,side:p.side==="long"?"sell":"buy",type:"market",qty:p.qty,reduceOnly:true},BK,PCFG,Date.now());
      if(r.ok)pLog(a,{symbol:sym,side:p.side==="long"?"sell":"buy",type:"market",qty:p.qty,price:r.price,status:"filled"});
      pSave();pSig="";pNote(r.ok?L("Posisi ditutup @ ","Closed @ ")+f2(r.price):perr(r.error),!r.ok);pLive();return}
    if(act==="stops"){
      var sl=prompt("Stop loss "+sym+" ("+L("kosong = hapus","empty = remove")+")",p.sl||"");if(sl===null)return;
      var tp=prompt("Take profit "+sym+" ("+L("kosong = hapus","empty = remove")+")",p.tp||"");if(tp===null)return;
      var s=parseFloat(sl)||0,t2=parseFloat(tp)||0,b=BK[sym],long=p.side==="long",ref=b?(long?b.bid:b.ask):0;
      if((s&&ref&&(long?s>=ref:s<=ref))||(t2&&ref&&(long?t2<=ref:t2>=ref))){pNote(L("SL/TP di sisi yang salah.","SL/TP on the wrong side."),1);return}
      PE.setStops(a,sym,{sl:s,tp:t2});pSave();pSig="";pLive()}});
  dB.addEventListener("change",function(e){
    if(e.target.id!=="pLev"||selP===null)return;
    pSetLev(PERPS[selP],+e.target.value)});
  dB.addEventListener("input",function(e){
    var id=e.target.id;
    if(id==="pQty"||id==="pPx")pSum();
    if(id==="pLev"){var lv=$("pLevV");if(lv)lv.textContent=e.target.value+"x"}
    if(id==="pSl"||id==="pTp"||id==="pPx"){pLsig="";pSyncLines()}
    if(id==="pSrch")pRenderList()});
  setInterval(function(){if($("pTerm"))pLive()},1000);
})();

/* ===== VEKXT TRADER: terminal CFD simulasi di dashboard. Harga: Biquote (feed MT5 gratis). Mesin: PE (sama dengan Perps). Akun disimpan di PERPS dengan a.vt=1. ===== */
var BQ="https://biquote.io";
var VI=[
{id:"XAUUSD",n:"Gold Spot",c:"metals",cs:100,lev:100,d:2,u:"oz",a:["XAUUSD","GOLD"]},
{id:"XAGUSD",n:"Silver Spot",c:"metals",cs:5000,lev:50,d:3,u:"oz",a:["XAGUSD","SILVER"]},
{id:"EURUSD",n:"Euro / US Dollar",c:"forex",cs:100000,lev:100,d:5,u:"EUR",a:["EURUSD"]},
{id:"GBPUSD",n:"Great British Pound / US Dollar",c:"forex",cs:100000,lev:100,d:5,u:"GBP",a:["GBPUSD"]},
{id:"USDJPY",n:"US Dollar / Japanese Yen",c:"forex",cs:100000,lev:100,d:3,u:"USD",a:["USDJPY"],q:"JPY"},
{id:"AUDUSD",n:"Australian Dollar / US Dollar",c:"forex",cs:100000,lev:100,d:5,u:"AUD",a:["AUDUSD"]},
{id:"NZDUSD",n:"New Zealand Dollar / US Dollar",c:"forex",cs:100000,lev:100,d:5,u:"NZD",a:["NZDUSD"]},
{id:"USDCAD",n:"US Dollar / Canadian Dollar",c:"forex",cs:100000,lev:100,d:5,u:"USD",a:["USDCAD"],q:"CAD"},
{id:"USDCHF",n:"US Dollar / Swiss Franc",c:"forex",cs:100000,lev:100,d:5,u:"USD",a:["USDCHF"],q:"CHF"},
{id:"US500",n:"S&P 500 Index",c:"indices",cs:1,lev:20,d:2,u:"index",a:["US500","SPX500","US500Cash","SP500"]},
{id:"NAS100",n:"NASDAQ 100 Index",c:"indices",cs:1,lev:20,d:2,u:"index",a:["NAS100","USTEC","US100","NAS100Cash"]},
{id:"US30",n:"Dow Jones 30 Index",c:"indices",cs:1,lev:20,d:2,u:"index",a:["US30","DJ30","WS30","US30Cash"]},
{id:"BTCUSD",n:"Bitcoin / US Dollar",c:"crypto",cs:1,lev:20,d:2,u:"BTC",a:["BTCUSD"]},
{id:"ETHUSD",n:"Ethereum / US Dollar",c:"crypto",cs:1,lev:20,d:2,u:"ETH",a:["ETHUSD"]},
{id:"USOIL",n:"WTI Crude Oil",c:"energy",cs:1000,lev:20,d:2,u:"bbl",a:["USOIL","WTI","XTIUSD","USOILCash","CL-OIL"],fo:1}];
var VIX={};VI.forEach(function(i){VIX[i.id]=i;if(i.q)PE.QC[i.id]=function(p){return 1/p}});
var VCAT=[["fav","Favorites"],["forex","Forex"],["metals","Metals"],["indices","Indices"],["crypto","Crypto"]];
var PRG={hyper:{n:"Hyper 1 Step",t:[10],dd:4,md:8,min:5,tr:false},nova:{n:"Nova 2 Step",t:[8,5],dd:5,md:10,min:5,tr:false},zero:{n:"Zero Instant",t:null,dd:3,md:7,min:0,tr:true},fut:{n:"Vekxt Futures",t:[6],dd:0,md:4,min:0,tr:true,lock:true}};
var VCFG={takerFee:0,makerFee:0,defaultLev:100,maxLev:500,levMax:{},mmr:0.005,slippage:0,maxSpread:0.05};
var VTF=[["1m","M1",60],["5m","M5",300],["15m","M15",900],["30m","M30",1800],["1h","H1",3600],["4h","H4",14400],["1d","D1",86400]];
var VERR={insufficient_margin:["Margin tidak cukup.","Insufficient margin."],no_price:["Harga belum tersedia.","No price yet."],bad_order:["Order tidak valid.","Invalid order."],account_breached:["Akun sudah breached.","Account is breached."],account_passed:["Challenge sudah lolos. Trading di akun berikutnya.","Challenge already passed. Trade on the next account."]};
var VBK={},vtMap={},vtWs=null,vtConn=false,vtPollT=0,vtRefT=0,vtStarted=false,vtEntSt="idle",vtBars=[],vtBarKey="",vtCh=null,vtCs=null,vtLines=[],vtOhlcU=null,vtLwBusy=false,vtToastT=0,vtSig="";
var selV=null,VT={on:false,tab:"home",sym:"XAUUSD",cat:"fav",tf:4,side:"buy",ot:"market",pt:"open",acc:null,lot:0.1,sheet:null,inst:false},vtDrag=null,vtTap=null,vtLsig="",vtQAt=0;
try{VT.inst=localStorage.getItem("vtInst")==="1"}catch(e){}
function vtList(){return PERPS.filter(function(a){return a.vt&&!a.fut})}
function vtAll(){return PERPS.filter(function(a){return a.vt})}
function futList(){return PERPS.filter(function(a){return a.vt&&a.fut})}
function vtById(id){var l=vtAll();for(var i=0;i<l.length;i++)if(l[i].id===id)return l[i];return null}
/* halaman statistik akun (sama seperti detail akun CFD/Perps), dengan tombol Trade sekarang menuju terminal */
function vtAsCfd(a){var s=vtSnap(a),lg=PE.ledger(a);
  return{id:esc(a.id),program:esc(a.program),phase:a.phase||null,phases:a.phases||null,size:a.size,equity:s.equity,target:a.target||null,dd:a.rules.dailyDd,md:a.rules.maxDd,ddUsed:s.dailyLoss,mdUsed:s.maxLoss,days:lg.days,minDays:a.minDays||0,pnl:lg.pnl,stats:lg.stats,
    trades:lg.trades.map(function(x){var i=VIX[x.s];return{t:String(x.t).replace("T"," "),s:x.s,d:x.d,v:i?Math.round(x.v/i.cs*100)/100:x.v,p:x.p}}),offline:false,breach:a.status==="breached"?(a.reason==="daily"?"daily":"max"):null,funded:!!a.isFunded,cred:null}}
function vtDetail(a){
  var h=accDetail(vtAsCfd(a)),on=a.status==="active";
  var btn='<button type="button" class="lg-btn" id="vtGoTrade" style="margin-bottom:12px"'+(on?"":" disabled")+'>'+L("Trade sekarang","Trade now")+'</button>'+(a.status==="passed"?'<div class="lg-card"><p>'+L("Challenge lolos. Akun berikutnya: ","Challenge passed. Next account: ")+esc(a.passedTo||"")+'</p></div>':"");
  return h.replace('</button><div class="lg-card">','</button>'+btn+'<div class="lg-card">')}
function vtAcc(){var l=vtAll();for(var i=0;i<l.length;i++)if(l[i].id===VT.acc)return l[i];return null}
function vtFav(){try{var f=JSON.parse(localStorage.getItem("vtFav")||"null");if(Array.isArray(f))return f}catch(e){}return["XAUUSD","EURUSD","GBPUSD","US500","NAS100","BTCUSD"]}
function vtFavSet(f){try{localStorage.setItem("vtFav",JSON.stringify(f))}catch(e){}}
function vtLive(id){var b=VBK[id];return !!b&&!b.closed&&!b.ph&&Date.now()-b.rx<90000}
function vtFmt(id,p){var i=VIX[id];return(+p).toFixed(i?i.d:2)}
function vtM(n){n=+n||0;return(n<0?"-":"")+Math.abs(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" USD"}
function vtEnsure(a){Object.keys(a.positions).forEach(function(s){if(!VBK[s]){var p=a.positions[s];VBK[s]={bid:p.entry,ask:p.entry,mid:p.entry,pct:0,ts:0,rx:0,closed:true,ph:1}}})}
function vtSnap(a){vtEnsure(a);return PE.snapshot(a,VBK)}
function vtNewAcc(base,id,pk,size,phase,funded){
  var g=PRG[pk],a=PE.newAccount({id:id,size:size,rules:{dailyDd:g.dd,maxDd:g.md,trailing:g.tr,lock:!!g.lock}});
  a.vt=1;if(pk==="fut"){a.fut=1}a.base=base;a.pk=pk;a.program=g.n;a.phase=g.t?phase:null;a.phases=g.t?g.t.length:null;
  a.isFunded=!!funded;a.funded=!!funded;a.target=funded||!g.t?0:g.t[phase-1];a.minDays=funded?0:g.min;
  if(funded){a.fundedDate=new Date().toISOString().slice(0,10);a.certId="VZ-"+id}
  VI.forEach(function(i){a.lev[i.id]=i.lev});if(a.fut)FI.forEach(function(i){a.lev[i.id]=1});return a}
function vtAdd(a){if(!PERPS.some(function(x){return x.id===a.id}))PERPS.push(a)}
/* challenge lolos: Nova fase 1 -> fase 2, lainnya -> akun funded. ID turunan supaya tidak dobel lintas perangkat */
function vtNext(a){
  var base=a.base||a.id,two=a.pk==="nova"&&(a.phase||1)<2,nid=base+(two?"-P2":"-F");
  a.passedTo=nid;if(PERPS.some(function(x){return x.id===nid}))return;
  vtAdd(vtNewAcc(base,nid,a.pk,a.size,two?2:1,!two))}
function vtHeal(){PERPS.slice().forEach(function(a){if(a.vt&&a.status==="passed")vtNext(a)})}
function vtPass(a){
  if(a.status!=="active"||a.isFunded||!(a.target>0))return false;
  if(Object.keys(a.positions).length||a.orders.length)return false;
  if(a.balance<a.size*(1+a.target/100)-1e-9)return false;
  if(PE.ledger(a).days<(a.minDays||0))return false;
  a.status="passed";a.reason="target";vtNext(a);return true}
/* ---- klaim pembelian Vekxt Trader (hak akun di Worker monitor) ---- */
function vtBoot(){
  if(!user||vtEntSt==="loading")return;pLoadAll();
  if(pFsState==="idle"&&!vtBoot.b){vtBoot.b=true;pRemoteLoad(function(){vtBoot.b=false;vtHeal();pSave();vtEntSt="idle";vtBoot();if(view==="home"&&PM!=="perp")dash()});return}
  if(pFsState!=="ok")return;if(vtAll().length)vtStart();if(vtEntSt==="done")return;
  vtEntSt="loading";
  apiPost({action:"vt"},function(d){
    var un=(Array.isArray(d.entitlements)?d.entitlements:[]).filter(function(e){return e.status==="unused"});
    var go=function(){if(!un.length){vtEntSt="done";return}
      var e=un.shift();apiPost({action:"vt_claim",orderId:e.orderId},function(r){
        if(r&&r.ok&&r.accountId&&PRG[r.program]){var zero=r.program==="zero";vtAdd(vtNewAcc(r.accountId,r.accountId,r.program,r.size,1,zero));pSave();pPush(true)}
        go()},function(){vtEntSt="done"})};
    go();if(view==="home"&&PM!=="perp")setTimeout(dash,400)},function(){vtEntSt="done"})}
/* ---- harga: REST /api/latest untuk mencocokkan simbol, SignalR /hubs/tick untuk push ---- */
function vtArr(d){if(Array.isArray(d))return d;if(d&&typeof d==="object"){var k=["ticks","data","items","result","quotes"];for(var i=0;i<k.length;i++)if(Array.isArray(d[k[i]]))return d[k[i]];var v=Object.keys(d).map(function(x){return d[x]}).filter(function(x){return x&&typeof x==="object"&&x.symbol});if(v.length)return v}return[]}
function vtTickIn(t){
  if(Array.isArray(t)){t.forEach(vtTickIn);return}
  if(!t||!t.symbol)return;var id=vtMap[String(t.symbol).toUpperCase()];if(!id)return;
  var bid=+t.bid,ask=+t.ask,m=+t.mid;if(!(bid>0&&ask>=bid)){if(!(m>0))return;bid=ask=m}
  var ts=vtTs(t.timestamp);if(!(ts>0))ts=Date.now();var o=VBK[id];
  VBK[id]={bid:bid,ask:ask,mid:(bid+ask)/2,pct:t.dayDiffPercent!=null?+t.dayDiffPercent:(o?o.pct:0),hi:+t.high>0?+t.high:(o?o.hi:0),lo:+t.low>0?+t.low:(o?o.lo:0),ts:ts,rx:Date.now(),closed:t.marketState==="closed"}
  vtCandle(id,(bid+ask)/2,ts);if(FB[id])fuDerive(id,ts)}
function vtLatest(cb){
  var q=[];VI.forEach(function(i){i.a.forEach(function(s){q.push("symbols="+encodeURIComponent(s))})});
  fetch(BQ+"/api/latest?"+q.join("&")).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(d){
    var arr=vtArr(d),by={};arr.forEach(function(t){if(t&&t.symbol)by[String(t.symbol).toUpperCase()]=t});
    VI.forEach(function(i){for(var k=0;k<i.a.length;k++){var s=i.a[k].toUpperCase();if(by[s]){i.bq=by[s].symbol;vtMap[s]=i.id;vtTickIn(by[s]);break}}});
    if(cb)cb(true)}).catch(function(){if(cb)cb(false)})}
function vtPollOn(on){clearInterval(vtPollT);vtPollT=0;if(on)vtPollT=setInterval(function(){vtLatest()},2500)}
function vtScript(cb){if(window.signalR)return cb(true);var s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/8.0.0/signalr.min.js";s.onload=function(){cb(true)};s.onerror=function(){cb(false)};document.head.appendChild(s)}
function vtConnect(){
  if(vtWs||vtConn)return;vtConn=true;
  vtScript(function(ok){
    if(!ok){vtConn=false;vtPollOn(true);return}
    var c=new signalR.HubConnectionBuilder().withUrl(BQ+"/hubs/tick",{skipNegotiation:true,transport:signalR.HttpTransportType.WebSockets}).withAutomaticReconnect([1000,3000,5000,10000]).build();
    var sub=function(){return c.invoke("Subscribe",VI.filter(function(i){return i.bq}).map(function(i){return i.bq}))};
    c.on("ReceiveTick",vtTickIn);c.onreconnected(function(){sub().catch(function(){})});
    c.onclose(function(){vtWs=null;vtPollOn(true);setTimeout(vtConnect,5000)});
    c.start().then(function(){vtWs=c;vtConn=false;vtPollOn(false);return sub()}).catch(function(){vtConn=false;vtPollOn(true)})})}
function vtStart(){
  if(vtStarted)return;vtStarted=true;
  var go=function(){vtLatest(function(ok){if(!ok){vtStarted=false;setTimeout(vtStart,5000);return}vtConnect();clearInterval(vtRefT);vtRefT=setInterval(function(){vtLatest()},30000)})};go();
  setInterval(vtStep,500)}
/* ---- mesin: dijalankan tiap 0,5 dtk untuk semua akun aktif ---- */
function vtStep(){
  var ch=false,open=false;
  vtAll().forEach(function(a){
    if(a.status!=="active")return;open=true;vtEnsure(a);
    var ok=Object.keys(a.positions).every(function(s){return vtLive(s)});
    if(ok){var ev=PE.onTick(a,VBK,fuCfg(a),Date.now());if(ev.length){ch=true;vtEv(a,ev)}}
    if(vtPass(a)){ch=true;vtToast(L("Selamat! Challenge lolos. Akun berikutnya dibuat otomatis: ","Congrats! Challenge passed. Next account created: ")+a.passedTo,true)}});
  if(ch){pSave();pPush(true);if(VT.on)vtRender();else if(view==="home"&&PM!=="perp"&&!VT.on)dash()}
  if(VT.on&&!ch){var fa=vtAcc();if(fa&&fa.fut&&VT.tab==="trade")fuTick(fa);else vtPaint()}}
function vtEv(a,ev){ev.forEach(function(e){
  if(e.type==="breach")vtToast((a.reason==="daily"?L("Batas drawdown harian tercapai. Akun breached.","Daily drawdown reached. Account breached."):a.reason==="liquidation"?L("Stop out. Akun breached.","Stop out. Account breached."):L("Batas drawdown total tercapai. Akun breached.","Max drawdown reached. Account breached.")),false);
  else if(e.type==="stop_loss")vtToast("Stop Loss "+e.symbol,false);else if(e.type==="take_profit")vtToast("Take Profit "+e.symbol,true)})}
/* ---- candle ---- */
function vtLw(cb){if(window.LightweightCharts)return cb(true);if(vtLwBusy)return;vtLwBusy=true;var i=0;(function n(){if(i>=LWU.length){vtLwBusy=false;return cb(false)}var s=document.createElement("script");s.src=LWU[i++];s.onload=function(){vtLwBusy=false;cb(true)};s.onerror=n;document.head.appendChild(s)})()}
function vtTs(v){var x=String(v==null?"":v);if(/^\d{4}-\d\d-\d\dT[\d:.]+$/.test(x))x+="Z";return Date.parse(x)}
function vtFindBars(d,n){if(Array.isArray(d))return(d[0]&&typeof d[0]==="object"&&("close" in d[0]||"c" in d[0]))?d:null;if(!d||typeof d!=="object"||n>3)return null;for(var k in d){var r=vtFindBars(d[k],n+1);if(r)return r}return null}
function vtBarsParse(d){var a=vtFindBars(d,0)||[];
  var o=[];a.forEach(function(b){var t=vtTs(b.openTime||b.time||b.t);if(!(t>0)&&typeof b.time==="number")t=b.time*1000;if(!(t>0))return;o.push({time:Math.floor(t/1000),open:+b.open,high:+b.high,low:+b.low,close:+b.close})});
  o.sort(function(x,y){return x.time-y.time});var r=[];o.forEach(function(b){if(!r.length||r[r.length-1].time!==b.time)r.push(b)});return r}
/* alamat OHLC Biquote tidak tertulis di docs: dicari otomatis dari spesifikasi Swagger mereka, lalu dicoba beberapa pola umum */
var VT_TPL=["/api/{s}/ohlc?interval={i}&limit={n}","/api/{s}/ohlc?timeframe={i}&limit={n}","/api/{s}/ohlc?tf={i}&limit={n}","/api/{s}/ohlc?interval={i}&count={n}","/api/ohlc/{s}?interval={i}&limit={n}","/api/ohlc?symbol={s}&interval={i}&limit={n}","/api/ohlc/{s}?timeframe={i}&limit={n}","/api/ohlc?symbol={s}&timeframe={i}&limit={n}","/api/ohlc/{s}/{i}?limit={n}","/api/ohlcv/{s}?interval={i}&limit={n}","/api/bars/{s}?interval={i}&limit={n}","/api/history/{s}?interval={i}&limit={n}","/api/chart/{s}?interval={i}&limit={n}","/api/candles/{s}?interval={i}&limit={n}","/api/candles?symbol={s}&interval={i}&limit={n}","/api/ohlc/{s}?tf={i}&limit={n}","/api/ohlc/{s}?period={i}&limit={n}"],vtOhlcFail=0;
function vtDiscover(cb,nt){
  var S=["/swagger/v1/swagger.json","/openapi/v1.json","/swagger/swagger.json","/swagger.json","/openapi.json","/v3/api-docs"],k=0,seen="";
  (function n(){if(k>=S.length){if(nt)nt("spec: "+(seen||"404 semua"));return cb(null)}
    var u=S[k++];fetch(BQ+u).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(sp){
      var ps=sp.paths||{},ks=Object.keys(ps),key=ks.filter(function(x){return /ohlc|candle|bar|history|chart/i.test(x)&&ps[x].get})[0];
      if(!key){seen=u+" ada, tanpa path OHLC; path: "+ks.slice(0,12).join(" ");throw 0}
      var pt=key,q=[];
      (ps[key].get.parameters||[]).forEach(function(p){var nm=p.name||"",role=/symbol|ticker|instrument/i.test(nm)?"{s}":/interval|timeframe|period|resolution|^tf$/i.test(nm)?"{i}":/limit|count|bars|size|take|max/i.test(nm)?"{n}":"";
        if(p.in==="path")pt=pt.replace("{"+nm+"}",role||"{s}");else if(p.in==="query"&&role)q.push(nm+"="+role)});
      if(nt)nt("spec "+u+": "+key);cb(pt+(q.length?"?"+q.join("&"):""))}).catch(n)})()}
/* cadangan: riwayat dari Bybit (perkiraan, digeser mengikuti harga Biquote) untuk simbol yang ada di Bybit */
var VT_BY={BTCUSD:"BTCUSDT",ETHUSD:"ETHUSDT",XAUUSD:"XAUUSDT",XAGUSD:"XAGUSDT"},VT_BYI=["1","5","15","30","60","240","D"];
function vtBybit(key,id,tf,cb){
  var sym=VT_BY[id];if(!sym)return cb(false);
  fetch("https://api.bybit.com/v5/market/kline?category=linear&symbol="+sym+"&interval="+VT_BYI[tf]+"&limit=500").then(function(r){return r.json()}).then(function(d){
    var l=d&&d.result&&d.result.list;if(!Array.isArray(l)||!l.length)throw 0;
    var b=l.map(function(x){return{time:Math.floor(+x[0]/1000),open:+x[1],high:+x[2],low:+x[3],close:+x[4]}}).sort(function(x,y){return x.time-y.time});
    var m=VBK[id],off=0;if(m&&!m.ph&&m.mid>0){off=m.mid-b[b.length-1].close;if(Math.abs(off)/m.mid>0.02)off=0}
    if(off)b=b.map(function(x){return{time:x.time,open:x.open+off,high:x.high+off,low:x.low+off,close:x.close+off}});
    if(vtBarKey!==key)return cb(true);vtBars=b;vtCache[key]={bars:b,at:Date.now()};if(vtCs){vtCs.setData(b);if(!vtRestoreView())vtCh.timeScale().fitContent()}cb(true)}).catch(function(){cb(false)})}
function vtLoadBars(){
  var i=VIX[VT.sym],tf=VTF[VT.tf],key=VT.sym+"|"+VT.tf;vtBarKey=key;vtBars=[];if(vtCs)vtCs.setData([]);
  var cc=vtCache[key];if(cc&&cc.bars.length&&Date.now()-cc.at<20000){vtBars=cc.bars;if(vtCs){vtCs.setData(vtBars);if(!vtRestoreView())vtCh.timeScale().fitContent()}return}
  var bi=(i&&i.fut&&VIX[i.base])||i,bq=bi&&(bi.bq||bi.a[0]),fm=[tf[0],tf[1],String(tf[2]/60)],diag=[],dead={};
  var note=function(x){if(diag.indexOf(x)<0)diag.push(x)};
  var run=function(list){
    var k=0;(function nx(){
      if(k>=list.length){vtBybit(key,(i&&i.base)||VT.sym,VT.tf,function(ok){
        if(ok){vtPaintNote(L("Riwayat candle dari Bybit (perkiraan).","Candle history from Bybit (approximate)."));return}
        vtOhlcFail=Date.now();vtPaintNote(L("Riwayat candle belum bisa dimuat","Candle history unavailable")+": "+diag.slice(0,8).join(" · ")+" — "+L("candle terbentuk dari harga live.","candles build from live prices."))});return}
      var c=list[k++],path=c.t.split("?")[0];if(dead[path])return nx();
      var u=BQ+c.t.replace("{s}",encodeURIComponent(bq)).replace("{i}",encodeURIComponent(fm[c.f])).replace("{n}","500");
      fetch(u).then(function(r){
        if(!r.ok)return r.text().then(function(tx){var m="";try{m=JSON.parse(tx).message||""}catch(e){m=tx}
          if(r.status===404&&!m)dead[path]=1;note(r.status+" "+path+(m?" ("+String(m).replace(/\s+/g," ").slice(0,80)+")":""));throw 0});
        return r.json().then(function(d){
          var b=vtBarsParse(d);if(!b.length){note("200 "+path+" keys:"+(d&&typeof d==="object"?Object.keys(d).slice(0,6).join("/"):typeof d));throw 0}
          if(vtBarKey!==key)return;try{localStorage.setItem("vtOhlc",JSON.stringify(c))}catch(e){}
          vtBars=b;vtCache[key]={bars:b,at:Date.now()};if(vtCs){vtCs.setData(b);if(!vtRestoreView())vtCh.timeScale().fitContent()}vtPaintNote("")})}).catch(function(){nx()})})()};
  var saved=null;try{saved=JSON.parse(localStorage.getItem("vtOhlc")||"null")}catch(e){}
  var st=[];VT_TPL.forEach(function(t){[0,1,2].forEach(function(f){st.push({t:t,f:f})})});
  if(saved&&saved.t){run([saved].concat(st));return}
  if(vtOhlcFail&&Date.now()-vtOhlcFail<60000){vtPaintNote(L("Riwayat candle belum bisa dimuat. Buka Trade lagi 1 menit lagi.","Candle history unavailable. Reopen Trade in a minute."));return}
  vtDiscover(function(tpl){var l=[];if(tpl)[0,1,2].forEach(function(f){l.push({t:tpl,f:f})});run(l.concat(st))},note)}
function vtChart(){return vtCh}
function vtCandle(id,p,ts){
  if(!VT.on||VT.tab!=="trade"||id!==VT.sym||!vtCs||vtBarKey!==VT.sym+"|"+VT.tf)return;
  var sec=VTF[VT.tf][2],t=Math.floor(ts/1000/sec)*sec,l=vtBars[vtBars.length-1];
  if(l&&l.time===t){l.high=Math.max(l.high,p);l.low=Math.min(l.low,p);l.close=p}
  else if(!l||t>l.time){l={time:t,open:l?l.close:p,high:p,low:p,close:p};vtBars.push(l)}else return;
  try{vtCs.update(l)}catch(e){}}
function vtMkChart(){
  var el=$("vtCh");if(!el)return;
  vtLw(function(ok){
    if(!ok||!$("vtCh")){vtPaintNote(L("Chart gagal dimuat.","Chart failed to load."));return}
    if(vtCh){try{vtCh.remove()}catch(e){}vtCh=null}
    var C=window.LightweightCharts,e2=$("vtCh");
    vtCh=C.createChart(e2,Object.assign({width:e2.clientWidth||320,height:e2.clientHeight||280,rightPriceScale:{borderColor:"#292B32"},timeScale:{timeVisible:true,secondsVisible:false,borderColor:"#292B32"}},vtChartOpts(vtCfg())));
    vtCs=vtCh.addCandlestickSeries(Object.assign({priceFormat:{type:"price",precision:VIX[VT.sym].d,minMove:VIX[VT.sym].tick||Math.pow(10,-VIX[VT.sym].d)}},vtSerOpts(vtCfg())));
    vtLines=[];vtLsig="";vtLoadBars();vtBindDrag(e2);vtPosLines();vtStopsUI();
    if(window.ResizeObserver)new ResizeObserver(function(){var q=$("vtCh");if(q&&vtCh)vtCh.applyOptions({width:q.clientWidth,height:q.clientHeight})}).observe(e2)})}
function vtPosLines(){vtLsig="";vtSyncLines()}
function vtM2(v){return(v>0?"+":"")+vtM(v)}
function vtEst(p,px){var qc=PE.QC[p.symbol]?PE.QC[p.symbol](px):1;return(p.side==="long"?px-p.entry:p.entry-px)*p.qty*qc}
function vtLvlTitle(k,price){var a=vtAcc(),p=a&&a.positions[VT.sym];if(!p)return k.toUpperCase();return k.toUpperCase()+" "+vtM2(vtEst(p,price))}
function vtLvl(){
  var a=vtAcc(),id=VT.sym,it=[];if(!a)return it;var p=a.positions[id],i=VIX[id];
  if(p){it.push({k:"entry",price:p.entry,color:"#F5B84B",st:0,title:"ENTRY "+(i.fut?Math.round(p.qty/i.cs):(p.qty/i.cs).toFixed(2))+(p.sl||p.tp?"":" \u00b7 tap = SL/TP")});
    if(p.sl)it.push({k:"sl",price:p.sl,color:"#F04452",st:2,title:vtLvlTitle("sl",p.sl)});
    if(p.tp)it.push({k:"tp",price:p.tp,color:"#22C55E",st:2,title:vtLvlTitle("tp",p.tp)})}
  else{var sl=+($("vtSl")||{}).value||0,tp=+($("vtTp")||{}).value||0;
    if(sl>0)it.push({k:"sl",price:sl,color:"#F04452",st:2,title:"SL"});if(tp>0)it.push({k:"tp",price:tp,color:"#22C55E",st:2,title:"TP"})}
  a.orders.forEach(function(o){if(o.symbol===id)it.push({k:"o"+o.id,price:o.price,color:"#4C8DFF",st:1,title:(o.kind==="stop"?"STOP ":"LIMIT ")+o.side.toUpperCase()})});
  return it}
function vtSyncLines(){
  if(!vtCs||vtDrag)return;var it=vtLvl(),sig=JSON.stringify(it.map(function(x){return[x.k,x.price,x.color,x.st]})),sk=JSON.stringify(it.map(function(x){return[x.k,x.color,x.st]}));
  if(sig!==vtLsig){
    if(sk===vtLsk&&vtLines.length===it.length){it.forEach(function(x,j){var l=vtLines[j];l.price=x.price;l.t=x.title;l.h.applyOptions({price:x.price,title:x.title})});vtLsig=sig;vtStopsUI()}   /* ubah harga tanpa membuat ulang garis, jadi tidak berkedip */
    else{vtLines.forEach(function(l){try{vtCs.removePriceLine(l.h)}catch(e){}});
      vtLines=it.map(function(x){return{k:x.k,price:x.price,t:x.title,h:vtCs.createPriceLine({price:x.price,color:x.color,lineWidth:(x.k==="entry"||x.k==="sl"||x.k==="tp")?2:1,lineStyle:x.st,axisLabelVisible:true,title:x.title})}});
      vtLsig=sig;vtLsk=sk;vtStopsUI()}}
  else it.forEach(function(x,j){var l=vtLines[j];if(l&&l.t!==x.title){l.t=x.title;l.h.applyOptions({title:x.title})}})}
function vtRound(id,v){var i=VIX[id];return i.tick?fuRound(i,v):+(+v).toFixed(i.d)}
function vtLotStr(q,i){return i.fut?Math.round(q/i.cs)+" ct ":(q/i.cs).toFixed(2)+" lot "}
function vtRef(p){var b=VBK[p.symbol];return b&&!b.ph?(p.side==="long"?b.bid:b.ask):p.entry}
function vtLock(v){try{vtCh.applyOptions({handleScroll:v,handleScale:v})}catch(e){}}
function vtNear(y,kinds,tol){var hit=null,bd=tol;vtLines.forEach(function(l){if(!kinds[l.k])return;var c=vtCs.priceToCoordinate(l.price);if(c!==null&&Math.abs(c-y)<bd){bd=Math.abs(c-y);hit=l}});return hit}
/* harga default sekitar 46 px di atas/bawah garis acuan, bukan persen tetap */
function vtDefLvl(base,up){var y=vtCs.priceToCoordinate(base);if(y===null)return 0;var v=vtCs.coordinateToPrice(y+(up?-46:46));return v>0?v:0}
function vtStopOk(k,long,v,ref){return v>0&&(k==="sl"?(long?v<ref:v>ref):(long?v>ref:v<ref))}
function vtApplyLvl(k,price){
  var a=vtAcc(),id=VT.sym,p=a&&a.positions[id];price=vtRound(id,price);
  if(p){if(a.status!=="active")return false;
    if(!vtStopOk(k,p.side==="long",price,vtRef(p))){vtToast(L("SL/TP di sisi yang salah.","SL/TP on the wrong side."),false);vtLsig="";return false}
    var o={};o[k]=price;PE.setStops(a,id,o);pSave();pPush(true);vtLsig="";return true}
  var inp=$(k==="sl"?"vtSl":"vtTp");if(inp)inp.value=price;vtLsig="";return true}
function vtAddStop(k){
  var a=vtAcc(),id=VT.sym,p=a&&a.positions[id],b=VBK[id];if(!vtCs||!a||a.status!=="active")return;
  if(!b||b.ph)return vtToast(L("Harga belum tersedia.","No price yet."),false);
  var long=p?p.side==="long":VT.side==="buy",ref=p?vtRef(p):(long?b.ask:b.bid),base=p?p.entry:ref,tk=VIX[id].tick?VIX[id].tick*8:Math.pow(10,-VIX[id].d),up=(k==="tp")===long;
  var v=vtDefLvl(base,up);if(!vtStopOk(k,long,v,ref))v=vtDefLvl(ref,up);
  if(!vtStopOk(k,long,v,ref))v=up?ref+tk*20:ref-tk*20;
  if(vtApplyLvl(k,v)){vtSyncLines();vtStopsUI()}}
function vtRmStop(k){
  var a=vtAcc(),id=VT.sym,p=a&&a.positions[id];
  if(p){var o={};o[k]=0;PE.setStops(a,id,o);pSave();pPush(true)}else{var e=$(k==="sl"?"vtSl":"vtTp");if(e)e.value=""}
  vtLsig="";vtSyncLines();vtStopsUI()}
function vtStopsFromEntry(){
  var a=vtAcc(),p=a&&a.positions[VT.sym];if(!p||a.status!=="active")return;var had=!!(p.sl&&p.tp);
  if(!p.sl)vtAddStop("sl");if(!p.tp)vtAddStop("tp");
  vtToast(had?L("Geser garis SL/TP untuk mengubah.","Drag the SL/TP lines to change them."):L("SL/TP dipasang. Geser garisnya untuk atur.","SL/TP added. Drag the lines to adjust."),true)}
function vtStopsUI(){
  var e=$("vtStops");if(!e)return;var a=vtAcc(),id=VT.sym,p=a&&a.positions[id],on=a&&a.status==="active",sl,tp;
  if(p){sl=p.sl;tp=p.tp}else{sl=+($("vtSl")||{}).value||0;tp=+($("vtTp")||{}).value||0}
  var d=VIX[id].d,f=function(k,v){return v?'<button type="button" class="'+k+'" data-rm="'+k+'">'+k.toUpperCase()+" "+(+v).toFixed(d)+' \u00d7</button>':'<button type="button" class="'+k+'" data-st="'+k+'">+'+k.toUpperCase()+'</button>'};
  e.innerHTML=on&&(p||!VT.inst)?f("sl",sl)+f("tp",tp):"";
  var h=$("vtHint");if(h)h.textContent=p?((sl||tp)?L("Geser garis SL/TP di chart untuk mengubah.","Drag the SL/TP lines on the chart to change them."):L("Tap garis ENTRY di chart untuk pasang SL/TP, lalu geser.","Tap the ENTRY line on the chart to add SL/TP, then drag.")):(VT.inst?L("Instan aktif: ketuk BUY/SELL, lalu tap garis ENTRY di chart untuk pasang SL/TP.","Instant on: tap BUY/SELL, then tap the ENTRY line on the chart to add SL/TP."):L("Tap +SL / +TP, lalu geser garisnya di chart.","Tap +SL / +TP, then drag the lines on the chart."))}
var vtRaf=0,vtLY=0,vtLsk="";
function vtBindDrag(el){
  var KD={sl:1,tp:1},KE={entry:1};
  var yOf=function(e){return e.clientY-el.getBoundingClientRect().top};
  el.style.touchAction="none";
  el.addEventListener("pointerdown",function(e){
    if(!vtCs)return;var y=yOf(e),tol=e.pointerType==="touch"?30:12,hit=vtNear(y,KD,tol);
    if(hit){var c=vtCs.priceToCoordinate(hit.price);vtDrag={l:hit,price:0,off:c===null?0:y-c};vtLY=y;vtLock(false);try{hit.h.applyOptions({lineWidth:3})}catch(x){}try{el.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault();return}
    vtTap=vtNear(y,KE,tol)?{x:e.clientX,y:e.clientY,t:Date.now()}:null},true);
  /* satu pembaruan per frame, garis mengikuti jari tanpa lompat (selisih jari-garis dijaga) */
  var frame=function(){vtRaf=0;if(!vtDrag)return;var v=vtCs.coordinateToPrice(vtLY-vtDrag.off);
    if(v>0){var pr=vtRound(VT.sym,v);if(pr!==vtDrag.price){vtDrag.price=pr;vtDrag.l.h.applyOptions({price:pr,title:vtLvlTitle(vtDrag.l.k,pr)})}}};
  el.addEventListener("pointermove",function(e){
    if(!vtDrag)return;var ce=e.getCoalescedEvents?e.getCoalescedEvents():null,q=ce&&ce.length?ce[ce.length-1]:e;vtLY=yOf(q);e.preventDefault();
    if(!vtRaf)vtRaf=requestAnimationFrame(frame)},true);
  el.addEventListener("touchmove",function(e){if(vtDrag)e.preventDefault()},{passive:false,capture:true});
  var end=function(e){
    if(vtDrag){var d=vtDrag;vtDrag=null;if(vtRaf){cancelAnimationFrame(vtRaf);vtRaf=0}try{d.l.h.applyOptions({lineWidth:2})}catch(x){}vtLock(true);if(d.price>0)vtApplyLvl(d.l.k,d.price);else vtLsig="";vtSyncLines();vtStopsUI();return}
    if(vtTap){var t=vtTap;vtTap=null;if(Date.now()-t.t<600&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<10)vtStopsFromEntry()}};
  el.addEventListener("pointerup",end,true);el.addEventListener("pointercancel",end,true)}
/* ---- UI ---- */
function vtToast(m,ok){if(ok===false)vtSnd("err");var e=$("vtToast");if(!e){if(!VT.on){try{var d=document.createElement("div");d.className="vtToast "+(ok?"ok":"no");d.textContent=m;document.body.appendChild(d);setTimeout(function(){d.remove()},5000)}catch(x){}}return}
  e.textContent=m;e.className="vtToast on "+(ok?"ok":"no");clearTimeout(vtToastT);vtToastT=setTimeout(function(){e.className="vtToast"},4200)}
function vtPaintNote(m){var e=$("vtNote");if(e)e.textContent=m}
function vtOpen(id){
  vtStart();fuCss();VT.acc=id;VT.on=true;VT.tab="home";VT.sheet=null;
  if(!$("vtApp")){var d=document.createElement("div");d.id="vtApp";document.body.appendChild(d);vtCss()}
  $("vtApp").style.display="flex";document.body.style.overflow="hidden";vtRender()}
function vtShut(){VT.on=false;vtDrag=null;vtTap=null;if($("vtApp"))$("vtApp").style.display="none";document.body.style.overflow="";if(vtCh){try{vtCh.remove()}catch(e){}vtCh=vtCs=null}dash()}
function vtCss(){
  var s=document.createElement("style");s.textContent="#vtApp{position:fixed;inset:0;z-index:300;background:#080A0D;color:#F5F5F5;display:none;flex-direction:column;font:14px system-ui,-apple-system,sans-serif;padding-top:env(safe-area-inset-top);--ac:#F5B84B;--up:#22C55E;--dn:#F04452;--mu:#A1A1AA;--ln:#292B32;--sf:#111318}"
  +"#vtApp *{box-sizing:border-box}#vtApp button{font:inherit;color:inherit;cursor:pointer}#vtApp input,#vtApp select{font:inherit;color:#F5F5F5;background:#0d0f13;border:1px solid var(--ln);border-radius:10px;padding:11px 12px;width:100%}"
  +".vtHd{display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid var(--ln)}.vtHd b{letter-spacing:.14em;color:var(--ac)}.vtHd small{color:var(--mu);margin-left:auto;text-align:right}.vtHd button{background:none;border:0;font-size:22px;line-height:1;padding:0 6px 0 0}"
  +".vtBd{flex:1;overflow:auto;padding:14px;-webkit-overflow-scrolling:touch}.vtNav{display:flex;border-top:1px solid var(--ln);background:#0b0d11;padding-bottom:env(safe-area-inset-bottom)}.vtNav button{flex:1;background:none;border:0;padding:9px 0;color:var(--mu);font-size:11px;display:flex;flex-direction:column;align-items:center;gap:2px}.vtNav button i{font-style:normal;font-size:18px}.vtNav button.on{color:var(--ac)}"
  +".vtC{background:var(--sf);border:1px solid var(--ln);border-radius:14px;padding:14px;margin-bottom:12px}.vtC h4{margin:0 0 10px;font-size:13px;color:var(--mu);font-weight:600}.vtBig{font-size:28px;font-weight:700}.vtRow{display:flex;justify-content:space-between;gap:10px;padding:7px 0;color:var(--mu)}.vtRow b{color:#F5F5F5;font-weight:600}.up{color:var(--up)!important}.dn{color:var(--dn)!important}"
  +".vtBar{height:8px;background:#1b1e24;border-radius:99px;overflow:hidden}.vtBar i{display:block;height:100%;background:var(--up);border-radius:99px}.vtTabs{display:flex;gap:6px;overflow:auto;margin-bottom:10px}.vtTabs button{background:none;border:0;padding:8px 12px;color:var(--mu);border-radius:99px;white-space:nowrap}.vtTabs button.on{background:var(--ac);color:#080A0D;font-weight:700}"
  +".vtMk{display:flex;align-items:center;gap:12px;width:100%;background:none;border:0;border-bottom:1px solid #15171c;padding:12px 2px;text-align:left}.vtMk div{flex:1;min-width:0}.vtMk small{display:block;color:var(--mu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vtMk span:last-child{text-align:right;font-variant-numeric:tabular-nums}.vtIc{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#080A0D;flex:none}"
  +".vtBS{display:flex;gap:10px;margin:10px 0}.vtBS button{flex:1;border:0;border-radius:10px;padding:12px;font-weight:700;color:#fff}.vtBuy{background:#22C55E}.vtSell{background:#F04452}.vtBS .vtBuy,.vtStick .vtBuy{color:#06140D}.vtBS small{display:block;font-weight:500;opacity:.9}.vtOff{opacity:.35}"
  +".vtBtn{width:100%;border:0;border-radius:10px;padding:14px;font-weight:700;background:var(--ac);color:#080A0D}.vtGh{width:100%;border:1px solid var(--ac);background:none;border-radius:10px;padding:13px;color:var(--ac);font-weight:700}.vtChw{flex:1;min-height:140px;margin:0;position:relative;touch-action:none}.vtChw #vtCh{position:absolute;inset:0}.vtLot{display:flex;gap:8px}.vtLot button{width:46px;border:1px solid var(--ln);background:#0d0f13;border-radius:10px;font-size:20px}"
  +".vtCh{display:flex;gap:6px;margin:8px 0;flex-wrap:wrap}.vtCh button{background:#0d0f13;border:1px solid var(--ln);border-radius:8px;padding:7px 11px;color:var(--mu)}.vtCh button.on{border-color:var(--ac);color:var(--ac)}.vtLb{color:var(--mu);font-size:12px;margin:12px 0 5px;display:block}.vtTag{font-size:11px;padding:3px 8px;border-radius:99px;border:1px solid var(--ln);color:var(--mu)}.vtTag.g{color:var(--up);border-color:var(--up)}.vtTag.r{color:var(--dn);border-color:var(--dn)}"
  +".vtSheet{position:fixed;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:flex-end;z-index:2}.vtSheet>div{background:#0f1116;width:100%;border-radius:18px 18px 0 0;padding:16px;max-height:88%;overflow:auto;border-top:1px solid var(--ln)}.vtToast{position:fixed;left:14px;right:14px;top:calc(12px + env(safe-area-inset-top));z-index:400;padding:12px 14px;border-radius:12px;background:#111318;border:1px solid var(--ln);display:none}.vtToast.on{display:block}.vtToast.ok{border-color:var(--up)}.vtToast.no{border-color:var(--dn)}"
  +".vtBd.vtT{padding:0;max-width:1320px;width:100%;margin:0 auto;display:flex;flex-direction:column;overflow:hidden}.vtSym{display:flex;align-items:center;gap:10px}.vtGrid{display:flex;flex-direction:column;flex:1;min-height:0}.vtL{display:flex;flex-direction:column;flex:1;min-height:0}"
  +""
  +""
  +"#vtApp button.vtTag{background:#191B21;color:#F5F5F5}.vtStops{display:flex;gap:8px;flex-wrap:wrap;min-height:34px;align-items:center;margin:4px 0}.vtStops button{background:#0d0f13;border:1px solid var(--ln);border-radius:99px;padding:7px 14px;font-size:13px;font-weight:600}.vtStops .sl{border-color:var(--dn);color:var(--dn)}.vtStops .tp{border-color:var(--up);color:var(--up)}.vtHint{color:var(--mu);font-size:12px;margin:2px 0 8px}"
  +".vtStick{position:relative;flex:none;z-index:3;margin:0;padding:8px 10px;background:#080A0D;border-top:1px solid var(--ln);display:flex;gap:8px;align-items:stretch}.vtStick.inst{border-top-color:var(--ac)}"
  +".vtStick .vtSd{flex:1;border:0;border-radius:12px;padding:10px 6px;font-weight:700;font-size:16px;color:#fff;min-height:56px}.vtStick .vtSd small{display:block;font-weight:600;font-size:13px;opacity:.9;font-variant-numeric:tabular-nums}.vtStick.inst .vtOff{opacity:1}.vtStick .vtOff{opacity:.4}"
  +".vtLotB{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-width:118px}.vtLotB>div{display:flex;align-items:center;gap:4px}.vtLotB>div button{width:32px;height:32px;border:1px solid var(--ln);background:#0d0f13;border-radius:9px;font-size:18px;line-height:1;padding:0}.vtLotB input{width:56px;text-align:center;padding:6px 2px;border-radius:9px}"
  +".vtInstB{display:flex;align-items:center;gap:7px;background:none;border:0;color:var(--mu);font-size:12px;font-weight:600;padding:0}.vtInstB.on{color:var(--ac)}.vtSw{position:relative;display:inline-block;width:34px;height:19px;border-radius:99px;background:#292B32}.vtSw:after{content:\"\";position:absolute;top:3px;left:3px;width:13px;height:13px;border-radius:50%;background:#A1A1AA;transition:left .15s}.vtSw.on{background:var(--ac)}.vtSw.on:after{left:18px;background:#080A0D}#vtApp .vtLotB input{width:56px;padding:6px 2px}.vtStick .vtSd{min-width:0;white-space:nowrap;padding:8px 4px}.vtLotB{flex:0 0 auto}.vtTop{display:flex;align-items:center;gap:6px;padding:6px 10px;flex:none}.vtSymB{background:none;border:0;font-size:16px;padding:4px 2px}.vtPxB{font-size:18px;font-weight:700;font-variant-numeric:tabular-nums}.vtChgB{font-size:12px}#vtApp .vtIcB{background:none;border:0;font-size:20px;line-height:1;padding:4px 6px;color:var(--mu)}.vtTfR{display:flex;align-items:center;gap:4px;padding:0 10px 4px;flex:none;overflow:auto}.vtTfR button{background:none;border:1px solid transparent;border-radius:8px;padding:5px 9px;color:var(--mu);font-size:12px;flex:none}.vtTfR button.on{border-color:var(--ac);color:var(--ac)}.vtNm{margin-left:auto;padding-left:8px;color:var(--mu);font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:42%}.vtChw .vtStops{position:absolute;left:8px;top:8px;z-index:3;margin:0;min-height:0;gap:6px}.vtChw .vtStops button{padding:4px 10px;font-size:12px;background:rgba(13,15,19,.85)}#vtNote{position:absolute;left:8px;bottom:6px;font-size:10px;color:var(--mu);z-index:2;pointer-events:none;max-width:70%}.vtStick .vtSd{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:6px 12px;font-size:11px;min-height:54px;opacity:1}.vtStick .vtBuy{align-items:flex-end}.vtStick .vtSd small{font-size:19px;font-weight:700;opacity:1}.vtStick .vtSd[disabled]{opacity:.35}.vtStick .vtOff{opacity:1}#vtApp input[type=color]{width:46px;height:34px;padding:2px;border-radius:8px}#vtApp input[type=range]{padding:0;border:0;background:none}.vtCfgRow{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid #15171c}.vtPre{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.vtPre button{display:flex;align-items:center;gap:6px;background:#0d0f13;border:1px solid var(--ln);border-radius:10px;padding:8px 10px}.vtPre button.vtSel{border-color:var(--ac);color:var(--ac)}.vtPre i{width:12px;height:12px;border-radius:3px;display:inline-block}#vtCfgB{background:#0d0f13;border:1px solid var(--ln);border-radius:8px;padding:7px 11px;color:var(--mu)}";
  document.head.appendChild(s)}
function vtIcon(i){var col={metals:"#F5B84B",forex:"#4C8DF6",indices:"#9B7BFF",crypto:"#F7931A",energy:"#A78BFA"}[i.c]||"#3B82F6";return'<span class="vtIc" style="background:'+col+'">'+esc(i.id.slice(0,3))+'</span>'}
function vtChg(id){var b=VBK[id];if(!b||b.closed||b.ph)return"—";var p=b.pct||0;return(p>0?"+":"")+p.toFixed(2)+"%"}
function vtNavHtml(){return[["home","⌂","Home"],["mkts","▥","Markets"],["trade","⇄","Trade"],["pos","☷","Positions"],["more","☰","More"]].map(function(k){return'<button type="button" data-vt="'+k[0]+'" class="'+(VT.tab===k[0]?"on":"")+'"><i>'+k[1]+'</i>'+k[2]+'</button>'}).join("")}
function vtStat(a){var s=vtSnap(a),g=PRG[a.pk],pr=a.target>0?Math.max(0,Math.min(100,(a.balance-a.size)/(a.size*a.target/100)*100)):0;return{s:s,pr:pr,days:PE.ledger(a).days}}
function vtRender(){
  var a=vtAcc();if(!a){vtShut();return}
  fuFix(a);
  vtSaveView();
  var h='<div class="vtHd"><button type="button" id="vtX" aria-label="Back">&#8249;</button><b>VEKXT TRADER</b>'+(a.fut?'<span class="fuTag">FUTURES</span>':'')+'<small>'+esc(a.program)+" "+kfmt(a.size)+'<br>ID '+esc(a.id)+'</small></div><div class="vtBd'+(VT.tab==="trade"?(a.fut?" fuT":" vtT"):"")+'" id="vtBd">'+vtBody(a)+'</div><div class="vtNav">'+vtNavHtml()+'</div><div class="vtToast" id="vtToast"></div>';
  $("vtApp").className=a.fut?"fut":"";$("vtApp").innerHTML=h;vtBind(a);vtPaint();
  if(VT.tab==="trade")vtMkChart()}
function vtStatusTag(a){return a.status==="breached"?'<span class="vtTag r">Breached</span>':a.status==="passed"?'<span class="vtTag g">'+L("Lolos","Passed")+'</span>':a.isFunded?'<span class="vtTag g">Funded</span>':'<span class="vtTag g">'+L("Berjalan","In Progress")+'</span>'}
function vtBody(a){
  if(a.fut)return fuBody(a);
  var tb=VT.tab;
  if(tb==="home"){var l=vtList(),sel=l.length>1?'<select id="vtSel">'+l.map(function(x){return'<option value="'+esc(x.id)+'"'+(x.id===a.id?" selected":"")+'>'+esc(x.program)+" "+kfmt(x.size)+" · "+esc(x.id)+(x.status!=="active"?" ("+x.status+")":"")+'</option>'}).join("")+'</select>':"";
    return sel+'<div class="vtC"><h4>Account Balance</h4><div class="vtBig" data-k="bal"></div><div class="vtRow"><span>Equity</span><b data-k="eq"></b></div><div class="vtRow"><span>P/L</span><b data-k="pnl"></b></div></div>'
    +(a.target>0?'<div class="vtC"><h4>'+esc(a.program)+(a.phase?" · "+L("Fase","Phase")+" "+a.phase+"/"+a.phases:"")+' &middot; Challenge</h4><div class="vtRow"><span>'+L("Progres target","Target progress")+'</span><b data-k="pr"></b></div><div class="vtBar"><i data-k="prb" style="width:0"></i></div><div class="vtRow"><span>'+L("Profit","Profit")+' / Target</span><b data-k="tg"></b></div></div>':'<div class="vtC"><h4>'+esc(a.program)+' &middot; '+(a.isFunded?"Funded":"")+'</h4><div class="vtRow"><span>Profit</span><b data-k="pnl2"></b></div></div>')
    +'<div class="vtBS"><button type="button" class="vtBuy" data-go="trade">Trade</button><button type="button" class="vtGh" data-go="mkts" style="flex:1">Markets</button></div><div class="vtBS"><button type="button" class="vtGh" data-go="pos">Positions</button><button type="button" class="vtGh" data-go="more">Challenge</button></div>'}
  if(tb==="mkts"){var fav=vtFav(),ls=VI.filter(function(i){return !i.fo&&(VT.cat==="fav"?fav.indexOf(i.id)>-1:i.c===VT.cat)});
    return'<div class="vtTabs">'+VCAT.map(function(c){return'<button type="button" data-cat="'+c[0]+'" class="'+(VT.cat===c[0]?"on":"")+'">'+c[1]+'</button>'}).join("")+'</div>'+(ls.length?ls.map(function(i){return'<button type="button" class="vtMk" data-sym="'+i.id+'">'+vtIcon(i)+'<div><b>'+i.id+'</b><small>'+esc(i.n)+'</small></div><span><b data-p="'+i.id+'">—</b><small data-c="'+i.id+'">—</small></span></button>'}).join(""):'<p class="vtRow">'+L("Belum ada favorit. Buka instrumen lalu tekan bintang.","No favorites yet. Open an instrument and tap the star.")+'</p>')}
  if(tb==="trade")return vtTradeHtml(a);
  if(tb==="pos")return vtPosHtml(a);
  return vtMoreHtml(a)}
/* ---- pengaturan chart (disimpan di browser) ---- */
var VCC_D={gv:true,gh:true,ga:0.5,up:"#22C55E",dn:"#F04452",hollow:false,border:false,pline:true,mag:false,snd:true,bg:"d"};
var VCC_PRE=[["Classic","#22C55E","#F04452"],["Biru / Oranye","#3B82F6","#F59E0B"],["Mono","#E5E7EB","#6B7280"],["Emas","#F5B84B","#8B5CF6"]];
var VCC_BG={d:"transparent",k:"#000000",b:"#0b1220",g:"#111318"},vtView={},vtCache={};
function vtCfg(){var c={};try{c=JSON.parse(localStorage.getItem("vtChartCfg")||"{}")||{}}catch(e){}var o={};for(var k in VCC_D)o[k]=(k in c)?c[k]:VCC_D[k];return o}
function vtCfgSave(c){try{localStorage.setItem("vtChartCfg",JSON.stringify(c))}catch(e){}}
function vtGridCol(c){return"rgba(255,255,255,"+(0.02+0.16*c.ga).toFixed(3)+")"}
function vtChartOpts(c){return{layout:{background:{type:"solid",color:VCC_BG[c.bg]||"transparent"},textColor:"#A1A1AA"},grid:{vertLines:{visible:!!c.gv,color:vtGridCol(c)},horzLines:{visible:!!c.gh,color:vtGridCol(c)}},crosshair:{mode:c.mag?1:0}}}
function vtSerOpts(c){return{upColor:c.hollow?"rgba(0,0,0,0)":c.up,downColor:c.dn,borderVisible:!!(c.border||c.hollow),borderUpColor:c.up,borderDownColor:c.dn,wickUpColor:c.up,wickDownColor:c.dn,priceLineVisible:!!c.pline}}
function vtCfgApply(){var c=vtCfg();try{if(vtCh)vtCh.applyOptions(vtChartOpts(c));if(vtCs)vtCs.applyOptions(vtSerOpts(c))}catch(e){}}
/* posisi geser/zoom chart diingat per instrumen dan timeframe, jadi tidak lompat saat pindah tab */
function vtSaveView(){if(!vtCh||!vtBarKey)return;try{var r=vtCh.timeScale().getVisibleLogicalRange();if(r)vtView[vtBarKey]={f:r.from,t:r.to,n:vtBars.length}}catch(e){}}
function vtRestoreView(){var v=vtView[vtBarKey];if(!v||!vtCh)return false;var dn=vtBars.length-v.n;try{vtCh.timeScale().setVisibleLogicalRange({from:v.f+dn,to:v.t+dn});return true}catch(e){return false}}
function vtCfgSheet(){
  var old=$("vtCfgS");if(old)old.remove();var c=vtCfg(),d=document.createElement("div");d.className="vtSheet";d.id="vtCfgS";
  var sw=function(k,t){return'<div class="vtCfgRow"><span>'+t+'</span><button type="button" class="vtInstB'+(c[k]?" on":"")+'" data-ck="'+k+'"><span class="vtSw'+(c[k]?" on":"")+'"></span></button></div>'};
  d.innerHTML='<div><b>'+L("Pengaturan chart","Chart settings")+'</b><span class="vtLb">'+L("Tema candle","Candle theme")+'</span><div class="vtPre">'+VCC_PRE.map(function(p,k){return'<button type="button" data-cp="'+k+'"><i style="background:'+p[1]+'"></i><i style="background:'+p[2]+'"></i>'+p[0]+'</button>'}).join("")+'</div>'
  +'<div class="vtCfgRow"><span>'+L("Warna candle naik","Up candle color")+'</span><input type="color" id="ccUp" value="'+c.up+'"></div><div class="vtCfgRow"><span>'+L("Warna candle turun","Down candle color")+'</span><input type="color" id="ccDn" value="'+c.dn+'"></div>'
  +sw("hollow",L("Candle naik kosong","Hollow up candles"))+sw("border",L("Garis tepi candle","Candle border"))+sw("gv",L("Grid vertikal","Vertical grid"))+sw("gh",L("Grid horizontal","Horizontal grid"))
  +'<div class="vtCfgRow"><span>'+L("Intensitas grid","Grid intensity")+'</span><input type="range" id="ccGa" min="0" max="1" step="0.05" value="'+c.ga+'" style="width:140px"></div>'
  +sw("pline",L("Garis harga terakhir","Last price line"))+sw("mag",L("Crosshair magnet","Magnet crosshair"))+sw("snd",L("Suara order","Order sound"))
  +'<span class="vtLb">'+L("Latar chart","Chart background")+'</span><div class="vtPre">'+[["d",L("Gelap","Dark")],["k",L("Hitam","Black")],["b",L("Biru gelap","Navy")],["g",L("Abu","Gray")]].map(function(x){return'<button type="button" data-cb="'+x[0]+'" class="'+(c.bg===x[0]?"vtSel":"")+'">'+x[1]+'</button>'}).join("")+'</div>'
  +'<div class="vtBS"><button type="button" class="vtGh" id="ccReset">Reset</button><button type="button" class="vtBtn" id="ccX">'+L("Selesai","Done")+'</button></div></div>';
  $("vtApp").appendChild(d);
  var upd=function(k,v){c[k]=v;vtCfgSave(c);vtCfgApply()};
  d.onclick=function(e){if(e.target===d)d.remove()};
  d.querySelectorAll("[data-ck]").forEach(function(b){b.onclick=function(){var k=b.dataset.ck,v=!c[k];upd(k,v);b.classList.toggle("on",v);b.querySelector(".vtSw").classList.toggle("on",v)}});
  d.querySelectorAll("[data-cp]").forEach(function(b){b.onclick=function(){var p=VCC_PRE[+b.dataset.cp];c.up=p[1];c.dn=p[2];vtCfgSave(c);vtCfgApply();$("ccUp").value=p[1];$("ccDn").value=p[2]}});
  d.querySelectorAll("[data-cb]").forEach(function(b){b.onclick=function(){upd("bg",b.dataset.cb);d.querySelectorAll("[data-cb]").forEach(function(x){x.classList.toggle("vtSel",x===b)})}});
  $("ccUp").oninput=function(){upd("up",this.value)};$("ccDn").oninput=function(){upd("dn",this.value)};$("ccGa").oninput=function(){upd("ga",+this.value)};
  $("ccReset").onclick=function(){vtCfgSave({});vtCfgApply();vtCfgSheet()};$("ccX").onclick=function(){d.remove()}}
/* ---- form order (Market/Limit, TP, SL) sebagai popup; nilai draft tetap disimpan di input tersembunyi #vtHold ---- */
function vtFormHtml(){
  var a=vtAcc(),i=VIX[VT.sym],on=a&&a.status==="active",lim=VT.ot==="limit",bs=VT.side==="buy",g=function(id){var e=$(id);return e?e.value:""};
  return'<b>'+i.id+' \u00b7 '+L("Order","Order")+'</b><div class="vtBS" style="margin-top:10px"><button type="button" class="vtBuy'+(bs?"":" vtOff")+'" data-os="buy">BUY</button><button type="button" class="vtSell'+(bs?" vtOff":"")+'" data-os="sell">SELL</button></div>'
  +'<div class="vtTabs"><button type="button" data-oo="market" class="'+(!lim?"on":"")+'">Market</button><button type="button" data-oo="limit" class="'+(lim?"on":"")+'">Limit</button></div>'
  +'<span class="vtLb">Volume (Lot)</span><div class="vtLot"><button type="button" data-ol="-">\u2212</button><input id="osLot" inputmode="decimal" value="'+VT.lot+'"><button type="button" data-ol="+">+</button></div><div style="color:var(--mu);font-size:12px;margin-top:4px">1 Lot = '+i.cs.toLocaleString("en-US")+' '+i.u+' \u00b7 1:'+i.lev+'</div>'
  +'<div class="vtCh">'+[0.01,0.05,0.1,0.5,1].map(function(v){return'<button type="button" data-oq="'+v+'">'+v+'</button>'}).join("")+'</div>'
  +(lim?'<span class="vtLb">'+L("Harga limit","Limit price")+'</span><input id="osPx" inputmode="decimal" value="'+g("vtPx")+'">':"")
  +'<span class="vtLb">Take Profit (TP)</span><input id="osTp" inputmode="decimal" placeholder="\u2014" value="'+g("vtTp")+'"><span class="vtLb">Stop Loss (SL)</span><input id="osSl" inputmode="decimal" placeholder="\u2014" value="'+g("vtSl")+'">'
  +'<button type="button" class="vtBtn" id="vtGo" style="margin-top:14px;background:'+(bs?"#22C55E":"#F04452")+';color:'+(bs?"#06140D":"#fff")+'"'+(on?"":" disabled")+'>'+(bs?"BUY":"SELL")+' \u00b7 Place Order</button>'
  +'<div class="vtRow"><span>Margin Required</span><b data-k="mreq">\u2014</b></div><div class="vtRow"><span>'+L("Biaya spread","Spread cost")+'</span><b data-k="sprd">\u2014</b></div><button type="button" class="vtTag" id="osX" style="width:100%;padding:10px;margin-top:6px">'+L("Tutup","Dismiss")+'</button>'}
function vtOrdSheet(){
  var old=$("vtOrdS");if(old)old.remove();var d=document.createElement("div");d.className="vtSheet";d.id="vtOrdS";d.innerHTML="<div>"+vtFormHtml()+"</div>";$("vtApp").appendChild(d);
  var sync=function(){["Sl","Tp","Px"].forEach(function(k){var o=$("os"+k),h=$("vt"+k);if(o&&h)h.value=o.value});vtLsig="";vtSyncLines();vtStopsUI()};
  d.onclick=function(e){if(e.target===d)d.remove()};
  d.querySelectorAll("[data-os]").forEach(function(b){b.onclick=function(){sync();VT.side=b.dataset.os;vtOrdSheet()}});
  d.querySelectorAll("[data-oo]").forEach(function(b){b.onclick=function(){sync();VT.ot=b.dataset.oo;vtOrdSheet()}});
  d.querySelectorAll("[data-oq]").forEach(function(b){b.onclick=function(){vtSetLot(+b.dataset.oq)}});
  d.querySelectorAll("[data-ol]").forEach(function(b){b.onclick=function(){vtSetLot(vtStepLot(b.dataset.ol==="+"?1:-1))}});
  $("osLot").oninput=function(){var v=+this.value;if(v>0){VT.lot=v;["vtLot","vtLotB"].forEach(function(k){var e=$(k);if(e)e.value=this.value}.bind(this))}};
  ["Sl","Tp","Px"].forEach(function(k){var o=$("os"+k);if(o)o.oninput=sync});
  $("osX").onclick=function(){d.remove()};
  $("vtGo").onclick=function(){sync();if(vtPlace())d.remove()};
  vtPaint()}
function vtTradeHtml(a){
  var i=VIX[VT.sym],fav=vtFav().indexOf(i.id)>-1,on=a.status==="active";
  var top='<div class="vtTop"><button type="button" id="vtPick" class="vtSymB"><b>'+i.id+'</b> &#9662;</button><span class="vtPxB" data-p="'+i.id+'">\u2014</span><span class="vtChgB" data-c="'+i.id+'"></span><span class="vtTag" data-m="'+i.id+'"></span><span style="flex:1"></span>'
   +'<button type="button" id="vtStar" class="vtIcB" style="color:'+(fav?"var(--ac)":"var(--mu)")+'">'+(fav?"\u2605":"\u2606")+'</button>'
   +'<button type="button" class="vtInstB'+(VT.inst?" on":"")+'" id="vtInst"><span class="vtSw'+(VT.inst?" on":"")+'"></span>'+L("Instan","Instant")+'</button>'
   +'<button type="button" id="vtOrdB" class="vtTag">Order</button><button type="button" id="vtCfgB" class="vtIcB" aria-label="Chart settings">&#9881;</button></div>';
  var tf='<div class="vtTfR">'+VTF.map(function(f,k){return'<button type="button" data-tf="'+k+'" class="'+(VT.tf===k?"on":"")+'">'+f[1]+'</button>'}).join("")+'<span class="vtNm">'+esc(i.n)+'</span></div>';
  var chart='<div class="vtChw"><div id="vtCh"></div><div class="vtStops" id="vtStops"></div><div id="vtNote"></div></div>';
  var bar='<div class="vtStick'+(VT.inst?" inst":"")+'" id="vtBar"><button type="button" class="vtSd vtSell" data-bs="sell"'+(on?"":" disabled")+'>SELL<small data-bid="'+i.id+'">\u2014</small></button>'
   +'<div class="vtLotB"><div><button type="button" data-bl="-">\u2212</button><input id="vtLotB" inputmode="decimal" value="'+VT.lot+'"><button type="button" data-bl="+">+</button></div></div>'
   +'<button type="button" class="vtSd vtBuy" data-bs="buy"'+(on?"":" disabled")+'>BUY<small data-ask="'+i.id+'">\u2014</small></button></div>';
  return'<div class="vtGrid"><div class="vtL">'+top+tf+chart+'</div></div><div style="display:none" id="vtHold"><input id="vtLot" value="'+VT.lot+'"><input id="vtPx"><input id="vtTp"><input id="vtSl"></div>'+bar}
function vtPosHtml(a){
  var tabs='<div class="vtTabs">'+[["open","Open Positions"],["pend","Pending Orders"],["hist","History"]].map(function(k){return'<button type="button" data-pt="'+k[0]+'" class="'+(VT.pt===k[0]?"on":"")+'">'+k[1]+'</button>'}).join("")+'</div>';
  if(VT.pt==="open"){var ps=Object.keys(a.positions);
    return tabs+'<div class="vtC"><div class="vtRow"><span>Equity</span><b data-k="eq"></b></div><div class="vtRow"><span>P/L</span><b data-k="pnl"></b></div></div>'+(ps.length?ps.map(function(s){var p=a.positions[s],i=VIX[s],long=p.side==="long";
      return'<button type="button" class="vtMk" data-pos="'+s+'">'+vtIcon(i)+'<div><b>'+s+' <span class="'+(long?"up":"dn")+'">'+(long?"BUY":"SELL")+'</span></b><small>'+(p.qty/i.cs).toFixed(2)+' lot · '+vtFmt(s,p.entry)+' → <span data-p="'+s+'" data-side="'+p.side+'"></span></small></div><span><b data-pp="'+s+'">—</b></span></button>'}).join("")+'<button type="button" class="vtGh" id="vtCloseAll" style="margin-top:14px">Close All</button>':'<p class="vtRow">'+L("Tidak ada posisi terbuka.","No open positions.")+'</p>')}
  if(VT.pt==="pend")return tabs+(a.orders.length?a.orders.map(function(o){var i=VIX[o.symbol];return'<div class="vtMk">'+vtIcon(i)+'<div><b>'+o.symbol+' <span class="'+(o.side==="buy"?"up":"dn")+'">'+o.side.toUpperCase()+' LIMIT</span></b><small>'+(o.qty/i.cs).toFixed(2)+' lot @ '+vtFmt(o.symbol,o.price)+'</small></div><button type="button" class="vtTag" data-cx="'+o.id+'">'+L("Batal","Cancel")+'</button></div>'}).join(""):'<p class="vtRow">'+L("Tidak ada order pending.","No pending orders.")+'</p>');
  var tr=(a.trades||[]).slice(-60).reverse();
  return tabs+(tr.length?tr.map(function(x){var i=VIX[x.s];return'<div class="vtMk">'+(i?vtIcon(i):"")+'<div><b>'+x.s+' <span class="'+(x.d==="BUY"?"up":"dn")+'">'+x.d+'</span></b><small>'+(i?(x.v/i.cs).toFixed(2):x.v)+' lot · '+vtFmt(x.s,x.o)+' → '+vtFmt(x.s,x.c)+'</small></div><span><b class="'+(x.p>=0?"up":"dn")+'">'+vtM(x.p)+'</b></span></div>'}).join(""):'<p class="vtRow">'+L("Belum ada riwayat.","No history yet.")+'</p>')}
function vtMoreHtml(a){
  var rules='<div class="vtRow"><span>Max Daily Drawdown</span><b>'+a.rules.dailyDd+'%</b></div><div class="vtRow"><span>Max Overall Drawdown</span><b>'+a.rules.maxDd+'%'+(a.rules.trailing?" (trailing)":"")+'</b></div>'+(a.target>0?'<div class="vtRow"><span>Profit Target</span><b>'+a.target+'%</b></div><div class="vtRow"><span>Minimum Trading Days</span><b>'+a.minDays+'</b></div>':"");
  return'<div class="vtC"><div style="display:flex;justify-content:space-between;align-items:center"><b>Challenge</b>'+vtStatusTag(a)+'</div>'+(a.target>0?'<div class="vtRow"><span>'+L("Progres target","Target progress")+'</span><b data-k="pr"></b></div><div class="vtBar"><i data-k="prb" style="width:0"></i></div>':"")
  +'<div class="vtRow"><span>Account Balance</span><b data-k="bal"></b></div><div class="vtRow"><span>Equity</span><b data-k="eq"></b></div><div class="vtRow"><span>Daily Drawdown</span><b data-k="dd"></b></div><div class="vtRow"><span>Max Drawdown</span><b data-k="md"></b></div>'+(a.target>0?'<div class="vtRow"><span>Trading Days</span><b data-k="days"></b></div>':"")+'</div>'
  +'<div class="vtC"><h4>Rules</h4>'+rules+'</div>'
  +'<div class="vtBS"><button type="button" class="vtGh" data-nav="wd">Withdrawal</button><button type="button" class="vtGh" data-nav="cert">'+L("Sertifikat","Certificate")+'</button></div><button type="button" class="vtGh" id="vtBack" style="margin-top:10px">'+L("Kembali ke dashboard","Back to dashboard")+'</button>'}
/* angka yang berubah tiap detik diperbarui tanpa merender ulang, supaya isian tidak hilang */
function vtSet(q,v,c){document.querySelectorAll(q).forEach(function(e){e.textContent=v;if(c!==undefined){e.classList.remove("up","dn");if(c)e.classList.add(c)}})}
function vtPaint(){
  var a=vtAcc();if(!a)return;var S=vtStat(a),s=S.s,pf=s.equity-a.size,cl=function(x){return x>0.004?"up":x<-0.004?"dn":""};
  vtSet('[data-k="bal"]',vtM(s.balance));vtSet('[data-k="eq"]',vtM(s.equity));vtSet('[data-k="pnl"]',(pf>0?"+":"")+vtM(pf),cl(pf));vtSet('[data-k="pnl2"]',(pf>0?"+":"")+vtM(pf),cl(pf));
  if(a.target>0){vtSet('[data-k="pr"]',S.pr.toFixed(1)+"%");vtSet('[data-k="tg"]',vtM(Math.max(0,a.balance-a.size))+" / "+vtM(a.size*a.target/100));document.querySelectorAll('[data-k="prb"]').forEach(function(e){e.style.width=S.pr+"%"})}
  vtSet('[data-k="dd"]',vtM(s.dailyLoss)+" / "+vtM(s.dailyLimit));vtSet('[data-k="md"]',vtM(s.maxLoss)+" / "+vtM(s.maxLimit));vtSet('[data-k="days"]',S.days+" / "+a.minDays);
  document.querySelectorAll("[data-p]").forEach(function(e){var id=e.dataset.p,b=VBK[id];if(!b||b.ph)return;var side=e.dataset.side,px=side?(side==="long"?b.bid:b.ask):b.mid;e.textContent=vtFmt(id,px)});
  document.querySelectorAll("[data-c]").forEach(function(e){var id=e.dataset.c,b=VBK[id],v=vtChg(id);e.textContent=v;e.classList.remove("up","dn");if(b&&!b.closed&&!b.ph)e.classList.add((b.pct||0)>=0?"up":"dn")});
  document.querySelectorAll("[data-ask]").forEach(function(e){var b=VBK[e.dataset.ask];if(b&&!b.ph)e.textContent=vtFmt(e.dataset.ask,b.ask)});
  document.querySelectorAll("[data-bid]").forEach(function(e){var b=VBK[e.dataset.bid];if(b&&!b.ph)e.textContent=vtFmt(e.dataset.bid,b.bid)});
  document.querySelectorAll("[data-m]").forEach(function(e){e.textContent=vtLive(e.dataset.m)?"LIVE":L("Pasar tutup","Market closed")});
  document.querySelectorAll("[data-pp]").forEach(function(e){var p=s.positions.filter(function(x){return x.symbol===e.dataset.pp})[0];if(!p)return;e.textContent=(p.upnl>0?"+":"")+vtM(p.upnl);e.classList.remove("up","dn");e.classList.add(p.upnl>=0?"up":"dn")});
  var i=VIX[VT.sym],ml=$("vtLot");if(VT.tab==="trade"&&ml){var b=VBK[i.id],lots=+ml.value||0,px=b&&!b.ph?(VT.side==="buy"?b.ask:b.bid):0;
    vtSet('[data-k="mreq"]',px&&lots?vtM(lots*i.cs*px*(PE.QC[i.id]?PE.QC[i.id](px):1)/i.lev):"—");vtSet('[data-k="sprd"]',b&&!b.ph&&lots?vtM(lots*i.cs*(b.ask-b.bid)*(PE.QC[i.id]?PE.QC[i.id](b.mid):1)):"—")}
  var sig=Object.keys(a.positions).join()+a.orders.length+(a.trades||[]).length+a.status;if(VT.tab==="pos"&&sig!==vtSig){vtSig=sig;vtRender()}vtSig=sig;
  if(VT.tab==="trade")vtSyncLines();
  if(a.fut)fuPaint(a,s)}
/* ---- aksi ---- */
function vtPrice(){var b=VBK[VT.sym];return b&&!b.ph?(VT.side==="buy"?b.ask:b.bid):0}
function vtOrder(side,ot,lots,px0,sl,tp){
  var a=vtAcc(),i=VIX[VT.sym],b=VBK[i.id];
  if(!a||a.status!=="active")return vtToast(L("Akun tidak aktif.","Account is not active."),false);
  if(!vtLive(i.id))return vtToast(L("Pasar tutup atau harga belum tersedia.","Market closed or no price yet."),false);
  lots=Math.round(lots*100)/100;
  if(!(lots>=0.01&&lots<=50))return vtToast(L("Volume harus 0.01 sampai 50 lot.","Volume must be 0.01 to 50 lots."),false);
  var buy=side==="buy",lim=ot==="limit",px=lim?px0:(buy?b.ask:b.bid);
  if(lim&&!(px>0))return vtToast(L("Isi harga limit.","Enter a limit price."),false);
  if(lim&&(buy?px>=b.ask:px<=b.bid))return vtToast(buy?L("Buy limit harus di bawah harga beli.","Buy limit must be below the ask."):L("Sell limit harus di atas harga jual.","Sell limit must be above the bid."),false);
  if(sl&&(buy?sl>=px:sl<=px))return vtToast(L("Stop Loss di sisi yang salah.","Stop Loss is on the wrong side."),false);
  if(tp&&(buy?tp<=px:tp>=px))return vtToast(L("Take Profit di sisi yang salah.","Take Profit is on the wrong side."),false);
  var r=PE.placeOrder(a,{symbol:i.id,side:side,qty:Math.round(lots*i.cs*1e8)/1e8,type:ot,price:lim?px:0,sl:sl||0,tp:tp||0},VBK,fuCfg(a));
  if(!r.ok)return vtToast(L(VERR[r.error]?VERR[r.error][0]:r.error,VERR[r.error]?VERR[r.error][1]:r.error),false);
  pSave();pPush(true);
  var ev=r.events||[],op=ev.filter(function(e){return e.type==="open"})[0],cl=ev.filter(function(e){return e.type==="close"})[0];
  vtSnd(cl?(cl.pnl>=0?"win":"loss"):"fill");
  vtToast(!r.filled?L("Order limit dipasang.","Limit order placed."):op?(side.toUpperCase()+" "+lots+" "+i.id+" @ "+vtFmt(i.id,r.price)):cl?(L("Posisi ditutup ","Position closed ")+i.id+" "+vtM2(cl.pnl)):(side.toUpperCase()+" "+lots+" "+i.id),true);
  if(r.filled&&op&&(sl||tp)){var e1=$("vtSl"),e2=$("vtTp");if(e1)e1.value="";if(e2)e2.value=""}
  vtPosLines();vtStopsUI();return true}
function vtPlace(){var lim=VT.ot==="limit";return vtOrder(VT.side,VT.ot,+($("vtLot")||{}).value||VT.lot,lim?+($("vtPx")||{}).value:0,+($("vtSl")||{}).value||0,+($("vtTp")||{}).value||0)}
/* instan order: satu ketuk BUY/SELL langsung market order dengan lot terpilih (SL/TP dari garis chart ikut kalau sudah dipasang) */
function vtQuick(side){
  var n=Date.now();if(n-vtQAt<700)return;vtQAt=n;VT.side=side;
  var a=vtAcc(),p=a&&a.positions[VT.sym],opp=p&&((p.side==="long")!==(side==="buy"));
  vtOrder(side,"market",VT.lot,0,opp?0:(+($("vtSl")||{}).value||0),opp?0:(+($("vtTp")||{}).value||0))}
function vtStepLot(dir){var s=VT.lot>=1?0.1:0.01;return VT.lot+dir*s}
function vtSetLot(v){v=Math.round((+v||0)*100)/100;v=Math.max(0.01,Math.min(50,v));VT.lot=v;["vtLot","vtLotB","osLot"].forEach(function(k){var e=$(k);if(e&&document.activeElement!==e)e.value=v});vtPaint()}
function vtGoLabel(){var g=$("vtGo");if(!g)return;var b=VT.side==="buy";g.textContent=(b?"BUY":"SELL")+" \u00b7 Place Order";g.style.background=b?"#22C55E":"#F04452";g.style.color=b?"#06140D":"#fff"}
function vtInstUI(){var bar=$("vtBar"),sw=$("vtInst");if(bar)bar.classList.toggle("inst",VT.inst);if(sw){sw.classList.toggle("on",VT.inst);var k=sw.querySelector(".vtSw");if(k)k.classList.toggle("on",VT.inst)}vtStopsUI()}
function vtClosePos(s){
  var a=vtAcc(),p=a&&a.positions[s];if(!p)return;
  if(!vtLive(s))return vtToast(L("Pasar tutup. Posisi belum bisa ditutup.","Market closed. Cannot close the position yet."),false);
  var r=PE.placeOrder(a,{symbol:s,side:p.side==="long"?"sell":"buy",qty:p.qty,type:"market",reduceOnly:true},VBK,fuCfg(a));
  if(!r.ok)return vtToast(r.error,false);pSave();pPush(true);VT.sheet=null;vtRender()}
function vtSheetOpen(s){
  var a=vtAcc(),p=a&&a.positions[s];if(!p)return;var i=VIX[s],long=p.side==="long";VT.sheet=s;
  var d=document.createElement("div");d.className="vtSheet";d.id="vtSheet";
  d.innerHTML='<div><div style="display:flex;gap:10px;align-items:center;margin-bottom:10px"><span class="vtTag '+(long?"g":"r")+'">'+(long?"BUY":"SELL")+'</span><b>'+vtLotStr(p.qty,i)+s+'</b></div><div class="vtRow"><span>Entry Price</span><b>'+vtFmt(s,p.entry)+'</b></div><div class="vtRow"><span>Current Price</span><b data-p="'+s+'" data-side="'+p.side+'"></b></div><div class="vtRow"><span>P/L</span><b data-pp="'+s+'"></b></div><span class="vtLb">Stop Loss</span><input id="shSl" inputmode="decimal" value="'+(p.sl||"")+'"><span class="vtLb">Take Profit</span><input id="shTp" inputmode="decimal" value="'+(p.tp||"")+'"><div class="vtBS" style="margin-top:14px"><button type="button" class="vtGh" id="shClose">Close</button><button type="button" class="vtBtn" id="shMod">Modify</button></div><button type="button" class="vtTag" id="shX" style="width:100%;padding:10px">'+L("Tutup","Dismiss")+'</button></div>';
  $("vtApp").appendChild(d);vtPaint();
  $("shX").onclick=function(){d.remove();VT.sheet=null};$("shClose").onclick=function(){d.remove();vtClosePos(s)};
  $("shMod").onclick=function(){var sl=+$("shSl").value||0,tp=+$("shTp").value||0,b=VBK[s],ref=long?b.bid:b.ask;if(sl)sl=vtRound(s,sl);if(tp)tp=vtRound(s,tp);
    if(sl&&(long?sl>=ref:sl<=ref))return vtToast(L("Stop Loss di sisi yang salah.","Stop Loss is on the wrong side."),false);
    if(tp&&(long?tp<=ref:tp>=ref))return vtToast(L("Take Profit di sisi yang salah.","Take Profit is on the wrong side."),false);
    PE.setStops(a,s,{sl:sl,tp:tp});pSave();pPush(true);d.remove();VT.sheet=null;vtToast(L("SL/TP diperbarui.","SL/TP updated."),true);vtRender()}}
function vtPickHtml(){
  var d=document.createElement("div");d.className="vtSheet";d.id="vtPickS";
  d.innerHTML='<div><b>'+L("Pilih instrumen","Select instrument")+'</b>'+VI.filter(function(i){return !i.fo}).map(function(i){return'<button type="button" class="vtMk" data-pk="'+i.id+'">'+vtIcon(i)+'<div><b>'+i.id+'</b><small>'+esc(i.n)+'</small></div></button>'}).join("")+'</div>';
  $("vtApp").appendChild(d);d.onclick=function(e){var b=e.target.closest("[data-pk]");if(b){VT.sym=b.dataset.pk;d.remove();vtRender()}else if(e.target===d)d.remove()}}
function vtBind(a){
  var A=$("vtApp");$("vtX").onclick=vtShut;
  A.querySelectorAll(".vtNav [data-vt]").forEach(function(b){b.onclick=function(){VT.tab=b.dataset.vt;vtRender()}});
  A.querySelectorAll("[data-go]").forEach(function(b){b.onclick=function(){VT.tab=b.dataset.go;vtRender()}});
  A.querySelectorAll("[data-cat]").forEach(function(b){b.onclick=function(){VT.cat=b.dataset.cat;vtRender()}});
  A.querySelectorAll("[data-sym]").forEach(function(b){b.onclick=function(){VT.sym=b.dataset.sym;VT.tab="trade";vtRender()}});
  A.querySelectorAll("[data-pt]").forEach(function(b){b.onclick=function(){VT.pt=b.dataset.pt;vtRender()}});
  A.querySelectorAll("[data-pos]").forEach(function(b){b.onclick=function(){vtSheetOpen(b.dataset.pos)}});
  A.querySelectorAll("[data-cx]").forEach(function(b){b.onclick=function(){PE.cancelOrder(a,+b.dataset.cx);pSave();pPush(true);vtRender()}});
  A.querySelectorAll("[data-nav]").forEach(function(b){b.onclick=function(){view=b.dataset.nav;vtShut()}});
  var ca=$("vtCloseAll");if(ca)ca.onclick=function(){Object.keys(a.positions).forEach(vtClosePos);vtRender()};
  var bk=$("vtBack");if(bk)bk.onclick=vtShut;
  var sel=$("vtSel");if(sel)sel.onchange=function(){VT.acc=sel.value;vtRender()};
  if(a.fut){fuBind(a);return}
  if(VT.tab!=="trade")return;
  var st=$("vtStar");if(st)st.onclick=function(){var f=vtFav(),k=f.indexOf(VT.sym);if(k>-1)f.splice(k,1);else f.push(VT.sym);vtFavSet(f);vtRender()};
  $("vtPick").onclick=vtPickHtml;
  A.querySelectorAll("[data-tf]").forEach(function(b){b.onclick=function(){VT.tf=+b.dataset.tf;vtRender()}});
  A.querySelectorAll("[data-bs]").forEach(function(b){b.onclick=function(){var s=b.dataset.bs;vtSnd("click");if(VT.inst){vtQuick(s);return}
    VT.side=s;vtOrdSheet()}});
  A.querySelectorAll("[data-ot]").forEach(function(b){b.onclick=function(){VT.ot=b.dataset.ot;vtRender()}});
  A.querySelectorAll("[data-lq]").forEach(function(b){b.onclick=function(){vtSetLot(+b.dataset.lq)}});
  A.querySelectorAll("[data-lot]").forEach(function(b){b.onclick=function(){vtSetLot(vtStepLot(b.dataset.lot==="+"?1:-1))}});
  A.querySelectorAll("[data-bl]").forEach(function(b){b.onclick=function(){vtSetLot(vtStepLot(b.dataset.bl==="+"?1:-1))}});
  var lin=function(src,dst){return function(){var v=+this.value;if(v>0){VT.lot=v;var o=$(dst);if(o)o.value=this.value}}};
  $("vtLot").oninput=lin(0,"vtLotB");$("vtLotB").oninput=lin(0,"vtLot");
  $("vtInst").onclick=function(){
    VT.inst=!VT.inst;try{localStorage.setItem("vtInst",VT.inst?"1":"0")}catch(e){}vtInstUI();
    vtToast(VT.inst?L("Instan order aktif.","Instant order on."):L("Instan order mati.","Instant order off."),VT.inst)};
  $("vtStops").onclick=function(e){var b=e.target.closest("button");if(!b)return;if(b.dataset.st)vtAddStop(b.dataset.st);else if(b.dataset.rm)vtRmStop(b.dataset.rm)};
  var chg=function(){vtLsig="";vtSyncLines();vtStopsUI()};$("vtSl").oninput=chg;$("vtTp").oninput=chg;
  var ob=$("vtOrdB");if(ob)ob.onclick=function(){vtOrdSheet()};var cfb=$("vtCfgB");if(cfb)cfb.onclick=vtCfgSheet;vtStopsUI()}
/* ===== VEKXT FUTURES: terminal simulasi futures gaya CME. Dasar harga: Biquote (spot/CFD) dibulatkan ke tick, bukan harga kontrak bursa. Mesin: PE (opsi futures). Margin dan komisi di bawah adalah angka awal, ubah di FI ===== */
/* m = pengali ($ per poin), tick = langkah harga, mg = margin harian per kontrak ($), fee = komisi per kontrak per sisi ($), w = bobot terhadap batas kontrak (1 = mini, 0.1 = micro) */
var FI=[
{id:"MNQ",n:"Micro E-mini Nasdaq-100",g:"idx",base:"NAS100",m:2,tick:.25,mg:100,fee:.5,w:.1},
{id:"NQ",n:"E-mini Nasdaq-100",g:"idx",base:"NAS100",m:20,tick:.25,mg:1000,fee:2,w:1},
{id:"MES",n:"Micro E-mini S&P 500",g:"idx",base:"US500",m:5,tick:.25,mg:50,fee:.5,w:.1},
{id:"ES",n:"E-mini S&P 500",g:"idx",base:"US500",m:50,tick:.25,mg:500,fee:2,w:1},
{id:"MGC",n:"Micro Gold",g:"met",base:"XAUUSD",m:10,tick:.1,mg:100,fee:.5,w:.1},
{id:"GC",n:"Gold",g:"met",base:"XAUUSD",m:100,tick:.1,mg:1000,fee:2,w:1},
{id:"MCL",n:"Micro Crude Oil WTI",g:"eng",base:"USOIL",m:100,tick:.01,mg:50,fee:.5,w:.1},
{id:"CL",n:"Crude Oil WTI",g:"eng",base:"USOIL",m:1000,tick:.01,mg:500,fee:2,w:1}];
var FCAT=[["all","Semua","All"],["idx","Index","Index"],["met","Metals","Metals"],["eng","Energy","Energy"]];
var FSIZES=[25000,50000,100000],FCAP={25000:3,50000:5,100000:10},FPRICE={25000:[100,75],50000:[190,140],100000:[350,260]};
var FIX={},FB={},FCFGS={},FCFG={takerFee:0,makerFee:0,defaultLev:1,maxLev:1,levMax:{},mmr:0.005,slippage:0,maxSpread:0.05,mgU:{},feeU:{},wU:{},capU:0,mmFut:0.5};
FI.forEach(function(i){i.cs=i.m;i.d=2;i.fut=1;i.lev=1;i.c="futures";i.u="pt";i.a=(VIX[i.base]||{a:[i.base]}).a;FIX[i.id]=i;VIX[i.id]=i;(FB[i.base]=FB[i.base]||[]).push(i);
  FCFG.mgU[i.id]=i.mg/i.m;FCFG.feeU[i.id]=i.fee/i.m;FCFG.wU[i.id]=i.w/i.m});
var FU={fh:0,lc:false,rc:false,full:false,tab:"pos",cat:"all",q:"",pend:null,pendT:0};
try{var _fp=JSON.parse(localStorage.getItem("fuPref")||"{}");FU.fh=+_fp.fh||0;FU.lc=!!_fp.lc;FU.rc=!!_fp.rc}catch(e){}
function fuSavePref(){try{localStorage.setItem("fuPref",JSON.stringify({fh:FU.fh,lc:FU.lc,rc:FU.rc}))}catch(e){}}
function fuFh(){return FU.fh>0?FU.fh:Math.round(Math.max(240,(window.innerHeight-150)*0.45))}
function fuCfg(a){if(!a||!a.fut)return VCFG;var c=FCFGS[a.size];if(!c){c=Object.assign({},FCFG,{capU:FCAP[a.size]||Math.max(1,a.size/10000)});FCFGS[a.size]=c}return c}
/* suara order (Web Audio, tanpa file). Diatur lewat Pengaturan chart > Suara order */
var SND_C=null;
function vtSnd(k){
  try{if(vtCfg().snd===false)return;var AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;if(!SND_C)SND_C=new AC();if(SND_C.state==="suspended")SND_C.resume();
    var T={click:[[1500,.025,"square",.05]],fill:[[880,.07,"sine",.18],[1320,.12,"sine",.18]],win:[[784,.08,"sine",.18],[988,.08,"sine",.18],[1319,.16,"sine",.18]],loss:[[392,.1,"triangle",.2],[262,.18,"triangle",.2]],err:[[220,.16,"sawtooth",.1]]}[k];if(!T)return;
    var t=SND_C.currentTime;T.forEach(function(n){var o=SND_C.createOscillator(),g=SND_C.createGain();o.type=n[2];o.frequency.value=n[0];g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(n[3],t+.005);g.gain.exponentialRampToValueAtTime(0.0001,t+n[1]);o.connect(g);g.connect(SND_C.destination);o.start(t);o.stop(t+n[1]+.02);t+=n[1]*0.9})}catch(e){}}
function fuFix(a){if(a.fut&&!FIX[VT.sym]){VT.sym="MNQ";VT.lot=1}else if(!a.fut&&FIX[VT.sym]){VT.sym="XAUUSD";VT.lot=0.1}if(a.fut)VT.lot=Math.max(1,Math.round(VT.lot)||1)}
function fuTick(a){vtPaint()}
function fuPs(a){
  var p=a.positions[VT.sym];if(!p)return"";var i=VIX[VT.sym],long=p.side==="long";
  return'<span class="fSd '+(long?"up":"dn")+'">'+(long?"LONG":"SHORT")+'</span><b>'+Math.round(p.qty/i.cs)+' ct</b><small>@ '+vtFmt(i.id,p.entry)+'</small><b data-pp="'+i.id+'" class="fPsP">&mdash;</b><small data-ptk="'+i.id+'"></small><span style="flex:1"></span><button type="button" class="fBtn" data-pos="'+i.id+'">SL/TP</button><button type="button" class="fBtn x" data-fcl="'+i.id+'">Close</button>'}
function fuCap(a){return FCAP[a.size]||Math.max(1,a.size/10000)}
function fuTv(i){return i.m*i.tick}
function fuRound(i,v){return+(Math.round(v/i.tick)*i.tick).toFixed(i.d)}
function fuIcon(i){var col={idx:"#60A5FA",met:"#F5B84B",eng:"#A78BFA"}[i.g]||"#60A5FA";return'<span class="vtIc" style="background:'+col+'">'+esc(i.id.slice(0,3))+'</span>'}
function fuDerive(id,ts){var b=VBK[id];FB[id].forEach(function(c){var tk=c.tick,bd=Math.floor(b.mid/tk+1e-9)*tk;bd=+bd.toFixed(c.d);var ak=+(bd+tk).toFixed(c.d);
  VBK[c.id]={bid:bd,ask:ak,mid:+((bd+ak)/2).toFixed(c.d+1),pct:b.pct,hi:b.hi,lo:b.lo,ts:b.ts,rx:b.rx,closed:b.closed};vtCandle(c.id,b.mid,ts)})}
/* ---- akun uji (gratis, hanya untuk demo; pembelian sungguhan lewat Worker dengan program "fut") ---- */
var FUT_DEMO=true; /* true = tombol akun uji gratis tampil di dashboard Futures. Ubah ke false saat penjualan dibuka. Akun uji tidak ikut leaderboard. */
function fuNew(size){var id="VF-"+Math.floor(10000+Math.random()*90000),a=vtNewAcc(id,id,"fut",size,1,false);a.demo=1;vtAdd(a);pSave();pPush(true);vtStart();dash()}
document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("[data-fnew]");if(!b)return;e.preventDefault();if(PM==="fut")fuNew(+b.dataset.fnew)});
function futHome(){
  pLoadAll();vtBoot();
  var va=selV!==null?vtById(selV):null;
  if(va&&va.fut)return vtDetail(va);
  selV=null;
  var x=modeSw(),l=futList(),nA=l.filter(function(c){return c.status==="active"}).length,nI=l.length-nA;
  if(l.length){
    x+='<div class="lg-tabs" role="group" id="accTabs"><button type="button" data-at="active" aria-pressed="'+(accTab==="active")+'">'+t("tabActive")+' ('+nA+')</button><button type="button" data-at="inactive" aria-pressed="'+(accTab==="inactive")+'">'+t("tabInactive")+' ('+nI+')</button></div>';
    if(accTab==="inactive"?!nI:!nA)x+='<div class="lg-card"><p>'+t("accTabNone")+'</p></div>';
    x+='<p class="acc-hint">'+t("accHint")+'</p>'+vtRows(futList)}
  x+='<div class="lg-card"><b>'+L("Akun Futures","Futures accounts")+'</b><p class="acc-hint">'+L("Akun yang kamu beli muncul di sini otomatis setelah pembayaran terkonfirmasi. Aturan: 1 step, trailing drawdown 4% (terkunci di saldo awal), target profit 6%, tanpa daily drawdown.","Accounts you buy appear here automatically once payment is confirmed. Rules: 1 step, 4% trailing drawdown (locked at the starting balance), 6% profit target, no daily drawdown.")+'</p><a class="lg-btn ghost" href="/p/futures.html">'+L("Beli akun Futures","Buy a Futures account")+'</a></div>';
  if(FUT_DEMO)x+='<div class="lg-card"><b>'+L("Akun uji (demo)","Test account (demo)")+'</b><p class="acc-hint">'+L("Buat akun simulasi gratis untuk mencoba terminal. Bukan akun challenge sungguhan.","Create a free simulated account to try the terminal. Not a real challenge account.")+'</p><div class="pchips">'+FSIZES.map(function(z){return'<button type="button" class="pchip" data-fnew="'+z+'">'+kfmt(z)+'</button>'}).join("")+'</div></div>';
  return x}
/* ---- tampilan ---- */
function fuMkRows(){
  var q=String(FU.q||"").toUpperCase(),l=FI.filter(function(i){return(FU.cat==="all"||i.g===FU.cat)&&(!q||i.id.indexOf(q)>-1||i.n.toUpperCase().indexOf(q)>-1)});
  return l.length?l.map(function(i){return'<button type="button" class="fRow'+(i.id===VT.sym?" on":"")+'" data-sym="'+i.id+'">'+fuIcon(i)+'<div><b>'+i.id+'</b><small>'+esc(i.n)+'</small></div><span class="fRp"><b data-p="'+i.id+'">&mdash;</b><small data-c="'+i.id+'">&mdash;</small></span></button>'}).join(""):'<p class="fEmpty">'+L("Kontrak tidak ditemukan.","No contract found.")+'</p>'}
function fuCats(){return FCAT.map(function(c){return'<button type="button" data-fcat="'+c[0]+'" class="'+(FU.cat===c[0]?"on":"")+'">'+L(c[1],c[2])+'</button>'}).join("")}
function fuMkHtml(){return'<div class="fMkH"><b>Futures</b><small>'+L("Simulasi gaya CME","CME-style simulation")+'</small></div><input id="fSrch" type="search" autocomplete="off" placeholder="'+L("Cari kontrak","Search contract")+'" value="'+esc(FU.q||"")+'"><div class="vtCh fCat" id="fCats">'+fuCats()+'</div><div id="fMkL">'+fuMkRows()+'</div>'}
function fuMarkets(a){return'<div class="vtTabs" id="fCats">'+fuCats()+'</div><div id="fMkL">'+FI.filter(function(i){return FU.cat==="all"||i.g===FU.cat}).map(function(i){return'<button type="button" class="vtMk" data-sym="'+i.id+'">'+fuIcon(i)+'<div><b>'+i.id+'</b><small>'+esc(i.n)+' · $'+fuTv(i)+'/tick</small></div><span><b data-p="'+i.id+'">&mdash;</b><small data-c="'+i.id+'">&mdash;</small></span></button>'}).join("")+'</div><p class="vtHint">'+L("Harga dasar dari Biquote (spot/CFD), bukan harga kontrak bursa. Dibulatkan ke tick kontrak.","Base price from Biquote (spot/CFD), not the exchange contract price. Rounded to the contract tick.")+'</p>'}
function fuHome(a){
  var l=vtAll().filter(function(x){return x.fut}),sel=l.length>1?'<select id="vtSel">'+l.map(function(x){return'<option value="'+esc(x.id)+'"'+(x.id===a.id?" selected":"")+'>'+esc(x.program)+" "+kfmt(x.size)+" · "+esc(x.id)+(x.status!=="active"?" ("+x.status+")":"")+'</option>'}).join("")+'</select>':"";
  return sel+'<div class="vtC"><h4>Account Balance</h4><div class="vtBig" data-k="bal"></div><div class="vtRow"><span>Equity</span><b data-k="eq"></b></div><div class="vtRow"><span>P/L</span><b data-k="pnl"></b></div></div>'
  +(a.target>0?'<div class="vtC"><h4>'+esc(a.program)+' &middot; Challenge</h4><div class="vtRow"><span>'+L("Progres target","Target progress")+'</span><b data-k="pr"></b></div><div class="vtBar"><i data-k="prb" style="width:0"></i></div><div class="vtRow"><span>Profit / Target</span><b data-k="tg"></b></div></div>':'<div class="vtC"><h4>'+esc(a.program)+' &middot; '+(a.isFunded?"Funded":"")+'</h4><div class="vtRow"><span>Profit</span><b data-k="pnl2"></b></div></div>')
  +'<div class="vtC"><h4>Max Drawdown ('+a.rules.maxDd+'% trailing)</h4><div class="vtRow"><span>'+L("Batas equity (floor)","Equity floor")+'</span><b data-k="floor"></b></div><div class="vtRow"><span>'+L("Sisa ruang","Buffer left")+'</span><b data-k="buf"></b></div><div class="vtBar fBuf"><i data-k="bufb" style="width:0"></i></div><div class="vtRow"><span>'+L("Terpakai / batas","Used / limit")+'</span><b data-k="md"></b></div></div>'
  +'<div class="vtBS"><button type="button" class="vtBuy fGo" data-go="trade">Trade</button><button type="button" class="vtGh" data-go="mkts" style="flex:1">Markets</button></div><div class="vtBS"><button type="button" class="vtGh" data-go="pos">Positions</button><button type="button" class="vtGh" data-go="more">Challenge</button></div>'}
function fuAccStrip(){return'<div class="fAcc"><div><small>Balance</small><b data-k="bal">&mdash;</b></div><div><small>Equity</small><b data-k="eq">&mdash;</b></div><div><small>P/L</small><b data-k="pnl">&mdash;</b></div><div><small>'+L("Batas DD","DD floor")+'</small><b data-k="floor">&mdash;</b></div></div>'}
function fuTicket(a){
  var i=VIX[VT.sym],ot=VT.ot,on=a.status==="active",q=Math.max(1,Math.round(VT.lot)||1);
  var cap=fuCap(a);
  return'<div class="fTkH"><b>'+i.id+' · '+L("Order","Order")+'</b><button type="button" id="fTkX" class="fIb">&#10005;</button></div>'+fuAccStrip()
  +'<div class="vtTabs fOt">'+[["market","Market"],["limit","Limit"],["stop","Stop"]].map(function(o){return'<button type="button" data-ot="'+o[0]+'" class="'+(ot===o[0]?"on":"")+'">'+o[1]+'</button>'}).join("")+'</div>'
  +'<span class="vtLb">'+L("Jumlah (kontrak)","Quantity (contracts)")+'</span><div class="vtLot"><button type="button" data-q="-">−</button><input id="fQty" inputmode="numeric" value="'+q+'"><button type="button" data-q="+">+</button></div>'
  +'<div class="vtCh fQc">'+[1,2,3,5,10].map(function(v){return'<button type="button" data-qq="'+v+'">'+v+'</button>'}).join("")+'</div>'
  +(ot!=="market"?'<span class="vtLb">'+(ot==="limit"?L("Harga limit","Limit price"):L("Harga stop","Stop price"))+'</span><div class="vtLot"><button type="button" data-px="-">−</button><input id="fPx" inputmode="decimal"><button type="button" data-px="+">+</button></div>':"")
  +'<span class="vtLb">Take Profit (TP)</span><input id="vtTp" inputmode="decimal" placeholder="—"><span class="vtLb">Stop Loss (SL)</span><input id="vtSl" inputmode="decimal" placeholder="—">'
  +'<div class="fCalc" id="fCalc"><div class="vtRow"><span>Margin</span><b data-k="fmg">&mdash;</b></div><div class="vtRow"><span>'+L("Komisi","Commission")+'</span><b data-k="ffee">&mdash;</b></div><div class="vtRow"><span>'+L("Risiko ke SL","Risk to SL")+'</span><b data-k="frisk">&mdash;</b></div><div class="vtRow"><span>'+L("Target TP","Reward to TP")+'</span><b data-k="frew">&mdash;</b></div><div class="vtRow"><span>'+L("Nilai per tick","Tick value")+'</span><b>$'+fuTv(i)+'</b></div><div class="vtRow"><span>'+L("Batas kontrak","Contract limit")+'</span><b>'+cap+' mini / '+cap*10+' micro</b></div></div>'
  +'<div class="fBS"><button type="button" class="fSell" data-fo="sell"'+(on?"":" disabled")+'><span data-flb="sell">Sell</span><small data-bid="'+i.id+'">&mdash;</small></button><button type="button" class="fBuy" data-fo="buy"'+(on?"":" disabled")+'><span data-flb="buy">Buy</span><small data-ask="'+i.id+'">&mdash;</small></button></div>'
  +'<button type="button" class="vtInstB fInstB'+(VT.inst?" on":"")+'" data-finst="1"><span class="vtSw'+(VT.inst?" on":"")+'"></span>'+L("Instan order (satu ketukan di bar bawah)","Instant order (one tap on the quick bar)")+'</button>'}
function fuQuickBar(a,i){
  var q=Math.max(1,Math.round(VT.lot)||1),on=a.status==="active";
  return'<div class="fQ'+(VT.inst?" inst":"")+'" id="fQ"><button type="button" class="fSell" data-fq="sell"'+(on?"":" disabled")+'><span>SELL</span><small data-bid="'+i.id+'">&mdash;</small></button><div class="fQm"><div><button type="button" data-q="-">−</button><input id="fQtyB" inputmode="numeric" value="'+q+'"><button type="button" data-q="+">+</button></div><button type="button" class="vtInstB fInstB'+(VT.inst?" on":"")+'" data-finst="1"><span class="vtSw'+(VT.inst?" on":"")+'"></span>'+L("Instan","Instant")+'</button></div><button type="button" class="fBuy" data-fq="buy"'+(on?"":" disabled")+'><span>BUY</span><small data-ask="'+i.id+'">&mdash;</small></button></div>'}
function fuPosRow(a,s){
  var p=a.positions[s],i=VIX[s],long=p.side==="long",q=Math.round(p.qty/i.cs);
  return'<div class="fRowP"><div class="fRc1"><span class="fSd '+(long?"up":"dn")+'">'+(long?"LONG":"SHORT")+'</span><b>'+s+'</b><small>'+q+' ct</small></div>'
  +'<div class="fRc2"><small>Entry</small><b>'+vtFmt(s,p.entry)+'</b></div><div class="fRc2"><small>Mark</small><b data-p="'+s+'" data-side="'+p.side+'">&mdash;</b></div>'
  +'<div class="fRc3"><b data-pp="'+s+'">&mdash;</b><small data-ptk="'+s+'"></small></div>'
  +'<div class="fRc2"><small>SL / TP</small><b>'+(p.sl?vtFmt(s,p.sl):"—")+' / '+(p.tp?vtFmt(s,p.tp):"—")+'</b></div>'
  +'<div class="fRc4"><button type="button" class="fBtn" data-pos="'+s+'">SL/TP</button><button type="button" class="fBtn x" data-fcl="'+s+'">Close</button></div></div>'}
function fuPane(a){
  var k=FU.tab,x="",empty=function(m){return'<p class="fEmpty">'+m+'</p>'};
  if(k==="pos"){var ps=Object.keys(a.positions);
    x=ps.length?ps.map(function(s){return fuPosRow(a,s)}).join("")+'<button type="button" class="vtGh fAll" id="vtCloseAll">Flatten ('+L("tutup semua","close all")+')</button>':empty(L("Tidak ada posisi terbuka.","No open positions."))}
  else if(k==="ord"){x=a.orders.length?a.orders.map(function(o){var i=VIX[o.symbol],stp=o.kind==="stop";
    return'<div class="fRowP"><div class="fRc1"><span class="fSd '+(o.side==="buy"?"up":"dn")+'">'+o.side.toUpperCase()+'</span><b>'+o.symbol+'</b><small>'+(stp?"STOP":"LIMIT")+' · '+Math.round(o.qty/i.cs)+' ct</small></div><div class="fRc2"><small>'+L("Harga","Price")+'</small><b>'+vtFmt(o.symbol,o.price)+'</b></div><div class="fRc4"><button type="button" class="fBtn x" data-cx="'+o.id+'">'+L("Batal","Cancel")+'</button></div></div>'}).join(""):empty(L("Tidak ada order tertunda.","No pending orders."))}
  else if(k==="his"){var tr=(a.trades||[]).slice(-60).reverse();
    x=tr.length?tr.map(function(r){var i=VIX[r.s],tk=i?Math.round((r.d==="BUY"?r.c-r.o:r.o-r.c)/i.tick):0,why={sl:"SL",tp:"TP",liq:L("Likuidasi","Liquidated")}[r.w];
      return'<div class="fRowP"><div class="fRc1"><span class="fSd '+(r.d==="BUY"?"up":"dn")+'">'+(r.d==="BUY"?"LONG":"SHORT")+'</span><b>'+r.s+'</b><small>'+(i?Math.round(r.v/i.cs):r.v)+' ct'+(why?' · '+why:'')+'</small></div><div class="fRc2"><small>'+L("Masuk","Entry")+' → '+L("Keluar","Exit")+'</small><b>'+vtFmt(r.s,r.o)+' → '+vtFmt(r.s,r.c)+'</b></div><div class="fRc3"><b class="'+(r.p>=0?"up":"dn")+'">'+(r.p>0?"+":"")+vtM(r.p)+'</b><small>'+(tk>0?"+":"")+tk+' ticks</small></div></div>'}).join(""):empty(L("Belum ada riwayat.","No history yet."))}
  else{var rw=function(l,v){return'<div class="vtRow"><span>'+l+'</span><b'+(v.k?' data-k="'+v.k+'"':'')+'>'+(v.t||"&mdash;")+'</b></div>'};
    x='<div class="fAccG">'+rw("Balance",{k:"bal"})+rw("Equity",{k:"eq"})+rw("P/L",{k:"pnl"})+rw(L("Margin terpakai","Used margin"),{k:"um"})+rw(L("Margin bebas","Free margin"),{k:"fm"})+rw("Margin level",{k:"ml"})+rw(L("Batas equity (floor)","Equity floor"),{k:"floor"})+rw(L("Sisa ruang drawdown","Drawdown buffer"),{k:"buf"})+'</div>'}
  return x}
function fuBotInner(a){
  var n=Object.keys(a.positions).length,no=a.orders.length;
  var tabs=[["pos",L("Posisi","Positions")+(n?" ("+n+")":"")],["ord",L("Order","Orders")+(no?" ("+no+")":"")],["his",L("Riwayat","History")],["acc",L("Akun","Account")]];
  return'<div class="vtTabs fBt">'+tabs.map(function(t){return'<button type="button" data-ft="'+t[0]+'" class="'+(FU.tab===t[0]?"on":"")+'">'+t[1]+'</button>'}).join("")+'</div><div class="fPane" id="fPane">'+fuPane(a)+'</div>'}
function fuTrade(a){
  var i=VIX[VT.sym];
  var hd='<div class="fHd">'+fuIcon(i)+'<div class="fHn"><button type="button" id="vtPick" class="fSymB"><b>'+i.id+'</b> &#9662;</button><small>'+esc(i.n)+' · '+L("Kontinu","Continuous")+'</small></div>'
   +'<div class="fPx"><b data-p="'+i.id+'">&mdash;</b><span data-c="'+i.id+'"></span></div>'
   +'<div class="fHL"><small>H <b data-hi="'+i.id+'">&mdash;</b></small><small>L <b data-lo="'+i.id+'">&mdash;</b></small><small>'+L("Tick","Tick")+' <b>'+i.tick+' = $'+fuTv(i)+'</b></small></div><span class="vtTag" data-m="'+i.id+'"></span>'
   +'<div class="fAct"><button type="button" id="fBtnL" class="fIb" title="'+L("Daftar kontrak","Contract list")+'">☰</button><button type="button" id="fBtnR" class="fIb" title="'+L("Tiket order","Order ticket")+'">▤</button><button type="button" id="vtCfgB" class="fIb" title="'+L("Pengaturan chart","Chart settings")+'">&#9881;</button><button type="button" id="fBtnT" class="fIb fOrdB">Order</button><button type="button" id="fBtnFull" class="fIb" title="'+L("Perluas chart","Expand chart")+'">⤢</button></div></div>';
  var tfs='<div class="vtCh fTf">'+VTF.map(function(f,k){return'<button type="button" data-tf="'+k+'" class="'+(VT.tf===k?"on":"")+'">'+f[1]+'</button>'}).join("")+'</div>';
  return'<div class="fT'+(FU.full?" full":"")+(FU.lc?" lc":"")+(FU.rc?" rc":"")+'" id="fT" style="--fh:'+fuFh()+'px">'
   +'<aside class="fMk">'+fuMkHtml()+'</aside>'
   +'<section class="fMain">'+hd+tfs+'<div class="fPs'+(a.positions[VT.sym]?" on":"")+'" id="fPs">'+fuPs(a)+'</div><div class="fChw"><div id="vtCh"></div></div>'
   +'<div class="fSplit" id="fSplit" role="separator" aria-orientation="horizontal" tabindex="0" title="'+L("Tarik untuk ubah tinggi chart (klik dua kali: reset)","Drag to resize the chart (double-click: reset)")+'"><i></i></div>'
   +'<div class="fSt"><div class="vtStops" id="vtStops"></div><div class="vtHint" id="vtHint"></div><div id="vtNote" class="fNote"></div></div>'
   +'<div class="fBot" id="fBot">'+fuBotInner(a)+'</div></section>'
   +'<aside class="fTk" id="fTk">'+fuTicket(a)+'</aside>'
   +fuQuickBar(a,i)+'<div class="fTkBd" id="fTkBd"></div></div>'}
function fuMore(a){
  var cap=fuCap(a),r=a.rules;
  var rules='<div class="vtRow"><span>Challenge</span><b>1 step</b></div><div class="vtRow"><span>Max Drawdown</span><b>'+r.maxDd+'% trailing</b></div><div class="vtRow"><span>'+L("Trailing terkunci di","Trailing locks at")+'</span><b>'+vtM(a.size)+'</b></div><div class="vtRow"><span>Daily Drawdown</span><b>'+L("Tidak ada","None")+'</b></div>'+(a.target>0?'<div class="vtRow"><span>Profit Target</span><b>'+a.target+'%</b></div>':"")+'<div class="vtRow"><span>'+L("Batas kontrak","Contract limit")+'</span><b>'+cap+' mini / '+cap*10+' micro</b></div>';
  return'<div class="vtC"><div style="display:flex;justify-content:space-between;align-items:center"><b>Challenge</b>'+vtStatusTag(a)+'</div>'+(a.target>0?'<div class="vtRow"><span>'+L("Progres target","Target progress")+'</span><b data-k="pr"></b></div><div class="vtBar"><i data-k="prb" style="width:0"></i></div>':"")
  +'<div class="vtRow"><span>Account Balance</span><b data-k="bal"></b></div><div class="vtRow"><span>Equity</span><b data-k="eq"></b></div><div class="vtRow"><span>'+L("Batas equity (floor)","Equity floor")+'</span><b data-k="floor"></b></div><div class="vtRow"><span>Max Drawdown</span><b data-k="md"></b></div></div>'
  +'<div class="vtC"><h4>Rules</h4>'+rules+'</div>'
  +'<div class="vtC"><h4>'+L("Spesifikasi kontrak","Contract specs")+'</h4>'+FI.map(function(i){return'<div class="vtRow"><span><b>'+i.id+'</b> · $'+i.m+'/'+L("poin","pt")+'</span><b>tick '+i.tick+' = $'+fuTv(i)+' · margin $'+i.mg+' · $'+i.fee+'/side</b></div>'}).join("")+'<p class="vtHint">'+L("Simulasi. Harga dasar dari Biquote (spot/CFD), bukan harga kontrak bursa; margin dan komisi adalah angka simulasi.","Simulation. Base price from Biquote (spot/CFD), not the exchange contract price; margin and commission are simulated figures.")+'</p></div>'
  +'<div class="vtBS"><button type="button" class="vtGh" data-nav="wd">Withdrawal</button><button type="button" class="vtGh" data-nav="cert">'+L("Sertifikat","Certificate")+'</button></div><button type="button" class="vtGh" id="vtBack" style="margin-top:10px">'+L("Kembali ke dashboard","Back to dashboard")+'</button>'}
function fuBody(a){
  var tb=VT.tab;
  if(tb==="home")return fuHome(a);
  if(tb==="mkts")return fuMarkets(a);
  if(tb==="trade")return fuTrade(a);
  if(tb==="pos")return'<div class="fBot fPage" id="fBot">'+fuBotInner(a)+'</div>';
  return fuMore(a)}
/* ---- angka yang berubah tiap detik ---- */
function fuQty(){var e=$("fQty")||$("fQtyB");return Math.max(1,Math.round(+(e||{}).value||VT.lot||1))}
function fuLabels(){var q=fuQty(),ot=VT.ot,w=ot==="market"?"Market":ot==="limit"?"Limit":"Stop";document.querySelectorAll("[data-flb]").forEach(function(e){e.textContent=(e.dataset.flb==="buy"?"Buy ":"Sell ")+q+" @ "+w})}
function fuCalc(){
  var i=VIX[VT.sym],q=fuQty(),b=VBK[i.id],sl=+($("vtSl")||{}).value||0,tp=+($("vtTp")||{}).value||0,ref=b&&!b.ph?b.mid:0;
  vtSet('[data-k="fmg"]',vtM(q*i.mg));vtSet('[data-k="ffee"]',vtM(q*i.fee)+" / "+L("sisi","side"));
  vtSet('[data-k="frisk"]',sl&&ref?"-"+vtM(Math.abs(ref-sl)*i.m*q).replace("-",""):"—");vtSet('[data-k="frew"]',tp&&ref?"+"+vtM(Math.abs(tp-ref)*i.m*q).replace("-",""):"—");
  fuLabels()}
function fuPaint(a,s){
  var lim=s.maxLimit||1,buf=Math.max(0,s.equity-s.floor);
  vtSet('[data-k="floor"]',vtM(s.floor));vtSet('[data-k="buf"]',vtM(buf));
  document.querySelectorAll('[data-k="bufb"]').forEach(function(e){e.style.width=Math.max(0,Math.min(100,buf/lim*100))+"%"});
  vtSet('[data-k="um"]',vtM(s.usedMargin));vtSet('[data-k="fm"]',vtM(s.freeMargin));vtSet('[data-k="ml"]',s.usedMargin>0?(s.equity/s.usedMargin*100).toFixed(0)+"%":"—");
  document.querySelectorAll("[data-hi]").forEach(function(e){var x=VBK[e.dataset.hi];e.textContent=x&&x.hi>0?vtFmt(e.dataset.hi,x.hi):"—"});
  document.querySelectorAll("[data-lo]").forEach(function(e){var x=VBK[e.dataset.lo];e.textContent=x&&x.lo>0?vtFmt(e.dataset.lo,x.lo):"—"});
  document.querySelectorAll("[data-ptk]").forEach(function(e){var p=a.positions[e.dataset.ptk],bb=VBK[e.dataset.ptk];if(!p||!bb||bb.ph)return;var ii=VIX[e.dataset.ptk],px=p.side==="long"?bb.bid:bb.ask,tk=Math.round((p.side==="long"?px-p.entry:p.entry-px)/ii.tick);e.textContent=(tk>0?"+":"")+tk+" ticks"});
  if(VT.tab==="trade"){var i=VIX[VT.sym],b=VBK[i.id],px=$("fPx");
    if(px&&!px.value&&document.activeElement!==px&&b&&!b.ph)px.value=vtFmt(i.id,fuRound(i,b.mid));
    fuCalc()}}
function fuRefresh(){
  var a=vtAcc();if(!a||!a.fut||!VT.on)return;
  if(VT.tab!=="trade"){vtRender();return}
  var bot=$("fBot");if(bot)bot.innerHTML=fuBotInner(a);var ps=$("fPs");if(ps){ps.innerHTML=fuPs(a);ps.classList.toggle("on",!!a.positions[VT.sym])}
  vtLsig="";vtSyncLines();vtStopsUI();vtPaint()}
/* ---- order ---- */
function fuErr(c,a){
  if(c==="max_contracts"){var cap=fuCap(a);return L("Melebihi batas kontrak: maks. "+cap+" mini ("+cap*10+" micro) untuk akun ini.","Contract limit exceeded: max "+cap+" mini ("+cap*10+" micro) for this account.")}
  var m={insufficient_margin:["Margin tidak cukup.","Insufficient margin."],no_price:["Harga belum tersedia.","No price yet."],bad_order:["Order tidak valid.","Invalid order."],bad_stop:["Harga stop harus di atas ask (buy) atau di bawah bid (sell).","Stop price must be above the ask (buy) or below the bid (sell)."],account_breached:["Akun sudah breached.","Account is breached."],account_passed:["Challenge sudah lolos. Trading di akun berikutnya.","Challenge already passed. Trade on the next account."]}[c];
  return m?L(m[0],m[1]):String(c)}
function fuOrder(side,ot,q,px0,sl,tp){
  var a=vtAcc(),i=VIX[VT.sym],b=VBK[i.id];
  if(!a||a.status!=="active")return vtToast(L("Akun tidak aktif.","Account is not active."),false);
  if(!vtLive(i.id))return vtToast(L("Pasar tutup atau harga belum tersedia.","Market closed or no price yet."),false);
  q=Math.round(q);if(!(q>=1&&q<=500))return vtToast(L("Jumlah kontrak minimal 1.","Minimum 1 contract."),false);
  var buy=side==="buy",mk=ot==="market",px=mk?(buy?b.ask:b.bid):fuRound(i,px0);
  if(!mk&&!(px>0))return vtToast(L("Isi harga order.","Enter the order price."),false);
  if(ot==="limit"&&(buy?px>=b.ask:px<=b.bid))return vtToast(buy?L("Buy limit harus di bawah ask.","Buy limit must be below the ask."):L("Sell limit harus di atas bid.","Sell limit must be above the bid."),false);
  if(ot==="stop"&&(buy?px<=b.ask:px>=b.bid))return vtToast(buy?L("Buy stop harus di atas ask.","Buy stop must be above the ask."):L("Sell stop harus di bawah bid.","Sell stop must be below the bid."),false);
  if(sl)sl=fuRound(i,sl);if(tp)tp=fuRound(i,tp);
  if(sl&&(buy?sl>=px:sl<=px))return vtToast(L("Stop Loss di sisi yang salah.","Stop Loss is on the wrong side."),false);
  if(tp&&(buy?tp<=px:tp>=px))return vtToast(L("Take Profit di sisi yang salah.","Take Profit is on the wrong side."),false);
  var r=PE.placeOrder(a,{symbol:i.id,side:side,qty:q*i.cs,type:ot,price:mk?0:px,sl:sl||0,tp:tp||0},VBK,fuCfg(a));
  if(!r.ok)return vtToast(fuErr(r.error,a),false);
  pSave();pPush(true);
  var ev=r.events||[],op=ev.filter(function(e){return e.type==="open"})[0],cl=ev.filter(function(e){return e.type==="close"})[0];
  vtSnd(cl?(cl.pnl>=0?"win":"loss"):"fill");
  vtToast(!r.filled?(ot==="stop"?L("Order stop dipasang.","Stop order placed."):L("Order limit dipasang.","Limit order placed.")):op?(side.toUpperCase()+" "+q+" "+i.id+" @ "+vtFmt(i.id,r.price)):cl?(L("Posisi ditutup ","Position closed ")+i.id+" "+vtM2(cl.pnl)):(side.toUpperCase()+" "+q+" "+i.id),true);
  if(r.filled&&op&&(sl||tp)||(!r.filled)){var e1=$("vtSl"),e2=$("vtTp");if(e1)e1.value="";if(e2)e2.value=""}
  fuRefresh();return true}
function fuSubmit(side){if(fuOrder(side,VT.ot,fuQty(),VT.ot==="market"?0:+($("fPx")||{}).value,+($("vtSl")||{}).value||0,+($("vtTp")||{}).value||0))fuTk(false)}
function fuTk(on){var T=$("fT");if(T)T.classList.toggle("tkOpen",!!on)}
function fuQuick(side){
  VT.side=side;
  if(!VT.inst){fuTk(true);return}
  var n=Date.now(),a=vtAcc(),p=a&&a.positions[VT.sym],opp=p&&((p.side==="long")!==(side==="buy"));
  if(n-vtQAt<700)return;vtQAt=n;
  fuOrder(side,"market",fuQty(),0,opp?0:(+($("vtSl")||{}).value||0),opp?0:(+($("vtTp")||{}).value||0))}
function fuClose(s){
  var a=vtAcc(),p=a&&a.positions[s];if(!p)return;
  if(!vtLive(s))return vtToast(L("Pasar tutup. Posisi belum bisa ditutup.","Market closed. Cannot close the position yet."),false);
  var r=PE.placeOrder(a,{symbol:s,side:p.side==="long"?"sell":"buy",qty:p.qty,type:"market",reduceOnly:true},VBK,fuCfg(a));
  if(!r.ok)return vtToast(fuErr(r.error,a),false);
  var cl=(r.events||[]).filter(function(e){return e.type==="close"})[0];
  pSave();pPush(true);if(cl){vtSnd(cl.pnl>=0?"win":"loss");vtToast(L("Posisi ditutup ","Position closed ")+s+" "+vtM2(cl.pnl),cl.pnl>=0)}fuRefresh()}
/* ---- pilih kontrak ---- */
function fuPick(){
  var d=document.createElement("div");d.className="vtSheet";d.id="vtPickS";
  d.innerHTML='<div><b>'+L("Pilih kontrak","Select contract")+'</b>'+FI.map(function(i){return'<button type="button" class="vtMk" data-pk="'+i.id+'">'+fuIcon(i)+'<div><b>'+i.id+'</b><small>'+esc(i.n)+' · $'+fuTv(i)+'/tick</small></div></button>'}).join("")+'</div>';
  $("vtApp").appendChild(d);d.onclick=function(e){var b=e.target.closest("[data-pk]");if(b){VT.sym=b.dataset.pk;d.remove();vtRender()}else if(e.target===d)d.remove()}}
/* ---- event ---- */
function fuSyncQty(v,from){v=Math.max(1,Math.round(+v)||1);VT.lot=v;["fQty","fQtyB"].forEach(function(k){var e=$(k);if(e&&k!==from&&document.activeElement!==e)e.value=v});fuCalc()}
function fuSetFull(on){
  FU.full=!!on;var T=$("fT");if(T)T.classList.toggle("full",FU.full);
  var b=$("fBtnFull");if(b){b.textContent=FU.full?"⤡":"⤢";b.classList.toggle("on",FU.full)}
  if(window.ResizeObserver===undefined&&vtCh)setTimeout(function(){var q=$("vtCh");if(q&&vtCh)vtCh.applyOptions({width:q.clientWidth,height:q.clientHeight})},50)}
function fuClick(e){
  var t=e.target.closest&&e.target.closest("button,[data-fcat]");if(!t)return;var a=vtAcc();if(!a)return;var d=t.dataset;
  if(d.ft){FU.tab=d.ft;var bot=$("fBot");if(bot)bot.innerHTML=fuBotInner(a);vtPaint();return}
  if(d.ot){VT.ot=d.ot;var tk=$("fTk");if(tk){tk.innerHTML=fuTicket(a);vtLsig="";vtSyncLines();vtStopsUI();vtPaint()}return}
  if(d.q){fuSyncQty(fuQty()+(d.q==="+"?1:-1));return}
  if(d.qq){fuSyncQty(+d.qq);return}
  if(d.px){var i=VIX[VT.sym],pe=$("fPx");if(pe)pe.value=vtFmt(i.id,fuRound(i,(+pe.value||0)+(d.px==="+"?1:-1)*i.tick));return}
  if(d.fo){vtSnd("click");fuSubmit(d.fo);return}
  if(d.fq){vtSnd("click");fuQuick(d.fq);return}
  if(d.finst){
    VT.inst=!VT.inst;try{localStorage.setItem("vtInst",VT.inst?"1":"0")}catch(x){}
    document.querySelectorAll(".fInstB").forEach(function(b){b.classList.toggle("on",VT.inst);var k=b.querySelector(".vtSw");if(k)k.classList.toggle("on",VT.inst)});var q=$("fQ");if(q)q.classList.toggle("inst",VT.inst);
    vtStopsUI();vtToast(VT.inst?L("Instan order aktif.","Instant order on."):L("Instan order mati.","Instant order off."),VT.inst);return}
  if(d.st){vtAddStop(d.st);return}
  if(d.rm){vtRmStop(d.rm);return}
  if(d.fcl){fuClose(d.fcl);return}
  if(d.tf!==undefined&&t.closest(".fTf")){VT.tf=+d.tf;document.querySelectorAll(".fTf button").forEach(function(b){b.classList.toggle("on",+b.dataset.tf===VT.tf)});if(vtCs)vtLoadBars();return}
  if(d.fcat){FU.cat=d.fcat;if(VT.tab==="mkts"){vtRender();return}var m=$("fMkL");if(m)m.innerHTML=fuMkRows();var c=$("fCats");if(c)c.innerHTML=fuCats();vtPaint();return}
  if(t.id==="vtPick"){fuPick();return}
  if(t.id==="fBtnT"){fuTk(true);return}
  if(t.id==="fTkX"){fuTk(false);return}
  if(t.id==="vtCfgB"){vtCfgSheet();return}
  if(t.id==="fBtnFull"){fuSetFull(!FU.full);return}
  if(t.id==="fBtnL"){FU.lc=!FU.lc;fuSavePref();var T=$("fT");if(T)T.classList.toggle("lc",FU.lc);return}
  if(t.id==="fBtnR"){FU.rc=!FU.rc;fuSavePref();var T2=$("fT");if(T2)T2.classList.toggle("rc",FU.rc);return}}
function fuInput(e){
  var t=e.target;
  if(t.id==="fQty"||t.id==="fQtyB"){var v=Math.round(+t.value);if(v>=1){VT.lot=v;fuSyncQty(v,t.id)}return}
  if(t.id==="vtSl"||t.id==="vtTp"){vtLsig="";vtSyncLines();vtStopsUI();fuCalc();return}
  if(t.id==="fSrch"){FU.q=t.value;var m=$("fMkL");if(m){m.innerHTML=fuMkRows();vtPaint()}}}
/* splitter: tarik untuk mengubah tinggi chart di PC (disimpan) */
function fuBindSplit(){
  var sp=$("fSplit"),T=$("fT"),box=$("vtCh")&&$("vtCh").parentNode;if(!sp||!T||!box)return;
  var apply=function(h){var mx=Math.max(240,T.clientHeight-150);h=Math.max(200,Math.min(mx,h));T.style.setProperty("--fh",h+"px");return h};
  sp.addEventListener("pointerdown",function(e){
    var y0=e.clientY,h0=box.getBoundingClientRect().height,nh=h0,raf=0;try{sp.setPointerCapture(e.pointerId)}catch(x){}sp.classList.add("on");e.preventDefault();
    var mv=function(ev){nh=h0+(ev.clientY-y0);if(!raf)raf=requestAnimationFrame(function(){raf=0;nh=apply(nh)})};
    var up=function(){sp.removeEventListener("pointermove",mv);sp.removeEventListener("pointerup",up);sp.removeEventListener("pointercancel",up);sp.classList.remove("on");if(raf){cancelAnimationFrame(raf);raf=0}FU.fh=Math.round(apply(nh));fuSavePref()};
    sp.addEventListener("pointermove",mv);sp.addEventListener("pointerup",up);sp.addEventListener("pointercancel",up)});
  sp.addEventListener("dblclick",function(){FU.fh=0;fuSavePref();T.style.setProperty("--fh",fuFh()+"px")});
  sp.addEventListener("keydown",function(e){if(e.key!=="ArrowUp"&&e.key!=="ArrowDown")return;e.preventDefault();FU.fh=Math.round(apply(box.getBoundingClientRect().height+(e.key==="ArrowDown"?24:-24)));fuSavePref()})}
function fuBind(a){
  var B=$("vtBd");if(B){B.onclick=fuClick;B.oninput=fuInput}
  var bd=$("fTkBd");if(bd)bd.onclick=function(){fuTk(false)};
  if(VT.tab==="trade"){fuBindSplit();var fb=$("fBtnFull");if(fb&&FU.full)fb.textContent="⤡";vtStopsUI()}}
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&FU.full&&VT.on){fuSetFull(false)}});
var FUCSS=[
"#vtApp.fut{--ac:#3B82F6;--ac2:#60A5FA}",
"#vtApp.fut .vtBtn,#vtApp.fut .vtTabs button.on,#vtApp.fut .vtBS .fGo{color:#fff}",
"#vtApp.fut .vtBS .fGo{background:var(--ac)}#vtApp.fut .vtGh{color:var(--ac2);border-color:var(--ac)}#vtApp.fut .vtHd b{color:var(--ac2)}#vtApp.fut .vtCh button.on,#vtApp.fut .vtTfR button.on{border-color:var(--ac);color:var(--ac2)}",
".fuTag{font-size:10px;font-weight:700;letter-spacing:.12em;padding:2px 8px;border-radius:99px;background:rgba(59,130,246,.16);color:#60A5FA;border:1px solid rgba(59,130,246,.45)}",
/* HP: chart memenuhi layar (tanpa margin), tiket order jadi sheet */
".vtBd.fuT{padding:0;max-width:none;display:flex;flex-direction:column;overflow:hidden}.fT{display:flex;flex-direction:column;flex:1;min-height:0;font-variant-numeric:tabular-nums}",
".fMk{display:none}.fMain{display:contents}",
".fHd{order:1;display:flex;align-items:center;gap:4px 8px;padding:6px 10px 2px;flex-wrap:wrap}.fHn{display:flex;flex-direction:column;min-width:0}.fHn small{display:none}.fSymB{background:none;border:0;padding:0;font-size:16px;text-align:left}.fSymB b{font-size:16px}",
".fPx{display:flex;align-items:baseline;gap:6px}.fPx b{font-size:19px;font-weight:700}.fPx span{font-size:12px;font-weight:600}.fHL{display:none}",
".fHd .vtIc,.fHd .vtTag{display:none}.fAct{margin-left:auto;display:flex;gap:6px;align-items:center}.fIb{min-width:34px;height:32px;border:1px solid var(--ln);background:#0d0f13;border-radius:9px;font-size:15px;line-height:1;padding:0 8px;color:var(--mu)}.fIb.on{border-color:var(--ac);color:var(--ac2)}.fOrdB{font-size:12px;font-weight:700;color:var(--ac2);border-color:var(--ac)}#fBtnL,#fBtnR{display:none}",
"#vtApp.fut .vtHd b{white-space:nowrap;letter-spacing:.08em;font-size:14px}#vtApp.fut .vtHd small{font-size:11px;line-height:1.25}.fHd{flex-wrap:nowrap}.fAct{gap:4px}@media(max-width:400px){.fPx b{font-size:16px}.fPx span{font-size:11px}.fIb{min-width:30px;padding:0 6px}}",
"#vtApp .fTf{flex-wrap:nowrap}.fTf{order:2;margin:0 10px 4px;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.fTf button{flex:none}",
".fPs>*{white-space:nowrap}.fPs{order:3;display:none;align-items:center;gap:8px;padding:5px 10px;background:#0d0f13;border-top:1px solid var(--ln);font-size:13px}.fPs.on{display:flex}.fPs small{color:var(--mu)}.fPsP{font-weight:700}",
".fChw{order:4;position:relative;flex:1;min-height:0;margin:0;border-top:1px solid var(--ln)}.fChw #vtCh{position:absolute;inset:0}",
".fSplit{display:none}",
".fSt{order:5;padding:4px 10px 0;flex:none}.fSt .vtStops{margin:0;min-height:0}.fSt .vtHint,.fNote{display:none}.fSt .vtStops:empty{display:none}",
".fBot{display:none}.fBot.fPage{display:block;order:0;padding:12px;overflow:auto;flex:1}",
".fTk{position:fixed;left:0;right:0;bottom:0;z-index:340;max-height:88%;overflow:auto;background:#0f1116;border-top:1px solid var(--ln);border-radius:18px 18px 0 0;padding:12px 14px calc(14px + env(safe-area-inset-bottom));transform:translateY(105%);transition:transform .18s ease;visibility:hidden}",
".fT.tkOpen .fTk{transform:none;visibility:visible}.fTkBd{position:fixed;inset:0;z-index:335;background:rgba(0,0,0,.55);display:none}.fT.tkOpen .fTkBd{display:block}",
".fTkH{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}",
".fAcc{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:10px}.fAcc div{background:var(--sf);border:1px solid var(--ln);border-radius:10px;padding:7px 8px;min-width:0}.fAcc small{display:block;color:var(--mu);font-size:10px}.fAcc b{font-size:12px;font-weight:700;white-space:nowrap}",
".fBS{display:flex;gap:10px;margin-top:12px}.fBS button,.fQ>button{flex:1;border:0;border-radius:12px;padding:8px 4px;font-weight:700;font-size:16px;min-height:52px}.fBS small,.fQ>button small{display:block;font-weight:600;font-size:12px;opacity:.9;font-variant-numeric:tabular-nums}",
".fBuy{background:#22C55E;color:#06140D}.fSell{background:#F04452;color:#fff}.fBS button:disabled,.fQ>button:disabled{opacity:.4}",
".fInstB{margin-top:12px}.fCalc{margin-top:8px}.fCalc .vtRow{padding:4px 0;font-size:13px}",
".fQ{order:7;position:relative;flex:none;z-index:3;display:flex;gap:8px;padding:8px 10px;background:#080A0D;border-top:1px solid var(--ln);align-items:stretch}.fQ.inst{border-top-color:var(--ac)}",
".fQm{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;flex:none;width:108px}.fQm>div{display:flex;align-items:center;gap:4px}.fQm>div button{width:32px;height:32px;border:1px solid var(--ln);background:#0d0f13;border-radius:9px;font-size:18px;line-height:1;padding:0}#vtApp .fQm input{width:44px;min-width:0;text-align:center;padding:6px 2px;border-radius:9px;flex:none}.fQm>div button{flex:none}.fQ>button{min-width:0;white-space:nowrap}.fQ>button span{display:block;font-size:15px}.fQ>button small{font-size:12px;white-space:nowrap}.fQm .fInstB{font-size:12px;white-space:nowrap}",
".fQ.inst .fQm .fInstB{color:var(--ac2)}.fQm .fInstB{margin:0}",
".fBt{margin:6px 0}.fPane{min-height:60px}.fEmpty{color:var(--mu);padding:14px 4px;margin:0}.fAll{margin-top:10px}.fAccG .vtRow{border-bottom:1px solid #15171c}",
".fRowP{display:flex;align-items:center;flex-wrap:wrap;gap:8px 14px;padding:10px 2px;border-bottom:1px solid #15171c}.fRc1{display:flex;align-items:center;gap:8px;flex:1 1 130px}.fRc1 small{color:var(--mu)}.fSd{font-size:10px;font-weight:700;letter-spacing:.06em}",
".fRc2,.fRc3{display:flex;flex-direction:column;min-width:70px}.fRc2 small,.fRc3 small{color:var(--mu);font-size:11px}.fRc3{text-align:right;margin-left:auto}.fRc4{display:flex;gap:6px}.fBtn{border:1px solid var(--ln);background:#0d0f13;border-radius:8px;padding:6px 10px;font-size:12px;font-weight:600}.fBtn.x{border-color:var(--ac);color:var(--ac2)}",
".fMkH{display:flex;flex-direction:column;margin-bottom:8px}.fMkH small{color:var(--mu);font-size:11px}.fRow{display:flex;align-items:center;gap:10px;width:100%;background:none;border:0;border-bottom:1px solid #15171c;padding:9px 6px;text-align:left}.fRow.on{background:rgba(59,130,246,.12)}.fRow div{flex:1;min-width:0}.fRow small{display:block;color:var(--mu);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:11px}.fRp{text-align:right}.fRp small{font-size:11px}",
".fBuf i{background:var(--ac)}#vtApp.fut .vtBar i{background:var(--ac)}",
"@media(min-width:900px){",
".fHd .vtIc{display:inline-flex}.fHd .vtTag{display:inline-block}.fT{display:grid;grid-template-columns:250px minmax(0,1fr) 330px;grid-template-rows:minmax(0,1fr)}",
".fT.lc{grid-template-columns:0 minmax(0,1fr) 330px}.fT.rc{grid-template-columns:250px minmax(0,1fr) 0}.fT.lc.rc{grid-template-columns:0 minmax(0,1fr) 0}",
".fMk{display:block;grid-column:1;overflow:auto;border-right:1px solid var(--ln);padding:12px;min-width:0}.fT.lc .fMk{display:none}",
".fMain{display:flex;flex-direction:column;grid-column:2;min-width:0;min-height:0}",
".fHd,.fTf,.fPs,.fChw,.fSt,.fBot,.fTk,.fQ{order:0}.fHd{padding:10px 12px 4px;gap:8px 14px}.fHn small{display:block}.fPx b{font-size:24px}.fHL{display:flex;gap:10px;color:var(--mu);font-size:11px}.fHL b{color:#F5F5F5;font-weight:600}.fTf{margin:2px 12px 6px}",
".fHd{flex-wrap:wrap}.fHd,.fTf,.fPs,.fSt{flex:none}.fChw{flex:none;height:var(--fh);min-height:200px}",
".fSplit{display:flex;flex:none;height:12px;align-items:center;justify-content:center;cursor:row-resize;touch-action:none;margin:-6px 0 -6px;position:relative;z-index:3}.fSplit i{width:56px;height:4px;border-radius:99px;background:var(--ln);transition:background .15s}.fSplit:hover i,.fSplit.on i,.fSplit:focus-visible i{background:var(--ac)}",
".fSt{padding:10px 12px 0}.fSt .vtHint,.fNote{display:block}.fSt .vtStops:empty{display:block}",
".fBot{display:block;flex:1;min-height:90px;overflow:auto;padding:4px 12px 12px}",
".fTk{position:static;grid-column:3;transform:none;visibility:visible;border-radius:0;border:0;border-left:1px solid var(--ln);max-height:none;background:none;overflow:auto;padding:12px;z-index:auto}.fT.rc .fTk{display:none}.fTkH,.fTkBd,.fOrdB{display:none!important}",
"#fBtnL,#fBtnR{display:inline-block}.fQ{display:none}",
".vtBd.fuT .fPage{padding:12px}",
"}",
".fT.full{position:fixed;inset:0;z-index:320;display:flex;flex-direction:column;height:auto;background:#080A0D;padding-top:env(safe-area-inset-top)}",
".fT.full .fMain{display:contents}.fT.full .fMk,.fT.full .fBot,.fT.full .fSplit,.fT.full .fSt .vtHint{display:none}.fT.full .fTk{display:block;position:fixed;grid-column:auto}",
".fT.full .fChw{flex:1;height:auto;min-height:0}.fT.full .fQ{display:flex}.fT.full #fBtnL,.fT.full #fBtnR{display:none}.fT.full .fOrdB{display:inline-block!important}.fT.full .fTk{transform:translateY(105%);visibility:hidden;border:0;border-radius:18px 18px 0 0;background:#0f1116}.fT.full.tkOpen .fTk{transform:none;visibility:visible}.fT.full .fTkH,.fT.full.tkOpen .fTkBd{display:flex}.fT.full .fTkBd{display:none}.fT.full.tkOpen .fTkBd{display:block}"
].join("");
function fuCss(){if($("fuCss"))return;var s=document.createElement("style");s.id="fuCss";s.textContent=FUCSS;document.head.appendChild(s)}

function vtRows(fl){
  return (fl||vtList)().map(function(a){if((a.status!=="active")!==(accTab==="inactive"))return"";
    var eq;try{eq=vtSnap(a).equity}catch(e){eq=a.balance}var pf=eq-a.size,r=a.status==="breached"?'<div class="acc-r"><strong class="dn">'+t("breached")+'</strong><small>Equity '+money(eq)+'</small></div>':a.status==="passed"?'<div class="acc-r"><strong class="up">'+L("Lolos","Passed")+'</strong><small>Equity '+money(eq)+'</small></div>':'<div class="acc-r"><strong class="'+(pf>0?"up":pf<0?"dn":"")+'">'+(pf<0?"-":pf>0?"+":"")+money(Math.abs(pf))+'</strong><small>Equity '+money(eq)+'</small></div>';
    return'<button type="button" class="acc accv" data-vt="'+esc(a.id)+'"><div><b>'+esc(a.program)+" "+kfmt(a.size)+(a.isFunded?" · Funded":"")+'</b><small>'+(a.fut?'Vekxt Futures':'Vekxt Trader')+' | '+(a.phase?t("phase")+" "+a.phase+"/"+a.phases+" | ":"")+'ID '+esc(a.id)+'</small></div>'+r+'<span class="acc-a">&#8250;</span></button>'}).join("")}

function dashHome(){
  var a=curAcc(),home=$("lgHome").href,x=a?"":modeSw();x+=(ACC_API&&accState==="ok")?syncBar():"";
  if(CFG&&user&&!user.verified)return'<div class="lg-card"><b>'+t("verT")+'</b><p>'+t("verMsg")+'</p><div class="lg-msg" id="verMsg" role="alert"></div><button class="lg-btn" type="button" id="verDone">'+t("verDone")+'</button><button class="lg-link" type="button" id="verResend">'+t("verResend")+'</button></div>';
  if(PM==="perp")return perpHome();
  if(PM==="fut")return futHome();
  vtBoot();
  if(selV!==null){var va=vtById(selV);if(va)return x+vtDetail(va);selV=null}
  if(a)return x+accDetail(a);
  if(ACC_API&&accState==="loading"){x+=skel()}
  else if(ACC_API&&accState==="err"){x+='<div class="lg-card"><p>'+t("accErr")+(accInfo?" ["+esc(accInfo)+"]":"")+'</p><button type="button" class="lg-btn ghost" id="accRetry">'+t("accRetry")+'</button></div>'}
  else if(!ACCOUNTS.filter(notPerp).length&&!vtList().length){x+='<div class="lg-card"><b>'+t("mine")+'</b><p>'+t("none")+'</p><a class="lg-btn" href="'+home+'#plans">'+t("start")+'</a></div>'}
  else{
    var VL=vtList(),CA=ACCOUNTS.filter(notPerp),nA=CA.filter(function(c){return !c.breach}).length+VL.filter(function(c){return c.status==="active"}).length,nI=CA.length+VL.length-nA;
    x+='<div class="lg-tabs" role="group" id="accTabs"><button type="button" data-at="active" aria-pressed="'+(accTab==="active")+'">'+t("tabActive")+' ('+nA+')</button><button type="button" data-at="inactive" aria-pressed="'+(accTab==="inactive")+'">'+t("tabInactive")+' ('+nI+')</button></div>';
    if(accTab==="inactive"?!nI:!nA)x+='<div class="lg-card"><p>'+t("accTabNone")+'</p></div>';
    x+='<p class="acc-hint">'+t("accHint")+'</p>';
    x+=ACCOUNTS.map(function(c,i){if(isPerp(c)||!!c.breach!==(accTab==="inactive"))return"";var pf=c.equity-c.size,r=c.breach?'<div class="acc-r"><strong class="dn">'+t("breached")+'</strong><small>Equity '+money(c.equity)+'</small></div>':c.offline?'<div class="acc-r"><strong>'+t("accOff")+'</strong></div>':'<div class="acc-r"><strong class="'+(pf>0?"up":pf<0?"dn":"")+'">'+(pf<0?"-":pf>0?"+":"")+money(Math.abs(pf))+'</strong><small>Equity '+money(c.equity)+'</small></div>';return'<button type="button" class="acc" data-i="'+i+'"><div><b>'+c.program+" "+kfmt(c.size)+'</b><small>'+(c.phase?t("phase")+" "+c.phase+"/"+c.phases+" | ":"")+'ID '+c.id+'</small></div>'+r+'<span class="acc-a">&#8250;</span></button>'}).join("");
  x+=vtRows();
  }
  if(ACCOUNTS.length||vtList().length)x+='<div class="qa"><a class="lg-btn ghost" href="'+home+'#plans">'+t("start")+'</a></div>';
  return x;
}
var view="home",VK=["home","lb","wd","prof","aff","offers","billing","cert"];
var AFF_RATE=10; /* persen komisi affiliate */
var WD_MIN=50; /* minimal penarikan (USD) */
var wdBusy=false,wdFlash=false; /* wdBusy: cegah dobel kirim; wdFlash: tampilkan "tersimpan" setelah kirim */
var affData=null,affState="idle",lbData=null,lbState="idle",lbAt=0,billData=null,billState="idle",billAt=0;
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function ls(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function ss(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function refCode(e){var h=5381;for(var i=0;i<e.length;i++)h=((h<<5)+h+e.charCodeAt(i))>>>0;return"VZ"+h.toString(36).toUpperCase().slice(0,6)}
Object.assign(T.id,{"wdAcc":"Pilih akun","wdNoAcc":"Belum ada akun yang bisa withdraw. Akun harus Funded, dan akun Zero Instant harus memenuhi aturan konsistensi 15%. Akun challenge tidak bisa withdraw.","wdFirst":"Entry pertama","wdNext":"Payout berikutnya","wdNoEntry":"Belum ada trade di akun ini. Jadwal payout dihitung dua mingguan sejak entry pertama.","wdWait":"Payout belum terbuka. Jadwal berikutnya:","wdUsed":"Payout siklus ini sudah diajukan. Siklus berikutnya:","wdConsFail":"Aturan konsistensi belum terpenuhi: profit hari terbesar {p}% dari total profit (maks 15%).","wdCons":"Konsistensi","wdOpenNow":"Payout terbuka"});Object.assign(T.en,{"wdAcc":"Select account","wdNoAcc":"No account can withdraw yet. An account must be Funded, and Zero Instant accounts must meet the 15% consistency rule. Challenge accounts cannot withdraw.","wdFirst":"First entry","wdNext":"Next payout","wdNoEntry":"No trades on this account yet. The biweekly payout schedule counts from the first entry.","wdWait":"Payout is not open yet. Next date:","wdUsed":"This cycle's payout was already requested. Next cycle:","wdConsFail":"Consistency rule not met: your best day is {p}% of total profit (max 15%).","wdCons":"Consistency","wdOpenNow":"Payout open"});
Object.assign(T.id,{"wdConsHint":"Profit hari terbesar dibanding total profit. Maksimal 15% agar bisa withdraw.","wdBankPick":"Pilih bank","wdBankOther":"Bank lain...","wdBankOtherLbl":"Nama bank lainnya"});Object.assign(T.en,{"wdConsHint":"Best day compared to total profit. Maximum 15% to be able to withdraw.","wdBankPick":"Select bank","wdBankOther":"Other bank...","wdBankOtherLbl":"Other bank name"});
Object.assign(T.id,{"n_lb":"Leaderboard","lbT":"Leaderboard trader","lbYou":"Peringkat kamu","lbLoad":"Memuat...","lbErr":"Leaderboard belum bisa dimuat. Coba lagi nanti.","lbNone":"Belum ada data. Daftar muncul setelah ada akun aktif.","lbNo":"Kamu belum masuk daftar. Hanya akun aktif yang dihitung.","lbNote":"Peringkat diurutkan dari persentase profit tertinggi semua jenis akun (CFD, Perps, Vekxt Trader). Nama = username profil. Diperbarui tiap beberapa menit.","eqT":"Equity curve","eqNone":"Belum ada trade. Kurva muncul setelah ada hasil.","eqLow":"Terendah","eqHigh":"Tertinggi","eqNote":"Dihitung per hari dari profit yang sudah tertutup; titik terakhir adalah equity saat ini.","wdMin":"Minimal penarikan 50 USD.","affDesc":"Bagikan kupon kamu. Pembeli dapat diskon {d}% dan kamu dapat komisi {c}% dari nilai pembayaran mereka.","affLoad":"Menyiapkan kupon kamu...","affErr":"Kupon belum bisa dimuat. Coba lagi nanti.","affCoupon":"Kode kupon kamu","affSales":"Pembelian","affNote2":"Komisi dihitung dari pembayaran setelah diskon. Pembelian oleh akun kamu sendiri tidak dihitung."});
Object.assign(T.en,{"n_lb":"Leaderboard","lbT":"Trader leaderboard","lbYou":"Your rank","lbLoad":"Loading...","lbErr":"Could not load the leaderboard. Try again later.","lbNone":"No data yet. The list appears once there are active accounts.","lbNo":"You are not on the list. Only active accounts count.","lbNote":"Ranked by the highest profit percentage across all account types (CFD, Perps, Vekxt Trader). Name = profile username. Updated every few minutes.","eqT":"Equity curve","eqNone":"No trades yet. The curve appears after the first results.","eqLow":"Low","eqHigh":"High","eqNote":"Calculated per day from closed profit; the last point is the current equity.","wdMin":"Minimum withdrawal is 50 USD.","affDesc":"Share your coupon. Buyers get {d}% off and you earn {c}% commission on what they pay.","affLoad":"Preparing your coupon...","affErr":"Could not load your coupon. Try again later.","affCoupon":"Your coupon code","affSales":"Purchases","affNote2":"Commission is calculated on the payment after discount. Purchases by your own account are not counted."});
Object.assign(T.id,{"wdClosedT":"Penarikan ditutup","wdClosed":"Kamu sudah mengajukan penarikan untuk periode ini. Penarikan berikutnya bisa diajukan mulai {d}."});Object.assign(T.en,{"wdClosedT":"Withdrawal closed","wdClosed":"You have already requested a withdrawal for this period. The next one can be requested from {d}."});
var wdAcc=null,pWdBusy=false;
var entUnl={},entAt=0;
function entFetch(){if(!user||Date.now()-entAt<60000)return;entAt=Date.now();apiPost({action:"ent_state"},function(d){entUnl=(d&&d.unlock)||{};if(view==="wd")setTimeout(dash,0)},function(){entAt=0})}
function entKey(a){return a.vt?(a.base||a.id):String(a.id).replace(/^PF-/,"PP-")}
function pUnlock(a){var u=entUnl[entKey(a)];return u&&Number(u.until)>Date.now()?{until:Number(u.until),max:Number(u.max)||10}:null}
function pWdOne(a){var lg=PE.ledger(a);
  return{unlock:pUnlock(a),id:a.id,program:a.program,phase:null,phases:null,size:a.size,equity:a.balance,pnl:lg.pnl,firstEntry:String(lg.firstEntry||"").slice(0,10),funded:true,offline:false,breach:false,perp:true,fundedDate:a.fundedDate||"",certId:a.certId||"",days:lg.days}}
function pFundedLoad(){pLoadAll();entFetch();if(user&&pFsState==="idle"&&!pWdBusy){pWdBusy=true;pRemoteLoad(function(){pWdBusy=false;pHeal();pSave();if(view==="wd"||view==="cert")setTimeout(dash,0)})}}
function pWdList(){pFundedLoad();return PERPS.filter(function(a){return a.status==="active"&&(a.isFunded||pUnlock(a))}).map(pWdOne)}
/* saldo akun simulasi (Perps / Vekxt Trader) langsung dikurangi sebesar nominal withdraw; ditolak admin = dikembalikan */
function pWdDeduct(id,amt,ref){var a=null;PERPS.forEach(function(x){if(x.id===id)a=x});amt=Number(amt);if(!a||!(amt>0))return;
  var q=function(v){return Math.round(v*1e8)/1e8};
  a.balance=q(a.balance-amt);if(a.day&&isFinite(a.day.startBal))a.day.startBal=q(a.day.startBal-amt);if(isFinite(a.peak)&&!(a.rules&&a.rules.lock))a.peak=q(a.peak-amt);
  a.wdTot=Math.round(((a.wdTot||0)+amt)*100)/100;(a.wd=a.wd||[]).push({ref:String(ref||""),amt:amt,at:Date.now()});pSave();pPush(true)}
function wdDeduct(ca,rec,ref){if(ca&&ca.perp)pWdDeduct(ca.id,rec.amt,ref)}
function wdReconcile(){var ch=false;PERPS.forEach(function(a){(a.wd||[]).forEach(function(e){if(e.rf||!e.ref||e.ref==="local")return;
  var r=null;wdList.forEach(function(x){if(x.id===e.ref)r=x});if(!r||r.status!=="rejected")return;
  a.balance+=e.amt;if(a.day)a.day.startBal+=e.amt;if(!(a.rules&&a.rules.lock))a.peak+=e.amt;a.wdTot=Math.max(0,Math.round(((a.wdTot||0)-e.amt)*100)/100);e.rf=1;ch=true})});if(ch){pSave();pPush(true)}}
function pCertList(){pFundedLoad();return PERPS.filter(function(a){return a.isFunded}).map(pWdOne)}
function wdAll(){return ACCOUNTS.concat(pWdList())}
function wdIsInst(a){return /zero|instan/i.test(String(a.program||""))}
function wdEligible(a){return !a.offline&&!a.breach&&(!!a.unlock||(a.funded||wdIsInst(a))&&(!wdIsInst(a)||wdCons(a).ok))}
function wdAccts(){var r=[];wdAll().forEach(function(a,i){if(wdEligible(a))r.push(i)});return r}
function wdSel(){var l=wdAccts();if(!l.length)return null;if(wdAcc===null||l.indexOf(wdAcc)<0)wdAcc=l[0];return wdAll()[wdAcc]}
function wdToday(){return new Date().toISOString().slice(0,10)}
function wdAdd(d,n){return new Date(Date.parse(d+"T00:00:00Z")+n*864e5).toISOString().slice(0,10)}
function wdFirst(a){if(a.firstEntry)return a.firstEntry;var k=Object.keys(a.pnl||{}).sort();return k.length?k[0]:""}
function wdCycle(a){var f=wdFirst(a);if(!f)return{none:true};var d=Math.floor((Date.parse(wdToday()+"T00:00:00Z")-Date.parse(f+"T00:00:00Z"))/864e5),c=Math.max(Math.floor(d/14),0);return{first:f,c:c,open:c>=1,next:wdAdd(f,14*(c+1))}}
function wdCons(a){var tot=0,best=0;Object.keys(a.pnl||{}).forEach(function(k){var x=Number(a.pnl[k])||0;tot+=x;if(x>best)best=x});if(tot<=0)return{ok:false,pct:null};var p=best/tot*100;return{ok:p<=15,pct:p}}
function wdStatus(a){if(a.unlock)return{ok:true,c:"T",test:true,cy:{first:wdFirst(a)||"-",next:"-",c:0,open:true}};var cy=wdCycle(a);if(cy.none)return{ok:false,why:"wdNoEntry"};
 if(!cy.open)return{ok:false,why:"wdWait",date:cy.next,cy:cy};
 if(wdList.some(function(r){return r.accId===a.id&&r.cyc===cy.c}))return{ok:false,why:"wdUsed",date:cy.next,cy:cy};
 if(wdIsInst(a)){var cs=wdCons(a);if(!cs.ok)return{ok:false,why:"wdConsFail",pct:cs.pct,cy:cy}}
 return{ok:true,c:cy.c,cy:cy}}
function wdWhy(st){var x=t(st.why);if(st.why==="wdConsFail")return x.replace("{p}",st.pct==null?"-":st.pct.toFixed(1));return st.date?x+" "+st.date:x}
function avail(){var s=0;ACCOUNTS.forEach(function(a){if(!a.offline&&!a.breach)s+=Math.max(a.equity-a.size,0)});return s}
var wdM="crypto",wdNet="TRC20",wdState="idle",wdList=[];
var WDM=[["crypto","wdCrypto"],["bank","wdBank"],["rise","wdRise"]],WDN=[["TRC20","USDT TRC20"],["ERC20","USDT ERC20"],["BEP20","USDT BEP20"]];
function wdLabel(r){return r.method==="bank"?t("wdBank")+" | "+esc(r.bank||"")+" ****"+esc(String(r.acct||"").slice(-4)):"USDT "+esc(r.net||"")+" | "+esc(String(r.addr||"").slice(0,6))+"..."+esc(String(r.addr||"").slice(-4))}
function loadWd(){
  if(wdState==="loading")return;
  if(CFG&&fs&&user&&user.uid){
    wdState="loading";
    fs.collection("withdrawals").where("uid","==",user.uid).get().then(function(q){
      wdList=q.docs.map(function(d){var r=d.data(),ts=r.createdAt&&r.createdAt.toDate?r.createdAt.toDate():new Date();return Object.assign({},r,{id:d.id,d:ts.toISOString().slice(0,10),ts:ts.getTime()})}).sort(function(a,b){return b.ts-a.ts});
      wdReconcile();wdState="ok";dash();
    }).catch(function(){wdList=[];wdState="ok";dash()});
  }else{wdList=ls("vz_wd_"+user.email,[]).slice().reverse();wdState="ok"}
}
function payCert(r){
  var pa=r.paidAt&&r.paidAt.toDate?r.paidAt.toDate().toISOString():String(r.paidAt||r.d||""),tx=String(r.txId);
  var meth=r.method==="bank"?"Bank Transfer"+(r.bank?" - "+r.bank:""):"USDT "+(r.net||"");
  var u="/p/certificate.html?t=payout&n="+encodeURIComponent(user.name||user.email)+"&p="+encodeURIComponent(r.prog||"")+"&a="+encodeURIComponent(Number(r.amt).toFixed(2))+"&m="+encodeURIComponent(meth)+"&x="+encodeURIComponent(tx)+"&w="+encodeURIComponent(pa)+"&id="+encodeURIComponent(r.certId||("VZP-"+tx.slice(-8).toUpperCase()));
  return'<a class="lg-btn ghost" style="margin:6px 0 12px;font-size:14px;padding:10px" href="'+u+'" target="_blank" rel="noopener">'+t("pcView")+'</a>';
}
function viewWd(){
  var h="";
  var ca=wdSel(),st=ca?wdStatus(ca):null;
  if(!ca)return'<div class="lg-card"><b>'+t("wdT")+'</b><p style="margin-top:8px">'+t("wdNoAcc")+'</p></div>';
  var opts=wdAccts().map(function(i){var a=wdAll()[i];return'<option value="'+i+'"'+(i===wdAcc?' selected="selected"':'')+'>'+a.program+" "+kfmt(a.size)+" | ID "+a.id+'</option>'}).join("");
  var cs=wdIsInst(ca)?wdCons(ca):null;
  h+='<div class="lg-card"><b>'+t("wdT")+'</b><label style="margin-top:12px">'+t("wdAcc")+'<select id="wdAcc">'+opts+'</select></label><div class="grid" style="margin-top:12px"><div><small>'+t("wdAv")+'</small><strong>'+money(Math.max(ca.equity-ca.size,0))+'</strong></div><div><small>'+t("wdSch")+'</small><strong>'+t("wdBi")+'</strong></div><div><small>'+t("wdFirst")+'</small><strong>'+(wdFirst(ca)||"-")+'</strong></div><div><small>'+t("wdNext")+'</small><strong>'+(st.cy?st.cy.next:"-")+'</strong></div>'+(cs?'<div><small>'+t("wdCons")+'</small><strong>'+(cs.pct==null?"-":cs.pct.toFixed(1)+"% / 15%")+'</strong></div>':'')+'</div>'+(st.ok?'<p style="margin-top:10px">'+t("wdOpenNow")+'</p>':'<div class="lg-msg" style="margin-top:10px">'+wdWhy(st)+'</div>')+'</div>';
  var fS0=h.length;
  h+='<div class="lg-card"><div class="lg-demo">'+(CFG?t("wdNote"):t("wdDemo"))+'</div><form id="wdForm" novalidate="novalidate"><fieldset'+(st.ok?'':' disabled="disabled"')+' style="border:0;margin:0;padding:0;min-width:0"><div class="lg-tabs wdm" role="group" id="wdMs">'+WDM.map(function(k){return'<button type="button" data-m="'+k[0]+'" aria-pressed="'+(wdM===k[0])+'"'+(k[0]==="rise"?' disabled="disabled"':'')+'>'+t(k[1])+(k[0]==="rise"?'<small>'+t("wdSoon")+'</small>':'')+'</button>'}).join("")+'</div>';
  h+='<label>'+t("wdAmt")+' (min '+WD_MIN+' USD)<input id="wdAmt" type="number" inputmode="decimal" min="'+WD_MIN+'" step="0.01"/></label>';
  if(wdM==="crypto"){
    h+='<div class="lg-tabs wdm" role="group" id="wdNs">'+WDN.map(function(k){return'<button type="button" data-n="'+k[0]+'" aria-pressed="'+(wdNet===k[0])+'">'+k[1]+'</button>'}).join("")+'</div>';
    h+='<label>'+t("wdAddr")+'<input id="wdAddr" type="text" autocomplete="off" autocapitalize="off" spellcheck="false"/></label>';
  }else{
    h+='<label>'+t("wdBankName")+'<select id="wdBankName"><option value="">'+t("wdBankPick")+'</option>'+WDBANKS.map(function(k){return'<option value="'+k+'">'+k+'</option>'}).join("")+'<option value="__other">'+t("wdBankOther")+'</option></select></label><label id="wdBankOtherWrap" style="display:none">'+t("wdBankOtherLbl")+'<input id="wdBankOther" type="text" autocomplete="off"/></label>';
    h+='<label>'+t("wdBankNo")+'<input id="wdBankNo" type="text" inputmode="numeric" autocomplete="off"/></label><label>'+t("wdBankHolder")+'<input id="wdBankHolder" type="text" autocomplete="off"/></label>';
  }
  h+='<div class="lg-msg" id="wdMsg" role="alert"></div><button class="lg-btn" type="submit">'+t("wdBtn")+'</button></fieldset></form></div>';
  if(st.why==="wdUsed")h=h.slice(0,fS0)+'<div class="lg-card"><b>'+t("wdClosedT")+'</b><p style="margin-top:8px">'+(wdFlash?t("wdOk")+" ":"")+t("wdClosed").replace("{d}",st.date||"-")+'</p></div>';
  h+='<div class="lg-card hist"><b>'+t("wdHist")+'</b>';
  if(wdState==="loading")h+='<p>...</p>';
  else if(!wdList.length)h+='<p>'+t("wdNone")+'</p>';
  else h+=wdList.map(function(r){var pd=r.status==="paid"&&r.txId;return'<div class="rl"><span>'+esc(r.d)+" | "+wdLabel(r)+'</span><span>'+Number(r.amt).toFixed(2)+" USD | "+t(pd?"wdPaid":"wdPend")+'</span></div>'+(pd?payCert(r):"")}).join("");
  return (ca.unlock?'<div class="lg-card"><div class="lg-demo">'+(lang==="id"?"Mode tes payout aktif sampai ":"Payout test mode active until ")+new Date(ca.unlock.until).toISOString().slice(0,16).replace("T"," ")+" UTC. "+(lang==="id"?"Batas tes ":"Test limit ")+ca.unlock.max+" USD"+'</div></div>':"")+h+'</div>';
}
function viewProfForm(){
  var p=(CFG&&prof)?prof:ls("vz_prof_"+user.email,{});
  var note=(CFG&&prof&&!profDone(prof))?'<div class="lg-msg">'+t("needAddr")+'</div>':"";
  return'<div class="lg-card">'+note+'<form id="pfForm" novalidate="novalidate"><label>'+t("name")+'<input id="pfName" type="text" value="'+esc(user.name)+'" autocomplete="name"/></label><label>'+t("email")+'<input type="email" value="'+esc(user.email)+'" disabled="disabled"/></label><label>'+t("pfAddr")+'<textarea id="pfAddr" rows="3" autocomplete="street-address">'+esc(p.address)+'</textarea></label><label>'+t("country")+'<input id="pfCountry" type="text" value="'+esc(p.country)+'" autocomplete="country-name"/></label><label>'+t("prov")+'<input id="pfProv" type="text" value="'+esc(p.province)+'" autocomplete="address-level1"/></label><label>'+t("city")+'<input id="pfCity" type="text" value="'+esc(p.city)+'" autocomplete="address-level2"/></label><label>'+t("phone")+'<input id="pfPhone" type="tel" inputmode="tel" value="'+esc(p.phone)+'" autocomplete="tel"/></label><label>'+t("pfTg")+'<input id="pfTg" type="text" value="'+esc(p.tg)+'" placeholder="@username" autocomplete="off"/></label><div class="lg-msg" id="pfMsg" role="alert"></div><button class="lg-btn" type="submit">'+t("pfSave")+'</button></form></div>';
}
function apiPost(extra,ok,fail){
  if(!ACC_API){fail();return}
  var go=function(tok){fetch(ACC_API,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(Object.assign({email:user.email,token:tok||null},extra))}).then(function(r){return r.json()}).then(function(d){if(!d||d.error)throw d||{};ok(d)}).catch(function(){fail()})};
  if(CFG&&fb&&fb.auth().currentUser)fb.auth().currentUser.getIdToken().then(go,function(){go(null)});else go(null);
}
function loadAff(){
  if(affState==="loading"||affState==="ok")return;
  affState="loading";
  apiPost({action:"aff",name:user.name||""},function(d){affData=d;affState="ok";dash()},function(){affState="err";dash()});
}
function loadLb(){
  if(lbState==="loading")return;
  lbState="loading";
  apiPost({action:"lb"},function(d){lbData=d;lbState="ok";lbAt=Date.now();dash()},function(){lbState="err";lbAt=Date.now();dash()});
}
function loadBill(){
  if(billState==="loading")return;
  billState="loading";
  apiPost({action:"billing"},function(d){billData=d;billState=d&&d.ok?"ok":"err";billAt=Date.now();dash()},function(){billState="err";billAt=Date.now();dash()});
}
function billKind(k,p){return k==="perp"?"Perps":k==="fut"||p==="fut"?"Futures":k==="vt"?"Vekxt Trader (CFD)":"CFD (MT5)"}
function viewBill(){
  var c='<div class="lg-card"><b>'+t("billT")+'</b>';
  if(billState==="idle"||billState==="loading")return c+'<p style="margin-top:8px">'+t("billLoad")+'</p></div>';
  if(billState!=="ok"||!billData)return c+'<p style="margin-top:8px">'+t("billErr")+'</p></div>';
  var rows=billData.rows||[];
  if(!rows.length)return c+'<p style="margin-top:8px">'+t("billNone")+'</p></div>';
  var tot=0;rows.forEach(function(r){tot+=Number(r.usd)||0});
  var h='<div class="lg-card"><div class="grid"><div><small>'+t("billTotal")+'</small><strong>'+money(tot)+'</strong></div><div><small>'+t("billOrders")+'</small><strong>'+rows.length+'</strong></div></div></div>';
  h+=c+'<div style="margin-top:6px">'+rows.map(function(r){
    var d=r.at?new Date(r.at).toISOString().slice(0,10):"-",nm=(r.p==="perp"?"Vekxt 1 Step Perpetuals":r.p==="fut"?"Vekxt Futures":r.p==="hyper"?"Hyper 1 Step":r.p==="nova"?"Nova 2 Step":r.p==="zero"?"Zero Instant":esc(r.p||""));
    return'<div class="rl"><span><b>'+nm+" "+kfmt(r.s)+'</b><br/><small>'+esc(billKind(r.k,r.p))+" | "+d+" | "+t("billInv")+" "+esc(r.id)+(r.cp?" | "+t("billCp")+" "+esc(r.cp):"")+(r.m?" | "+esc(r.m):"")+'</small></span><span>'+(r.usd==null?'<small>'+t("billOld")+'</small>':money(r.usd))+" | "+t("billPaid")+'</span></div>'}).join("")+'</div><p style="margin-top:12px;font-size:13px">'+t("billNote")+'</p></div>';
  return h;
}
function viewAff(){
  var d=affState==="ok"?affData:null;
  var h='<div class="lg-card"><b>'+t("affT")+'</b><p style="margin-top:8px">'+t("affDesc").replace("{d}",d?d.disc:15).replace("{c}",AFF_RATE)+'</p>';
  if(affState==="idle"||affState==="loading")h+='<p style="margin-top:8px">'+t("affLoad")+'</p>';
  else if(!d)h+='<p style="margin-top:8px">'+t("affErr")+'</p>';
  else h+='<label style="margin-top:12px">'+t("affCoupon")+'<div class="aff-row"><input id="affLink" type="text" readonly="readonly" value="'+esc(d.code)+'"/><button class="lg-btn ghost" type="button" id="affCopy">'+t("affCopy")+'</button></div></label>';
  h+='</div><div class="lg-card"><div class="grid"><div><small>'+t("affSales")+'</small><strong>'+(d?d.sales:0)+'</strong></div><div><small>'+t("affComm")+'</small><strong>'+money(d?d.commission:0)+'</strong></div><div><small>'+t("affRate")+'</small><strong>'+AFF_RATE+'%</strong></div></div><p style="margin-top:14px;font-size:13px">'+t("affNote2")+'</p></div>';
  return h;
}
function lbType(k){return k==="perp"?"Perps":k==="fut"?"Futures":k==="vt"?"CFD Trader":"CFD MT5"}
function lbRow(r,me){
  var rk=r.rank,col=rk===1?"#F5B84B":rk===2?"#C0C6CF":rk===3?"#CD7F32":"var(--muted)",up=r.pct>=0,ct=r.c?esc(r.c)+" \u00b7 ":"";
  return'<div class="lbr'+(me?" me":"")+'"><span class="lbn" style="color:'+col+'">'+rk+'</span><div><b>'+esc(r.n)+'</b><small>'+ct+lbType(r.k)+" \u00b7 "+esc(r.p)+" "+kfmt(r.s)+(r.k==="perp"?" USDT":"")+(r.f?" \u00b7 Funded":"")+'</small></div><strong class="'+(up?"up":"dn")+'">'+(up?"+":"")+r.pct.toFixed(2)+'%</strong></div>';
}
function viewLb(){
  if(lbState==="idle"||lbState==="loading")return'<div class="lg-card"><b>'+t("lbT")+'</b><p style="margin-top:8px">'+t("lbLoad")+'</p></div>';
  if(lbState!=="ok"||!lbData)return'<div class="lg-card"><b>'+t("lbT")+'</b><p style="margin-top:8px">'+t("lbErr")+'</p></div>';
  var h='<div class="lg-card"><b>'+t("lbT")+'</b>';
  if(!lbData.rows.length)h+='<p style="margin-top:8px">'+t("lbNone")+'</p>';
  else h+='<div style="margin-top:6px">'+lbData.rows.map(function(r){return lbRow(r,lbData.me&&lbData.me.rank===r.rank)}).join("")+'</div>';
  h+='</div>';
  if(lbData.rows.length)h+='<div class="lg-card"><b>'+t("lbYou")+'</b>'+(lbData.me?'<div style="margin-top:6px">'+lbRow(lbData.me,true)+'</div>':'<p style="margin-top:8px">'+t("lbNo")+'</p>')+'<p style="margin-top:12px;font-size:13px">'+t("lbNote")+'</p></div>';
  return h;
}
function eqCard(a){
  var ds=Object.keys(a.pnl||{}).sort(),v=[a.size],c=a.size;
  if(!ds.length)return'<div class="lg-card"><b>'+t("eqT")+'</b><p style="margin-top:8px">'+t("eqNone")+'</p></div>';
  ds.forEach(function(d){c+=Number(a.pnl[d])||0;v.push(c)});
  if(Math.abs(a.equity-c)>=0.01)v.push(a.equity);
  var W=320,H=140,pl=8,pr=8,pt=14,pb=14,lo=Math.min.apply(null,v),hi=Math.max.apply(null,v);
  if(hi-lo<1){hi+=1;lo-=1}
  var pad=(hi-lo)*.12,L=lo-pad,Hh=hi+pad;
  function X(i){return pl+(W-pl-pr)*(v.length<2?0:i/(v.length-1))}
  function Y(z){return pt+(H-pt-pb)*(1-(z-L)/(Hh-L))}
  var line="M"+v.map(function(z,i){return X(i).toFixed(1)+","+Y(z).toFixed(1)}).join(" L"),area=line+" L"+X(v.length-1).toFixed(1)+","+(H-pb)+" L"+X(0).toFixed(1)+","+(H-pb)+" Z",by=Y(a.size).toFixed(1);
  return'<div class="lg-card"><b>'+t("eqT")+'</b><svg viewBox="0 0 '+W+' '+H+'" class="eqsvg" role="img" aria-label="'+t("eqT")+'"><defs><linearGradient id="eqg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B79CF6" stop-opacity=".35"/><stop offset="1" stop-color="#B79CF6" stop-opacity="0"/></linearGradient></defs><line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+by+'" y2="'+by+'" class="eqbase"/><path d="'+area+'" fill="url(#eqg)"/><path d="'+line+'" class="eqline"/><circle cx="'+X(v.length-1).toFixed(1)+'" cy="'+Y(v[v.length-1]).toFixed(1)+'" r="4" class="eqdot"/></svg><div class="eqleg"><span>'+t("eqLow")+" "+money(lo)+'</span><span>'+t("eqHigh")+" "+money(hi)+'</span></div><p class="acc-hint" style="margin-top:8px">'+t("eqNote")+'</p></div>';
}
function viewKyc(){
  var st=(kyc&&kyc.status)||"none";
  var h='<div class="lg-card"><div class="dtop" style="margin-bottom:10px"><b>'+t("kycT")+'</b><span class="tag kyc-'+st+'">'+t("kyc_"+st)+'</span></div>';
  if(kycState==="loading")return h+'<p>...</p></div>';
  if(st==="verified")return h+'<p>'+t("kycOkMsg")+'</p></div>';
  if(st==="pending")return h+'<p>'+t("kycPendMsg")+'</p></div>';
  if(!fb||!fb.auth().currentUser)return h+'<p>'+t("kycOff")+'</p></div>';
  if(st==="rejected"&&kyc&&kyc.note)h+='<div class="lg-msg">'+t("kycRej")+": "+esc(String(kyc.note).slice(0,200))+'</div>';
  h+='<p>'+t("kycDesc")+'</p><form id="kycForm" novalidate="novalidate"><label>'+t("kycType")+'<select id="kycDoc"><option value="ktp">KTP / ID</option><option value="passport">'+t("kycPass")+'</option><option value="sim">SIM</option></select></label>';
  h+='<label>'+t("kycId")+'<input id="kycId" type="file" accept="image/jpeg,image/png,image/webp,application/pdf"/></label>';
  h+='<label>'+t("kycSelfie")+'<input id="kycSelfie" type="file" accept="image/jpeg,image/png,image/webp" capture="user"/></label>';
  return h+'<div class="lg-msg" id="kycMsg" role="alert"></div><button class="lg-btn" type="submit">'+t("kycBtn")+'</button></form></div>';
}
function viewOut(){return'<div class="lg-card"><button class="lg-btn ghost" type="button" id="pfOut" style="width:100%">'+t("out")+'</button></div>'}
function viewProf(){return viewProfForm()+viewKyc()+viewOut()}
function loadKyc(){
  if(!fb||!fb.auth().currentUser||!user||!user.uid){kycState="ok";return}
  if(kycState==="loading")return;
  kycState="loading";
  var current=fb.auth().currentUser;
  current.getIdToken().then(function(token){
    return fetch(KYC_API.replace(/\/$/,"")+"/kyc/status",{headers:{Authorization:"Bearer "+token}});
  }).then(function(r){return r.json().then(function(d){if(!r.ok||!d.success)throw new Error(d.error||"status");return d.kyc||null;});})
    .then(function(d){kyc=d;kycState="ok";dash();})
    .catch(function(){kyc=null;kycState="ok";dash();});
}
function prepFile(f,imgOnly){
  return new Promise(function(res,rej){
    var isPdf=f.type==="application/pdf";
    if(!(/^image\/(jpeg|png|webp)$/.test(f.type)||(isPdf&&!imgOnly))){rej(new Error("kycType"));return}
    if(f.size>10*1024*1024){rej(new Error("kycBig"));return}
    if(isPdf){res({blob:f,type:"application/pdf",ext:"pdf"});return}
    var img=new Image(),u=URL.createObjectURL(f);
    img.onload=function(){
      var k=Math.min(1,1600/Math.max(img.width,img.height)),c=document.createElement("canvas");
      c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);
      c.getContext("2d").drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(u);
      c.toBlob(function(b){b?res({blob:b,type:"image/jpeg",ext:"jpg"}):rej(new Error("kycType"))},"image/jpeg",0.82);
    };
    img.onerror=function(){URL.revokeObjectURL(u);rej(new Error("kycType"))};
    img.src=u;
  });
}
function putKyc(name,p){
  var current=fb&&fb.auth().currentUser;
  if(!current) return Promise.reject(new Error("auth"));
  if(!KYC_API||KYC_API.indexOf("GANTI-DENGAN-URL-WORKER-KAMU")!==-1){
    return Promise.reject(new Error("kycOff"));
  }
  return current.getIdToken().then(function(token){
    var form=new FormData();
    form.append("file",p.blob,name+"."+p.ext);
    form.append("kind",name);
    return fetch(KYC_API.replace(/\/$/,"")+"/upload",{
      method:"POST",
      headers:{Authorization:"Bearer "+token},
      body:form
    });
  }).then(function(res){
    return res.json().catch(function(){return {};}).then(function(data){
      if(!res.ok||!data.success||!data.objectKey){
        throw new Error(data.error||"upload");
      }
      return data.objectKey;
    });
  });
}
var OFFERS=[ /* EDIT: daftar penawaran. code harus sama dengan kupon yang valid di checkout. until = YYYY-MM-DD (kosongkan jika tanpa batas). */
 {code:"VEKXT30",tag:"-30%",until:"2026-12-31",newOnly:true,id:{t:"Diskon 30% pengguna baru",d:"Khusus pengguna baru. Berlaku untuk Hyper dan Nova, tidak berlaku untuk akun Zero Instant."},en:{t:"30% off for new users",d:"New users only. Valid for Hyper and Nova, not valid for Zero Instant accounts."}},
 {code:"PEPE15",tag:"-15%",until:"2026-12-31",id:{t:"Diskon 15% semua pengguna",d:"Berlaku untuk semua pengguna di Hyper dan Nova, tidak berlaku untuk akun Zero Instant."},en:{t:"15% off for everyone",d:"Valid for all users on Hyper and Nova, not valid for Zero Instant accounts."}}
];
function viewOffers(){
  var today=new Date().toISOString().slice(0,10),home=$("lgHome").href;
  var list=OFFERS.filter(function(o){return(!o.until||o.until>=today)&&!(o.newOnly&&accState==="ok"&&ACCOUNTS.length>0)});
  if(!list.length)return'<div class="lg-card"><b>'+t("ofT")+'</b><p style="margin-top:8px">'+t("ofNone")+'</p></div>';
  return list.map(function(o){
    var L=o[lang]||o.id;
    return'<div class="lg-card of"><div class="dtop" style="margin-bottom:8px"><div><b>'+esc(L.t)+'</b><p>'+esc(L.d)+'</p></div>'+(o.tag?'<span class="tag">'+esc(o.tag)+'</span>':'')+'</div>'
     +'<div class="aff-row"><input type="text" readonly="readonly" value="'+esc(o.code)+'"/><button class="lg-btn ghost" type="button" data-co="'+esc(o.code)+'">'+t("affCopy")+'</button></div>'
     +'<a class="lg-btn" href="'+home.split("#")[0]+(home.indexOf("?")>-1?"&":"?")+"cp="+encodeURIComponent(o.code)+'#plans">'+t("ofUse")+'</a>'+(o.until?'<small>'+t("ofUntil")+" "+esc(o.until)+'</small>':'')+'</div>';
  }).join("");
}
function viewCert(){
  if(ACC_API&&(accState==="loading"||accState==="idle"))return skel();
  var f=ACCOUNTS.filter(function(a){return a.funded&&!a.offline}).concat(pCertList());
  if(!f.length)return'<div class="lg-card"><b>'+t("ceT")+'</b><p style="margin-top:8px">'+t("ceNone")+'</p></div>';
  return f.map(function(a){
    var d=a.fundedDate||new Date().toISOString().slice(0,10),cid=a.certId||("VZ-"+a.id);
    var u="/p/certificate.html?n="+encodeURIComponent(user.name||user.email)+"&p="+encodeURIComponent(a.program)+"&s="+encodeURIComponent(a.size.toLocaleString("en-US")+" USD")+"&d="+encodeURIComponent(d)+"&id="+encodeURIComponent(cid)+"&f="+encodeURIComponent(a.firstEntry||"");
    return'<div class="lg-card"><div class="dtop"><div><b>'+a.program+" "+kfmt(a.size)+'</b><p>ID '+a.id+'</p></div><span class="tag">'+t("ceFunded")+'</span></div><a class="lg-btn" href="'+u+'" target="_blank" rel="noopener">'+t("ceView")+'</a></div>';
  }).join("");
}
function lbReportMaybe(){
  if(!user||!ACC_API||prof===null)return;
  var k="vzLbRep:"+user.email,last=0;try{last=+localStorage.getItem(k)||0}catch(e){}
  if(Date.now()-last<1800000)return;
  pLoadAll();if(pFsState==="idle"){vtBoot();return}
  if(pFsState!=="ok")return;
  var acc=[];PERPS.forEach(function(a){if(a.status!=="active"||a.demo)return;acc.push({p:a.program,s:a.size,pct:(a.balance+(a.wdTot||0)-a.size)/a.size*100,k:a.fut?"fut":a.vt?"vt":"perp",f:a.isFunded?1:0})});
  try{localStorage.setItem(k,String(Date.now()))}catch(e){}
  apiPost({action:"lb_report",accounts:acc,profile:{n:user.name,c:(prof&&prof.country)||""}},function(){},function(){try{localStorage.removeItem(k)}catch(e){}})}
function dash(){
  try{lbReportMaybe()}catch(e){}
  if(selAcc!==lastSel){lastSel=selAcc;credShow=false}
  var h='<div class="lg-tabs dnav" role="group">'+VK.map(function(k){return'<button type="button" data-k="'+k+'" aria-pressed="'+(view===k)+'">'+t("n_"+k)+'</button>'}).join("")+'</div>';
  if(view==="wd"&&wdState==="idle")loadWd();
  if(view==="prof"&&kycState==="idle")loadKyc();
  if(view==="aff"&&affState==="idle")loadAff();
  if(view==="billing"&&(billState==="idle"||((billState==="ok"||billState==="err")&&Date.now()-billAt>60000)))loadBill();
  if(view==="lb"&&(lbState==="idle"||((lbState==="ok"||lbState==="err")&&Date.now()-lbAt>60000)))loadLb();
  h+=view==="lb"?viewLb():view==="wd"?viewWd():view==="prof"?viewProf():view==="aff"?viewAff():view==="offers"?viewOffers():view==="billing"?viewBill():view==="cert"?viewCert():dashHome();
  var db=$("dBody"),key=[view,selAcc,accState].join(":"),fresh=key!==animKey;animKey=key;
  db.innerHTML=h;db.classList.toggle("vz-anim",fresh);if($("pTerm"))pAfter();
  document.querySelectorAll(".dnav button").forEach(function(b){b.onclick=function(){view=b.dataset.k;if(view==="home"){selAcc=null;selP=null;selV=null}dash()}});
  document.querySelectorAll(".acc:not(.accv)").forEach(function(b){b.onclick=function(){selAcc=+b.dataset.i;calY=null;histN=10;dash()}});
  document.querySelectorAll(".accv").forEach(function(b){b.onclick=function(){selV=b.dataset.vt;calY=null;histN=10;dash()}});
  var gt=$("vtGoTrade");if(gt)gt.onclick=function(){vtOpen(selV)};
  var ab=$("accBack");if(ab)ab.onclick=function(){selAcc=null;selV=null;dash()};
  document.querySelectorAll("#accTabs button").forEach(function(b){b.onclick=function(){accTab=b.dataset.at;dash()}});
  var vd=$("verDone");
  if(vd)vd.onclick=function(){var cu=fb.auth().currentUser;cu.reload().then(function(){return cu.getIdToken(true)}).then(function(){user.verified=cu.emailVerified;if(user.verified){accState="idle";dash();loadAccounts()}else{$("verMsg").textContent=t("verNot")}}).catch(function(){$("verMsg").textContent=t("eGen")})};
  var vr=$("verResend");
  if(vr)vr.onclick=function(){fb.auth().currentUser.sendEmailVerification().then(function(){$("verMsg").textContent=t("verSent")}).catch(function(){$("verMsg").textContent=t("eGen")})};
  var hm=$("histMore");if(hm)hm.onclick=function(){histN+=20;dash()};
  var ar=$("accRetry");if(ar)ar.onclick=function(){accState="idle";loadAccounts()};
  var cpv=$("calPrev");
  if(cpv){cpv.onclick=function(){calM--;if(calM<0){calM=11;calY--}dash()};$("calNext").onclick=function(){calM++;if(calM>11){calM=0;calY++}dash()}}
  document.querySelectorAll("#wdMs button").forEach(function(b){b.onclick=function(){if(b.disabled)return;wdM=b.dataset.m;dash()}});
  var wa=$("wdAcc");if(wa)wa.onchange=function(){wdAcc=+wa.value;wdFlash=false;dash()};
  var wbn=$("wdBankName");if(wbn)wbn.onchange=function(){var ow=$("wdBankOtherWrap");if(ow)ow.style.display=wbn.value==="__other"?"":"none"};
  document.querySelectorAll("#wdNs button").forEach(function(b){b.onclick=function(){wdNet=b.dataset.n;dash()}});
  var wf=$("wdForm");
  if(wf)wf.onsubmit=function(e){
    e.preventDefault();if(wdBusy)return;var m=$("wdMsg"),amt=parseFloat($("wdAmt").value),rec={amt:amt,method:wdM,status:"pending",email:user.email};
    if(!(amt>0)){m.textContent=t("wdBad");return}
    if(amt<WD_MIN){m.textContent=t("wdMin");return}
    if(wdState!=="ok")return;
    var ca=wdSel(),st0=ca?wdStatus(ca):null;if(!ca||!st0.ok){m.textContent=ca?wdWhy(st0):t("wdNoAcc");return}
    if(amt>(ca.unlock?Math.max(ca.equity-ca.size,0,ca.unlock.max):Math.max(ca.equity-ca.size,0))){m.textContent=t("wdMax");return}
    rec.accId=ca.id;rec.cyc=st0.c;rec.prog=ca.program;if(ca.unlock)rec.test=true;
    if(wdM==="crypto"){
      var ad=$("wdAddr").value.trim();
      var ok=wdNet==="TRC20"?/^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(ad):/^0x[0-9a-fA-F]{40}$/.test(ad);
      if(!ok){m.textContent=t("wdEAddr");return}
      rec.net=wdNet;rec.addr=ad;
    }else{
      var bn=wdBankVal().trim(),no=$("wdBankNo").value.trim().replace(/\s+/g,""),ho=$("wdBankHolder").value.trim();
      if(bn.length<2||!/^\d{5,20}$/.test(no)||ho.length<3){m.textContent=t("wdEBank");return}
      rec.bank=bn;rec.acct=no;rec.holder=ho;
    }
    wdBusy=true;
    var sb=wf.querySelector('button[type="submit"]');if(sb)sb.disabled=true;
    var fail=function(){wdBusy=false;if(sb)sb.disabled=false;m.textContent=t("eProf")};
    var done=function(){wdBusy=false;wdFlash=true;wdList.unshift(Object.assign({},rec,{d:new Date().toISOString().slice(0,10),ts:Date.now()}));wdState="idle";dash()};
    if(CFG&&fs&&user.uid){
      rec.uid=user.uid;
      var col=fs.collection("withdrawals"),ref=rec.test?col.doc():col.doc(user.uid+"_"+String(ca.id).replace(/[^\w-]/g,"")+"_"+rec.cyc);   /* id tetap per akun+siklus: kirim dobel tidak bisa membuat dua dokumen */
      ref.set(Object.assign({createdAt:firebase.firestore.FieldValue.serverTimestamp()},rec)).then(function(){wdDeduct(ca,rec,ref.id);done()}).catch(fail);
    }else{
      var k="vz_wd_"+user.email,w=ls(k,[]);rec.d=new Date().toISOString().slice(0,10);w.push(rec);ss(k,w);wdDeduct(ca,rec,"local");done();
    }
  };
  var po=$("pfOut");if(po)po.onclick=function(){var ob=$("dOut");if(ob)ob.click()};
  var pf=$("pfForm");
  if(pf)pf.onsubmit=function(e){
    e.preventDefault();var n=$("pfName").value.trim(),ad=$("pfAddr").value.trim(),tg=$("pfTg").value.trim(),pm=$("pfMsg");
    if(!n){pm.textContent=t("eName");return}
    if(ad.length<10){pm.textContent=t("eAddr");return}
    var lo={country:$("pfCountry").value.trim(),province:$("pfProv").value.trim(),city:$("pfCity").value.trim(),phone:$("pfPhone").value.trim().replace(/[\s()-]/g,"")};
    if(lo.country.length<2||lo.province.length<2||lo.city.length<2){pm.textContent=t("eLoc");return}
    if(!phoneOk(lo.phone)){pm.textContent=t("ePhone");return}
    user.name=n;
    if(CFG&&fb&&fb.auth().currentUser){
      fb.auth().currentUser.updateProfile({displayName:n});
      saveProfile(user.uid,Object.assign({name:n,email:user.email,tg:tg,address:ad},lo)).then(function(){prof=Object.assign({},prof,{tg:tg,address:ad},lo);$("dHello").textContent=t("hello")+n;pm.textContent=t("pfOk")}).catch(function(){pm.textContent=t("eProf")});
    }else{
      ss("vz_prof_"+user.email,Object.assign({tg:tg,address:ad},lo));
      var us=getUsers();if(us[user.email]){us[user.email].name=n;setUsers(us)}
      $("dHello").textContent=t("hello")+n;pm.textContent=t("pfOk");
    }
  };
  var rb=$("rfBtn");if(rb)rb.onclick=function(){refreshAccounts(true)};
  var ce=$("crEye");if(ce)ce.onclick=function(){credShow=!credShow;dash()};
  document.querySelectorAll("[data-cp]").forEach(function(b){b.onclick=function(){var ac=curAcc();if(ac&&ac.cred)copyTxt(ac.cred[b.dataset.cp],b)}});
  document.querySelectorAll("[data-co]").forEach(function(b){b.onclick=function(){copyTxt(b.dataset.co,b)}});
  var kf=$("kycForm");
  if(kf)kf.onsubmit=function(e){
    e.preventDefault();
    var m=$("kycMsg"),idf=$("kycId").files[0],sf=$("kycSelfie").files[0],dt=$("kycDoc").value,btn=kf.querySelector("button[type=submit]"),uid=user.uid;
    if(!idf||!sf){m.textContent=t("kycEFile");return}
    btn.disabled=true;m.textContent=t("kycUp");
    Promise.all([prepFile(idf,false),prepFile(sf,true)]).then(function(f){
      return Promise.all([putKyc("id",f[0]),putKyc("selfie",f[1])]);
    }).then(function(p){
      var current=fb&&fb.auth().currentUser;
      if(!current)throw new Error("auth");
      return current.getIdToken().then(function(token){
        return fetch(KYC_API.replace(/\/$/,"")+"/kyc/submit",{
          method:"POST",
          headers:{Authorization:"Bearer "+token,"Content-Type":"application/json"},
          body:JSON.stringify({docType:dt,idPath:p[0],selfiePath:p[1]})
        });
      }).then(function(r){return r.json().then(function(d){if(!r.ok||!d.success)throw new Error(d.error||"submit");return d;});});
    }).then(function(){
      kyc={status:"pending"};kycState="ok";dash();
    }).catch(function(err){
      btn.disabled=false;
      var c=err&&err.message;
      m.textContent=c==="kycBig"?t("kycEBig"):
        c==="kycType"?t("kycEType"):
        c==="kycOff"?t("kycOff"):
        c==="auth"?"Silakan login ulang, lalu coba lagi.":
        (c==="unauthorized"||c==="invalid_token")?"Sesi login tidak valid. Login ulang lalu coba lagi.":
        (c==="d1_not_configured"||c==="r2_not_configured")?"Konfigurasi Cloudflare KYC belum lengkap. Hubungi admin.":
        "Pengajuan KYC gagal ("+String(c||"network").slice(0,80)+"). Periksa Worker, D1, R2, dan CORS.";
    });
  };
  var cp=$("affCopy");
  if(cp)cp.onclick=function(){
    var i=$("affLink");i.select();i.setSelectionRange(0,999);
    try{if(navigator.clipboard)navigator.clipboard.writeText(i.value);else document.execCommand("copy")}catch(e){try{document.execCommand("copy")}catch(x){}}
    cp.textContent=t("affCopied");setTimeout(function(){cp.textContent=t("affCopy")},1500);
  };
}
function paint(){paintMode();
  document.documentElement.lang=lang;
  $("lgBox").className="lg-box"+(user?" wide":"");
  $("lgDemo").style.display="none";
  $("tLogin").textContent=t("tl");$("tSignup").textContent=t("ts");
  $("tLogin").setAttribute("aria-pressed",mode==="login");$("tSignup").setAttribute("aria-pressed",mode==="signup");
  $("lgTitle").textContent=mode==="login"?t("hl"):t("hs");
  $("lName").style.display=mode==="signup"?"block":"none";
  $("lAddr").style.display=mode==="signup"?"block":"none";
  ["lCountry","lProv","lCity","lPhone"].forEach(function(i){$(i).style.display=mode==="signup"?"block":"none"});$("sCountry").textContent=t("country");$("sProv").textContent=t("prov");$("sCity").textContent=t("city");$("sPhone").textContent=t("phone");$("sAddr").textContent=t("addr");$("fAddr").placeholder=t("addrPh");
  $("lgOr").style.display=CFG?"flex":"none";$("sOr").textContent=t("or");$("lgGoogle").style.display=CFG?"block":"none";$("lgGoogle").textContent=t("google");
  $("sName").textContent=t("name");$("sEmail").textContent=t("email");$("sPass").textContent=t("pass");
  $("fPass").setAttribute("autocomplete",mode==="login"?"current-password":"new-password");
  $("lgSubmit").textContent=mode==="login"?t("bl"):t("bs");
  $("lgForgot").textContent=t("forgot");$("lgForgot").style.display=mode==="login"?"block":"none";
  if(!user){FRZ={};frzP=null;view="home";selAcc=null;accTab="active";ACCOUNTS=[];accState="idle";accInfo="";wdState="idle";wdList=[];wdAcc=null;kyc=null;kycState="idle";wdBusy=false;wdFlash=false;affState="idle";affData=null;lbState="idle";lbData=null;lastSync=0;accSig="";rfErr=""}
  $("lgAuth").style.display=user?"none":"block";
  $("lgDash").style.display=user?"block":"none";
  if(user){$("dHello").textContent=t("hello")+(user.name||user.email);$("dEmail").textContent=user.email;$("dOut").textContent=t("out");dash();loadAccounts()}
  document.querySelectorAll(".lg-lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===lang)});
  chatUI();
}
function sha(s){
  if(!window.crypto||!crypto.subtle)return Promise.resolve("p"+btoa(unescape(encodeURIComponent(s))));
  return crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)).then(function(b){return Array.prototype.map.call(new Uint8Array(b),function(x){return("0"+x.toString(16)).slice(-2)}).join("")});
}
function getUsers(){try{return JSON.parse(localStorage.getItem("vz_users")||"{}")}catch(e){return{}}}
function setUsers(u){try{localStorage.setItem("vz_users",JSON.stringify(u))}catch(e){}}
function demoAuth(m,name,email,pass){
  return sha(pass).then(function(h){
    var us=getUsers();
    if(m==="signup"){if(us[email])throw{code:"auth/email-already-in-use"};us[email]={name:name,h:h};setUsers(us)}
    else if(!us[email]||us[email].h!==h)throw{code:"auth/invalid-credential"};
    try{localStorage.setItem("vz_session",email)}catch(e){}
    return{name:us[email].name,email:email};
  });
}
function fbAuth(m,name,email,pass,addr,loc){
  var a=fb.auth();
  if(m==="signup"){
    signingUp=true;
    return a.createUserWithEmailAndPassword(email,pass).then(function(c){
      return c.user.updateProfile({displayName:name}).then(function(){
        c.user.sendEmailVerification().catch(function(){});
        var pd=Object.assign({name:name,email:email,address:addr},loc||{});return saveProfile(c.user.uid,pd).then(function(){prof=Object.assign({},pd)},function(){prof=Object.assign({},pd)}).then(function(){return{name:name,email:email,uid:c.user.uid,verified:false}});
      });
    }).then(function(u){signingUp=false;return u},function(e){signingUp=false;throw e});
  }
  return a.signInWithEmailAndPassword(email,pass).then(function(c){return{name:c.user.displayName||"",email:c.user.email,uid:c.user.uid,verified:c.user.emailVerified}});
}
function errKey(e){
  var c=(e&&e.code)||"";
  if(c==="auth/email-already-in-use")return"eExists";
  if(c==="auth/weak-password")return"eWeak";
  if(c==="auth/invalid-email")return"eEmail";
  if(c==="auth/invalid-credential"||c==="auth/wrong-password"||c==="auth/user-not-found"||c==="auth/invalid-login-credentials")return"eBad";
  return"eGen";
}
$("lgForm").addEventListener("submit",function(e){
  e.preventDefault();msg("");
  var name=$("fName").value.trim(),email=$("fEmail").value.trim().toLowerCase(),pass=$("fPass").value,addr=$("fAddr").value.trim();
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){msg("eEmail");return}
  if(mode==="signup"&&!name){msg("eName");return}
  if(mode==="signup"&&addr.length<10){msg("eAddr");return}
  var loc={country:$("fCountry").value.trim(),province:$("fProv").value.trim(),city:$("fCity").value.trim(),phone:$("fPhone").value.trim().replace(/[\s()-]/g,"")};
  if(mode==="signup"&&(loc.country.length<2||loc.province.length<2||loc.city.length<2)){msg("eLoc");return}
  if(mode==="signup"&&!phoneOk(loc.phone)){msg("ePhone");return}
  if(mode==="signup"&&pass.length<8){msg("eWeak");return}
  if(!pass){msg("eBad");return}
  $("lgSubmit").disabled=true;
  (CFG?fbAuth:demoAuth)(mode,name,email,pass,addr,loc).then(function(u){user=u;if(!CFG&&mode==="signup")ss("vz_prof_"+email,Object.assign({address:addr},loc));$("fPass").value="";paint()}).catch(function(err){msg(errKey(err))}).then(function(){$("lgSubmit").disabled=false});
});
$("lgForgot").onclick=function(){
  msg("");var email=$("fEmail").value.trim().toLowerCase();
  if(!CFG){msg("resetDemo");return}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){msg("eEmail");return}
  fb.auth().sendPasswordResetEmail(email).then(function(){msg("reset")}).catch(function(err){msg(errKey(err))});
};
$("lgGoogle").onclick=function(){
  msg("");
  if(!CFG||!fb){msg("eGen");return}
  var p=new fb.auth.GoogleAuthProvider(),addr=$("fAddr").value.trim();
  fb.auth().signInWithPopup(p).then(function(c){
    user={name:c.user.displayName||"",email:c.user.email,uid:c.user.uid,verified:c.user.emailVerified};
    if(mode==="signup"&&addr.length>=10&&c.additionalUserInfo&&c.additionalUserInfo.isNewUser){
      return saveProfile(c.user.uid,{name:user.name,email:user.email,address:addr}).then(function(){prof={address:addr}},function(){});
    }
  }).then(function(){paint();loadProfile()}).catch(function(err){
    if(err&&err.code==="auth/popup-blocked"){return fb.auth().signInWithRedirect(p)}
    if(err&&(err.code==="auth/popup-closed-by-user"||err.code==="auth/cancelled-popup-request"))return;
    msg("eGoogle");
  });
};
$("tLogin").onclick=function(){mode="login";msg("");paint()};
$("tSignup").onclick=function(){mode="signup";msg("");paint()};
$("dOut").onclick=function(){
  if(CFG&&fb){fb.auth().signOut()}else{try{localStorage.removeItem("vz_session")}catch(e){}}
  user=null;paint();
};
document.querySelectorAll(".lg-lang button").forEach(function(b){b.onclick=function(){lang=b.dataset.l;try{localStorage.setItem("lang",lang)}catch(e){}msg("");paint()}});
function load(src,cb){var s=document.createElement("script");s.src=src;s.onload=cb;s.onerror=function(){msg("eGen")};document.head.appendChild(s)}
var CHAT_AI=""; /* opsional: URL Worker AI chat (POST {messages,lang} -> {reply}). Kosong = jawaban FAQ otomatis. */
var LC={
 id:{title:"Asisten CS",tg:"CS manusia",ph:"Tulis pertanyaan...",note:"Balasan otomatis, bukan nasihat keuangan.",greet:"Halo! Saya asisten Vekxt Zero. Ada yang bisa dibantu soal login atau pendaftaran?",greetU:"Halo, {n}! Ada yang bisa dibantu soal akun atau challenge kamu?",chipsA:["Cara daftar","Lupa password","Verifikasi email","Harga"],chipsU:["Withdraw","Verifikasi dokumen","Kredensial MT5","Data tidak update"],fb:"Maaf, saya belum punya jawaban itu. Tekan tombol Live CS di atas untuk bicara dengan tim kami."},
 en:{title:"Support assistant",tg:"Human support",ph:"Type your question...",note:"Automated replies, not financial advice.",greet:"Hi! I am the Vekxt Zero assistant. Need help with login or sign-up?",greetU:"Hi, {n}! Need help with your account or challenge?",chipsA:["How to sign up","Forgot password","Verify email","Prices"],chipsU:["Withdraw","Document verification","MT5 credentials","Data not updating"],fb:"Sorry, I do not have that answer. Tap Live CS above to talk to our team."}
};
var LFAQ=[
 {k:/dokumen|document|kyc|identitas|ktp|passport|paspor|selfie/i,id:"Verifikasi dokumen: buka tab Profile, scroll ke bagian Verifikasi dokumen, upload foto KTP/paspor/SIM dan selfie sambil memegang dokumennya. Tim akan meninjau, statusnya muncul di kartu yang sama.",en:"Document verification: open the Profile tab, scroll to Document verification, upload a photo of your ID and a selfie holding it. The team reviews it and the status shows on the same card."},
 {k:/kredensial|credential|mt5|metatrader|server/i,id:"Kredensial akun (login, password, server) ada di tab Account: ketuk akun challenge kamu, lalu lihat atau salin datanya dan pakai di MetaTrader. Jangan bagikan ke siapa pun.",en:"Account credentials (login, password, server) are in the Account tab: tap your challenge account, then view or copy them and use them in MetaTrader. Never share them."},
 {k:/lupa|forgot|reset/i,id:"Di halaman masuk, tekan Lupa kata sandi?, isi email kamu, lalu cek inbox atau folder spam untuk tautan reset.",en:"On the log in screen, press Forgot password?, enter your email, then check your inbox or spam folder for the reset link."},
 {k:/verifikasi|verif|spam/i,id:"Setelah daftar, kami kirim tautan verifikasi ke email kamu. Buka tautannya (cek folder spam), lalu tekan tombol Saya sudah verifikasi di dashboard.",en:"After signing up we email you a verification link. Open it (check spam), then press I have verified in the dashboard."},
 {k:/update|refresh|perbarui|muncul|data|akun saya|not updating/i,id:"Tekan tombol Perbarui di atas daftar akun. Data juga diperbarui otomatis tiap 30 detik saat halaman terbuka. Kalau akun belum muncul setelah pembayaran, hubungi CS manusia lewat Telegram.",en:"Press the Refresh button above the account list. Data also refreshes automatically every 30 seconds while the page is open. If your account has not appeared after payment, contact human support on Telegram."},
 {k:/withdraw|tarik|payout|cair/i,id:"Buka tab Withdrawal, pilih Crypto atau Bank, isi jumlah dan tujuan penarikan. Permintaan ditinjau tim sebelum diproses. Jadwal payout dua mingguan.",en:"Open the Withdrawal tab, choose Crypto or Bank, then enter the amount and destination. Requests are reviewed by the team before processing. Payouts are biweekly."},
 {k:/sertifikat|certificate/i,id:"Sertifikat ada di tab Certificate dan muncul setelah akun kamu funded.",en:"Certificates are in the Certificate tab and appear once your account is funded."},
 {k:/affiliate|referral|offer|kupon|coupon|diskon|promo/i,id:"Kode referral ada di tab Affiliate, dan promo yang sedang berlaku ada di tab Offers.",en:"Your referral code is in the Affiliate tab, and current promos are in the Offers tab."},
 {k:/daftar|sign ?up|register|masuk|login|log in/i,id:"Pilih tab Daftar, isi nama, alamat lengkap, email, dan kata sandi (minimal 8 karakter), atau lanjut dengan Google. Setelah itu verifikasi email kamu.",en:"Choose the Sign up tab, fill in your name, full address, email, and a password (at least 8 characters), or continue with Google. Then verify your email."},
 {k:/harga|price|biaya|fee|cost/i,id:"Harga lengkap tiap paket dan ukuran akun ada di halaman utama, bagian paket.",en:"Full prices for each plan and account size are in the plans section on the home page."},
 {k:/demo|real|uang|sungguhan|simulasi|money/i,id:"Semua tipe akun yang kami sediakan adalah demo dan simulasi, dan payout didanai oleh Vekxt Zero.",en:"All account types we provide are demo and simulated, and payouts are funded by Vekxt Zero."}
];
var lcHist=[],lcGreet=null;
/* ===== Live CS: chat ke tim lewat Telegram (Worker vekxt-cs). Tombol "Live CS" muncul di header chat. ===== */
var CS_API="https://vekxt-cs.hamada69r.workers.dev"; /* ganti kalau nama Worker CS kamu beda; kosongkan untuk menyembunyikan Live CS */
var LCL={
  id:{live:"Live CS",ai:"Asisten",title:"Live CS",ph:"Tulis pesan ke tim CS...",note:"Dibalas langsung oleh tim lewat Telegram. Balasan bisa butuh beberapa menit.",hello:"Kamu terhubung ke CS manusia. Tulis pesanmu di sini, balasan muncul di chat ini.",err:"Pesan gagal terkirim. Coba lagi atau hubungi lewat Telegram.",lim:"Terlalu banyak pesan. Tunggu sebentar."},
  en:{live:"Live CS",ai:"Assistant",title:"Live CS",ph:"Message our support team...",note:"Answered live by our team via Telegram. Replies may take a few minutes.",hello:"You are connected to human support. Write your message here, replies appear in this chat.",err:"Message failed to send. Try again or contact us on Telegram.",lim:"Too many messages. Please wait a moment."}};
var lcLive=false,lcLast=0,lcPolling=false,lcTick=null,lcSaved=null,lcKeyUsed="",lcInit=false,lcHello=null,lcPT=0,lcGen=0;
function lcKeyNow(){return"vzCs:"+(user?(user.uid||user.email):"guest")}
function lcSid(){
  var k=lcKeyNow(),v=null;try{v=localStorage.getItem(k)}catch(e){}
  if(!/^[a-f0-9]{32}$/.test(v||"")){var a=new Uint8Array(16);crypto.getRandomValues(a);v=Array.prototype.map.call(a,function(x){return("0"+x.toString(16)).slice(-2)}).join("");try{localStorage.setItem(k,v)}catch(e){}}
  return v}
function lcLoadHistory(){lcGen++;lcPolling=false;$("lcLog").innerHTML="";lcHello=lcAdd("b",LCL[lang].hello);lcLast=0;lcKeyUsed=lcKeyNow();lcPoll(true)}
function lcPoll(all){
  if(!lcLive||lcPolling)return;lcPolling=true;lcPT=Date.now();var g=lcGen;
  fetch(CS_API+"/poll?sid="+lcSid()+"&after="+(all?0:lcLast)+(all?"&all=1":"")).then(function(r){return r.json()}).then(function(d){
    if(!lcLive||g!==lcGen||!d||!d.ok)return;
    d.m.forEach(function(m){
      if(m.r==="a"){if(m.id<=lcLast)return;lcLast=m.id;if(!all&&!$("lcChat").classList.contains("open"))$("lcBtn").style.boxShadow="0 0 0 3px #22C55E"}
      lcAdd(m.r==="u"?"u":"b",m.t)})
  }).catch(function(){}).then(function(){if(g===lcGen)lcPolling=false})}
function lcTickFn(){if(!lcLive)return;var open=$("lcChat").classList.contains("open");if(open||Date.now()-lcPT>20000)lcPoll(false)}
function lcSetLive(on){
  if(on===lcLive)return;lcLive=on;lcGen++;
  try{localStorage.setItem("vzCsLive",on?"1":"")}catch(e){}
  var log=$("lcLog");
  if(on){lcSaved=Array.prototype.slice.call(log.children);lcLoadHistory();if(!lcTick)lcTick=setInterval(lcTickFn,3000)}
  else{log.innerHTML="";(lcSaved||[]).forEach(function(n){log.appendChild(n)});lcSaved=null;if(lcTick){clearInterval(lcTick);lcTick=null}}
  lcLiveUI()}
function lcSendLive(q){
  var c=LCL[lang];q=q.trim().slice(0,1000);if(!q)return;lcAdd("u",q);
  fetch(CS_API+"/msg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:lcSid(),text:q,name:(user&&user.name)||"",email:(user&&user.email)||"",lang:lang})})
    .then(function(r){return r.json().catch(function(){return{}})})
    .then(function(d){if(!d.ok)lcAdd("b",d.error==="rate"?c.lim:c.err);else if(d.fwd===false)lcAdd("b",c.err);lcPT=0})
    .catch(function(){lcAdd("b",c.err)})}
function lcLiveUI(){
  if(!CS_API)return;var c=LCL[lang],cc=LC[lang],b=$("lcLive");
  if(!b){
    b=document.createElement("button");b.id="lcLive";b.type="button";
    b.style.cssText="font:inherit;font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--ink);cursor:pointer;white-space:nowrap";
    var go=$("lcGo"),w=document.createElement("div");w.style.cssText="display:flex;gap:6px;align-items:center;flex-wrap:wrap;justify-content:flex-end";
    go.parentNode.insertBefore(w,go);w.appendChild(b);go.style.display="none";
    b.onclick=function(){lcSetLive(!lcLive)};
    $("lcBtn").addEventListener("click",function(){$("lcBtn").style.boxShadow=""})}
  b.textContent=lcLive?c.ai:c.live;
  $("lcTitle").textContent=lcLive?c.title:cc.title;$("lcIn").placeholder=lcLive?c.ph:cc.ph;$("lcNote").textContent=lcLive?c.note:cc.note;
  $("lcChips").style.display=lcLive?"none":"";
  if(lcLive&&lcHello)lcHello.textContent=c.hello;
  if(lcLive&&lcKeyUsed!==lcKeyNow())lcLoadHistory();
  if(!lcInit){lcInit=true;try{if(localStorage.getItem("vzCsLive")==="1")lcSetLive(true)}catch(e){}}}

function lcAdd(r,tx){var d=document.createElement("div");d.className="cp-m "+(r==="u"?"cp-u":"cp-b");d.textContent=tx;$("lcLog").appendChild(d);$("lcLog").scrollTop=$("lcLog").scrollHeight;return d}
function lcAnswer(q){for(var i=0;i<LFAQ.length;i++){if(LFAQ[i].k.test(q))return LFAQ[i][lang]}return LC[lang].fb}
function lcAsk(q){
  q=q.trim();if(!q)return;
  if(lcLive){lcSendLive(q);return}
  lcAdd("u",q);lcHist.push({role:"user",content:q});
  var w=lcAdd("b","...");
  var done=function(tx){w.textContent=tx;lcHist.push({role:"assistant",content:tx});$("lcLog").scrollTop=$("lcLog").scrollHeight};
  if(CHAT_AI){
    fetch(CHAT_AI,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:lcHist.slice(-10),lang:lang})}).then(function(r){return r.json()}).then(function(d){done(d.reply||lcAnswer(q))}).catch(function(){done(lcAnswer(q))});
  }else{setTimeout(function(){done(lcAnswer(q))},350)}
}
function chatUI(){
  var c=LC[lang];
  $("lcTitle").textContent=c.title;$("lcGo").textContent=c.tg;$("lcGo").href=SUPPORT;$("lcIn").placeholder=c.ph;$("lcNote").textContent=c.note;
  $("lcChips").innerHTML=(user?c.chipsU:c.chipsA).map(function(x){return'<button type="button">'+esc(x)+'</button>'}).join("");
  var g=user?c.greetU.replace("{n}",user.name||user.email):c.greet;
  if(!lcGreet)lcGreet=lcAdd("b",g);else if($("lcLog").children.length===1)lcGreet.textContent=g;
  lcLiveUI();
}
$("lcBtn").onclick=function(){var o=$("lcChat").classList.toggle("open");this.setAttribute("aria-expanded",o)};
(function(){
var SUN="<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><circle cx='12' cy='12' r='4'/><path d='M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'/></svg>";
var MOON="<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><path d='M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'/></svg>";
var b=$("lcTheme");if(!b)return;
function dk(){var t=document.documentElement.getAttribute("data-theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}
function ic(){b.innerHTML=dk()?SUN:MOON}
b.onclick=function(){var n=dk()?"light":"dark";document.documentElement.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}ic()};
ic();
})();
$("lcChips").onclick=function(e){if(e.target.tagName==="BUTTON")lcAsk(e.target.textContent)};
$("lcSend").onclick=function(){lcAsk($("lcIn").value);$("lcIn").value=""};
$("lcIn").addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();$("lcSend").click()}});
document.addEventListener("keydown",function(e){if(e.key==="Escape"){$("lcChat").classList.remove("open");$("lcBtn").setAttribute("aria-expanded","false")}});
/* auto refresh akun: tiap AUTO_MS, hanya saat tab terlihat dan sedang di tab Account */
setInterval(function(){
  if(!user||!ACC_API||accState!=="ok")return;
  setSync();
  if(document.hidden||view!=="home"||refreshing||!liveAny())return;
  if(Date.now()-lastSync>=AUTO_MS)refreshAccounts(false);
},1000);
document.addEventListener("visibilitychange",function(){
  if(!document.hidden&&user&&ACC_API&&accState==="ok"&&view==="home"&&!refreshing&&liveAny()&&Date.now()-lastSync>=AUTO_MS)refreshAccounts(false);
});
/* ===== TRADE: terminal layar penuh ala futures (dibuka dari tombol Trade Now) ===== */
var TRS={ind:[],un:"coin",type:"candle",col:"wr",vol:true,grid:true,magnet:false,lock:false,hide:false};
try{var _ts=JSON.parse(localStorage.getItem("vzTr.set")||"{}");for(var _tk in _ts)TRS[_tk]=_ts[_tk]}catch(e){}
var TRV=null,trCh=null,trCs=null,trVs=null,trCD=[],trKey="",trTool="cross",trDR=[],trTmp=null,trRul=null,trTab="chart",trLines=[],trLsig="",trTimer=null,trAt=0,trBkAt=0,trFail=0,trTy="market",trSd="buy",trRaf=false,trPSig="",trNoteT=null,trDrag=null,trTapE=null,trDrag2=null,trInd=[],trNew={t:"sma",c:"#F5B84B"},TRCOL=["#F5B84B","#4C8DFF","#E040FB","#22C55E","#F04452","#F5F5F5"],trHx={},trHn=10;
var TRCSS='#vzTr{position:fixed;inset:0;z-index:300;background:#080A0D;color:#F5F5F5;display:none;flex-direction:column;font:14px system-ui,-apple-system,sans-serif;padding-top:env(safe-area-inset-top);--ac:#F5B84B;--up:#22C55E;--dn:#F04452;--mu:#A1A1AA;--ln:#292B32;--sf:#111318}'
+'#vzTr *{box-sizing:border-box}#vzTr button{background:none;border:0;color:inherit;font:inherit;cursor:pointer;padding:0}'
+'.trhd{display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid var(--ln)}.trhd>#trX,.trhd>#trGear{width:46px;height:46px;display:flex!important;align-items:center;justify-content:center;font-size:22px;padding:0!important;flex:none;touch-action:manipulation;border-radius:12px}.trhd>#trX{margin-left:-8px}.trhd>#trX:active,.trhd>#trGear:active{background:var(--sf)!important}.trg{flex:1}'
+'.trsym{font-size:16px!important;font-weight:700;background:var(--sf)!important;border:1px solid var(--ln)!important;border-radius:8px;padding:6px 10px!important}'
+'.trpr{text-align:right}.trpr b{display:block;font-size:18px}.trpr small{font-weight:600}.pup{color:var(--up)}.pdn{color:var(--dn)}.trmu{color:var(--mu)}'
+'.trtfw{display:flex;align-items:center;border-bottom:1px solid var(--ln)}.trtf{flex:1;min-width:0;display:flex;gap:2px;padding:6px 8px;overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch}.trtf::-webkit-scrollbar{display:none}.trtf button{flex:none;white-space:nowrap;min-width:42px;padding:7px 10px!important;border-radius:6px;color:var(--mu);font-weight:600;text-align:center}.trfx{flex:none;padding:8px 14px!important;font-weight:700;color:var(--mu);border-left:1px solid var(--ln)!important;font-style:italic}.trtools button.up{color:#22C55E}.trtools button.dn{color:#F04452}.trsw{width:30px;height:30px;border-radius:50%!important;padding:0!important;border:2px solid transparent!important}.trsw.on{border-color:#fff!important}.trtf button.on{background:var(--sf)!important;color:#F5F5F5}'
+'.trmain{flex:1;min-height:0;position:relative}.trpane{position:absolute;inset:0;display:none;overflow:auto;padding:12px}.trpane.on{display:block}#trP_chart{padding:0}#trP_chart.on{display:flex}'
+'.trtools{width:44px;border-right:1px solid var(--ln);display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 0;overflow-y:auto}.trtools button{width:36px;height:36px;border-radius:8px;color:var(--mu);font-size:16px}.trtools button.on{background:var(--sf)!important;color:#F5B84B}.trtools hr{width:24px;border:0;border-top:1px solid var(--ln);margin:4px 0}'
+'.trcw{flex:1;position:relative;min-width:0}#trChEl,#trOv{position:absolute;inset:0;width:100%;height:100%}#trOv{pointer-events:none;touch-action:none}#trOv.on{pointer-events:auto}'
+'.tract{display:flex;gap:10px;padding:8px 12px;border-top:1px solid var(--ln)}.tract button,.trgo{flex:1;padding:12px!important;border-radius:10px;font-weight:700;color:#04140d}.trbl{background:var(--up)!important}.trbs{background:#F04452!important;color:#fff!important}.trgo{width:100%;margin-top:10px}'
+'.trnav{display:flex;align-items:flex-end;border-top:1px solid var(--ln);padding-bottom:env(safe-area-inset-bottom)}.trnav button{flex:1;padding:8px 0!important;color:var(--mu);font-size:12px}.trnav button.on{color:var(--ac)}'
+'.trnav button.c b{display:flex;margin:-18px auto 4px;width:48px;height:48px;border-radius:50%;background:var(--ac);color:#080A0D;align-items:center;justify-content:center;font-size:22px}'
+'.trcard{background:var(--sf);border:1px solid var(--ln);border-radius:12px;padding:12px;margin-bottom:10px}.trrw{display:flex;justify-content:space-between;align-items:center;gap:8px}.trbtns{display:flex;gap:8px;margin-top:8px}.trbtns button,.trch button,.trseg button{padding:6px 12px!important;border:1px solid var(--ln)!important;border-radius:999px}'
+'.trch{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.trch button.on,.trseg button.on{background:#F5B84B!important;color:#080A0D!important}.trseg{display:flex;gap:6px;margin-bottom:10px}'
+'.trbig{font-size:28px;font-weight:700}.trg2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.trg2 small{display:block;color:var(--mu)}'
+'.trbar{height:6px;background:var(--ln);border-radius:3px;margin:4px 0 10px}.trbar i{display:block;height:100%;background:#F5B84B;border-radius:3px}'
+'.trbk div{display:flex;justify-content:space-between;font-size:13px;padding:2px 0;font-variant-numeric:tabular-nums}'
+'.trsh{position:absolute;inset:0;background:rgba(0,0,0,.6);display:none;align-items:flex-end;z-index:5}.trsh.on{display:flex}.trsb{background:var(--sf);width:100%;max-height:88%;overflow:auto;border-radius:16px 16px 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom))}.trsb h3{margin:0 0 10px}'
+'.trsb label{display:block;color:var(--mu);margin-bottom:10px}.trsb input[type=number],.trsb input[type=search]{width:100%;margin-top:4px;background:#080A0D;color:#F5F5F5;border:1px solid var(--ln);border-radius:8px;padding:10px;font-size:16px}.trsb input[type=range]{width:100%;margin-top:6px}.trr2{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
+'.trrow{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--ln)}.trtg{width:44px!important;height:24px;border-radius:12px;background:var(--ln)!important;position:relative}.trtg:after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff}.trtg.on{background:var(--up)!important}.trtg.on:after{left:23px}'
+'.trpk{display:flex;align-items:center;gap:8px;width:100%;padding:10px 0!important;border-bottom:1px solid var(--ln)!important}.trpk>span:first-child{flex:1;display:flex;align-items:center;text-align:left;font-weight:700}'
+'#trNote{position:absolute;left:12px;right:12px;bottom:130px;background:#191B21;border:1px solid var(--ln);border-radius:10px;padding:10px 12px;display:none;z-index:6}'
+'html[data-theme="light"] #pTerm .lg-card{--surface:#111318;--ink:#F5F5F5;--muted:#A1A1AA;--line:#292B32;--accent:#F5B84B;--accent-ink:#080A0D;color:#F5F5F5}#pTerm .lg-card{background:#111318!important;background-image:none!important;border:1px solid #292B32!important;box-shadow:none!important}#pEq .eqh{display:flex;justify-content:space-between;align-items:center;gap:8px}#pEq .eqs{display:flex;background:#191B21;border:1px solid #292B32;border-radius:10px;padding:3px}#pEq .eqs button{background:none;border:0;color:#A1A1AA;font:inherit;font-weight:600;padding:5px 12px;border-radius:8px;cursor:pointer}#pEq .eqs button.on{background:#292B32;color:#fff}#pEq svg{width:100%;height:auto;display:block;touch-action:pan-y;margin-top:6px}#pEq text{fill:#A1A1AA;font-size:10px}#pEqTip{font-size:12px;margin-top:8px;color:#A1A1AA;min-height:18px}#pEq .eqlg{display:flex;justify-content:center;gap:18px;color:#A1A1AA;font-size:12px;margin-top:4px}#pEq .eqlg i{display:inline-block;width:14px;height:2px;margin-right:6px;vertical-align:middle}#pEq .eqlg i.ds{background:none;border-top:2px dashed #A1A1AA;height:0}.trhide,#pTk{display:none!important}.trbtnwrap{margin:0 0 12px}.trbtnwrap .lg-btn{width:100%}.trni{display:block;width:22px;height:22px;margin:0 auto 3px;background:currentColor;-webkit-mask:var(--i) center/contain no-repeat;mask:var(--i) center/contain no-repeat}.trico{position:relative;width:24px;height:24px;border-radius:50%;display:inline-flex!important;align-items:center;justify-content:center;flex:none!important;overflow:hidden;vertical-align:middle;margin-right:8px;font-size:9px;font-weight:700}.trico i{font-style:normal;color:#fff}.trico img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#080A0D}.trico.ok{background:none!important}.trico.ok i{display:none}.trbd{padding:2px 8px;border-radius:6px;font-size:12px;font-weight:700}.trbd.l{background:rgba(34,197,94,.16);color:#22C55E}.trbd.s{background:rgba(240,68,82,.16);color:#F04452}.trhg{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 8px;margin-top:12px}.trhg small{display:block;color:var(--mu);font-size:12px}.trhg b{font-size:14px;word-break:break-word}.trhd2{grid-template-columns:1fr 1fr;border-top:1px solid var(--ln);padding-top:12px}.trlb{color:var(--mu);margin-bottom:10px}.trshr{width:28px;height:28px;display:inline-flex!important;align-items:center;justify-content:center;border:1px solid var(--ln)!important;border-radius:8px;color:var(--mu)}';
(function(){var st=document.createElement("style");st.textContent=TRCSS;document.head.appendChild(st)})();
function trSet(){try{localStorage.setItem("vzTr.set",JSON.stringify(TRS))}catch(e){}}
function trDrSave(){try{localStorage.setItem("vzTr.dr:"+pSym,JSON.stringify(trDR))}catch(e){}}
function trDrLoad(){try{trDR=JSON.parse(localStorage.getItem("vzTr.dr:"+pSym)||"[]")}catch(e){trDR=[]}if(!Array.isArray(trDR))trDR=[]}
function trAcc(){return selP!==null?PERPS[selP]:null}
function trNote(s,bad){var e=$("trNote");if(!e)return;e.textContent=s;e.style.display="block";e.style.color=bad?"#F04452":"#F5F5F5";clearTimeout(trNoteT);trNoteT=setTimeout(function(){e.style.display="none"},4000)}
function trSheet(h){$("trSb").innerHTML=h;$("trSh").classList.add("on")}
function trShut(){$("trSh").classList.remove("on")}
var TRSHARE='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V4"/><path d="M8 8l4-4 4 4"/><path d="M5 13v6h14v-6"/></svg>';
var TRTOOLS=[["cross","&#10010;"],["l","&#9585;"],["h","&#9776;"],["f","Fib"],["b","&#9645;"],["lp","&#9650;"],["sp","&#9660;"],["m","&#128207;"],["x","T"]];
var TRIC={"chart": "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", "book": "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", "trade": "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", "pos": "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", "acc": "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"};
function trIcn(k,st){return'<i class="trni" style="--i:url(data:image/png;base64,'+TRIC[k]+')'+(st?";"+st:"")+'"></i>'}
var TRSRC=[function(b){return"https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/"+b+".png"},function(b){return"https://assets.coincap.io/assets/icons/"+b+"@2x.png"}];
function trIco(base){
  var b=String(base||"").toLowerCase().replace(/^\d+/,"").replace(/[^a-z0-9]/g,""),h=0,i;for(i=0;i<b.length;i++)h=(h*31+b.charCodeAt(i))%360;
  return'<span class="trico" style="background:hsl('+h+',45%,32%)"><i>'+esc(b.slice(0,3).toUpperCase())+'</i>'+(b?'<img class="trimg" alt="" loading="lazy" data-b="'+b+'" data-n="0" src="'+TRSRC[0](b)+'">':"")+'</span>'}
function trStopsSheet(sym){
  var a=trAcc(),p=a&&a.positions[sym];if(!p)return;var dc=PDEC[sym]||2,b=BK[sym];
  trSheet('<h3>SL / TP <span class="trmu">'+esc(pBase(sym))+" "+(p.side==="long"?"Long":"Short")+'</span></h3><div class="trrw trmu" style="margin-bottom:12px"><span>Entry '+p.entry.toFixed(dc)+'</span><span>'+(b?"Mark "+((b.bid+b.ask)/2).toFixed(dc):"")+'</span></div>'
  +'<div class="trr2"><label>Stop loss<input id="trSl2" type="number" inputmode="decimal" step="any" placeholder="-" value="'+(p.sl||"")+'"></label><label>Take profit<input id="trTp2" type="number" inputmode="decimal" step="any" placeholder="-" value="'+(p.tp||"")+'"></label></div>'
  +'<p class="trmu" style="margin:0 0 4px;font-size:12px">'+L("Kosongkan untuk menghapus.","Leave empty to remove.")+'</p><p class="pdn" id="trMsg"></p><button type="button" class="trgo trbl" id="trStSv" data-s="'+sym+'">'+L("Simpan","Save")+'</button>')}
function trStopsSave(sym){
  var a=trAcc(),p=a&&a.positions[sym],m=$("trMsg");if(!p)return;
  var s2=parseFloat($("trSl2").value)||0,t2=parseFloat($("trTp2").value)||0,bk=BK[sym],lg=p.side==="long",ref=bk?(lg?bk.bid:bk.ask):0;
  if(ref&&((s2&&(lg?s2>=ref:s2<=ref))||(t2&&(lg?t2<=ref:t2>=ref)))){m.textContent=L("SL/TP di sisi yang salah.","SL/TP is on the wrong side.");return}
  PE.setStops(a,sym,{sl:s2,tp:t2});pSave();pSig="";trPSig="";trLsig="";trShut();trRender()}
/* ===== Equity curve (kartu hitam di detail akun Perps) ===== */
var pEqR="all",pEqSig="",pEqAt=0,pEqD=null,pEqHov=false;
function pEqNice(lo,hi){var sp=hi-lo||1,raw=sp/4,m=Math.pow(10,Math.floor(Math.log(raw)/Math.LN10)),f=raw/m,st=(f<=1?1:f<=2?2:f<=5?5:10)*m,a0=Math.floor(lo/st)*st,a1=Math.ceil(hi/st)*st,t=[];for(var v=a0;v<=a1+st*.001;v+=st)t.push(+v.toFixed(8));return{lo:a0,hi:a1,t:t}}
function pEqTs(v){if(typeof v==="number"&&isFinite(v))return v;if(typeof v==="string"){var t=Date.parse(v);if(isFinite(t))return t}return NaN}
function pEqPts(a,now,eq){
  var tr=(a.trades||[]).map(function(x){return{at:pEqTs(x.at),p:+x.p||0}}).filter(function(x){return isFinite(x.at)}).sort(function(x,y){return x.at-y.at}),
  fo=pEqTs(a.firstOpen),t0=tr.length?(isFinite(fo)?Math.min(fo,tr[0].at):tr[0].at):(isFinite(fo)?fo:now-36e5),pts=[{t:t0,b:a.size,e:a.size}],b=a.size;
  tr.forEach(function(x){b+=x.p;pts.push({t:Math.max(x.at,t0),b:b,e:b})});
  pts.push({t:Math.max(now,t0+6e4),b:+a.balance||b,e:+eq||b});return pts}
function pEqRender(a){
  var el=$("pEq");if(!el||pEqHov)return;
  var n=Date.now(),s=pReady(a)?PE.snapshot(a,BK):null,eq=s?s.equity:a.balance,sig=[a.trades.length,a.balance,Math.round(eq*100),pEqR,lang].join("|");
  if(sig===pEqSig&&el.firstChild)return;if(el.firstChild&&n-pEqAt<800)return;
  pEqAt=n;pEqSig=sig;
  var rng='<div class="eqs">'+[["7d","7D"],["30d","30D"],["all",L("Semua","All")]].map(function(r){return'<button type="button" data-pa="eqr" data-v="'+r[0]+'" class="'+(pEqR===r[0]?"on":"")+'">'+r[1]+'</button>'}).join("")+'</div>';
  if(!a.trades.length&&!Object.keys(a.positions).length){el.innerHTML='<div class="eqh"><b>Equity curve</b>'+rng+'</div><p style="margin:10px 0 0;color:#A1A1AA">'+L("Belum ada trade. Kurva muncul setelah ada hasil.","No trades yet. The curve appears after the first result.")+'</p>';return}
  var pts=pEqPts(a,n,eq),days={"7d":7,"30d":30}[pEqR];
  if(days){var cut=n-days*864e5;if(pts[0].t<cut){var k=0;pts.forEach(function(p,i){if(p.t<=cut)k=i});var bs=pts[k];pts=[{t:cut,b:bs.b,e:bs.e}].concat(pts.filter(function(p){return p.t>cut}))}}
  var vals=[];pts.forEach(function(p){vals.push(p.b,p.e)});
  var lo0=Math.min.apply(null,vals),hi0=Math.max.apply(null,vals),pad=(hi0-lo0)*.08||Math.max(Math.abs(hi0)*.01,1),nc=pEqNice(lo0-pad,hi0+pad),lo=nc.lo,hi=nc.hi;
  var W=360,H=230,Lm=50,Rm=10,Tm=10,Bm=24,t0=pts[0].t,t1=Math.max(pts[pts.length-1].t,t0+6e4);
  var X=function(t){return Lm+(t-t0)/(t1-t0)*(W-Lm-Rm)},Y=function(v){return Tm+(hi-v)/(hi-lo)*(H-Tm-Bm)},col=eq>=a.size?"#22C55E":"#F04452";
  var fm=function(v){return hi-lo<20?v.toFixed(2):Math.round(v).toLocaleString("en-US")},f1=function(v){return v.toFixed(1)};
  var line=pts.map(function(p,i){return(i?"L":"M")+f1(X(p.t))+" "+f1(Y(p.e))}).join(" "),
  area=line+" L"+f1(X(pts[pts.length-1].t))+" "+(H-Bm)+" L"+f1(X(t0))+" "+(H-Bm)+" Z",bal="";
  pts.forEach(function(p,i){bal+=(i?"L"+f1(X(p.t))+" "+f1(Y(pts[i-1].b))+" L":"M")+f1(X(p.t))+" "+f1(Y(p.b))+" "});
  var grid=nc.t.map(function(v){var y=f1(Y(v));return'<line x1="'+Lm+'" x2="'+(W-Rm)+'" y1="'+y+'" y2="'+y+'" stroke="#191B21"/><text x="'+(Lm-6)+'" y="'+(+y+3)+'" text-anchor="end">'+fm(v)+'</text>'}).join(""),xl="",i;
  for(i=0;i<5;i++){var tt=t0+(t1-t0)*i/4;xl+='<text x="'+f1(Lm+(W-Lm-Rm)*i/4)+'" y="'+(H-6)+'" text-anchor="'+(i===0?"start":i===4?"end":"middle")+'">'+new Date(tt).toLocaleDateString(lang==="id"?"id-ID":"en-US",{month:"short",day:"numeric"})+'</text>'}
  el.innerHTML='<div class="eqh"><b>Equity curve</b>'+rng+'</div><div id="pEqTip"></div>'
   +'<svg id="pEqSvg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Equity curve"><defs><linearGradient id="pEqG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity=".28"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient></defs>'+grid+xl
   +'<path d="'+area+'" fill="url(#pEqG)"/><path d="'+bal+'" fill="none" stroke="#A1A1AA" stroke-width="1.5" stroke-dasharray="4 3"/><path d="'+line+'" fill="none" stroke="'+col+'" stroke-width="2" stroke-linejoin="round"/>'
   +'<line id="pEqCur" y1="'+Tm+'" y2="'+(H-Bm)+'" stroke="#555" stroke-dasharray="3 3" visibility="hidden"/><circle id="pEqDot" r="4" fill="'+col+'" visibility="hidden"/></svg>'
   +'<div class="eqlg"><span><i style="background:'+col+'"></i>Equity</span><span><i class="ds"></i>Balance</span></div>';
  var sv=$("pEqSvg"),show=function(j){var p=pts[j],x=f1(X(p.t)),last=j===pts.length-1;
    $("pEqCur").setAttribute("x1",x);$("pEqCur").setAttribute("x2",x);$("pEqCur").setAttribute("visibility",last?"hidden":"visible");
    $("pEqDot").setAttribute("cx",x);$("pEqDot").setAttribute("cy",f1(Y(p.e)));$("pEqDot").setAttribute("visibility","visible");
    $("pEqTip").innerHTML='<b>'+(last?L("Sekarang","Now"):new Date(p.t).toLocaleString(lang==="id"?"id-ID":"en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}))+'</b> &nbsp; <span style="color:'+col+'">Equity '+f2(p.e)+' USDT</span> &nbsp; <span>Balance '+f2(p.b)+' USDT</span>'},
  mv=function(e){var r=sv.getBoundingClientRect(),fx=(e.clientX-r.left)/r.width*W,t=t0+(fx-Lm)/(W-Lm-Rm)*(t1-t0),bi=0,bd=1e18;pts.forEach(function(p,j){var d=Math.abs(p.t-t);if(d<bd){bd=d;bi=j}});show(bi)};
  show(pts.length-1);
  sv.addEventListener("pointerdown",function(e){pEqHov=true;mv(e)});sv.addEventListener("pointermove",function(e){if(pEqHov)mv(e)});
  ["pointerup","pointercancel","pointerleave"].forEach(function(ev){sv.addEventListener(ev,function(){pEqHov=false})});
}
function trBuild(){
  TRV=document.createElement("div");TRV.id="vzTr";
  TRV.innerHTML='<div class="trhd"><button type="button" id="trX" aria-label="Back"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" id="trSymB" class="trsym"></button><div class="trg"></div><div class="trpr"><b id="trPx">-</b><small id="trChg"></small></div><button type="button" id="trGear" aria-label="Settings">&#9881;</button></div>'
  +'<div class="trtfw"><div class="trtf" id="trTf"></div><button type="button" id="trFx" class="trfx">fx</button></div><div class="trmain"><div class="trpane on" id="trP_chart"><div class="trtools" id="trTools"></div><div class="trcw"><div id="trChEl"></div><canvas id="trOv"></canvas></div></div><div class="trpane" id="trP_book"></div><div class="trpane" id="trP_pos"></div><div class="trpane" id="trP_acc"></div></div>'
  +'<div id="trNote" role="status"></div><div class="tract" id="trAct"><button type="button" class="trbl" data-s="buy">Buy / Long</button><button type="button" class="trbs" data-s="sell">Sell / Short</button></div><nav class="trnav" id="trNav"></nav><div class="trsh" id="trSh"><div class="trsb" id="trSb"></div></div>';
  document.body.appendChild(TRV);
  $("trNav").innerHTML=[["chart","Chart"],["book","Book"],["trade","Trade","c"],["pos",L("Posisi","Positions")],["acc",L("Akun","Account")]].map(function(n){return'<button type="button" data-n="'+n[0]+'" class="'+(n[2]||"")+(n[0]==="chart"?" on":"")+'">'+(n[2]?'<b>'+trIcn(n[0],"width:26px;height:26px;margin:0;background:#04140d")+'</b>':trIcn(n[0]))+n[1]+'</button>'}).join("");
  TRV.addEventListener("error",function(e){var im=e.target;if(!im||!im.classList||!im.classList.contains("trimg"))return;var n=+im.dataset.n+1;if(n<TRSRC.length){im.dataset.n=n;im.src=TRSRC[n](im.dataset.b)}else im.remove()},true);
  TRV.addEventListener("load",function(e){var im=e.target;if(im&&im.classList&&im.classList.contains("trimg"))im.parentNode.classList.add("ok")},true);
  TRV.addEventListener("click",trClick);
  var ov=$("trOv");
  ov.onpointerdown=function(e){var p=trPt(e);if(!p)return;
    if(trTool==="h"){trDR.push({t:"h",a:p});trDrSave();trTool="cross";trBar();return}
    if(trTool==="lp"||trTool==="sp"){var y0=trCs.priceToCoordinate(p.price),lg=trTool==="lp",tpP=trCs.coordinateToPrice(y0+(lg?-70:70)),slP=trCs.coordinateToPrice(y0+(lg?35:-35));
      if(tpP>0&&slP>0){trDR.push({t:trTool,a:p,tp:tpP,sl:slP,w:Math.max(5,Math.min(200,Math.round(150/trSp())))});trDrSave()}trTool="cross";trBar();return}
    if(trTool==="x"){var s=prompt(L("Teks:","Text:"));if(s){trDR.push({t:"x",a:p,s:s.slice(0,40)});trDrSave()}trTool="cross";trBar();return}
    trTmp={t:trTool,a:p,b:p};try{ov.setPointerCapture(e.pointerId)}catch(x){}};
  ov.onpointermove=function(e){if(trTmp){var p=trPt(e);if(p)trTmp.b=p}};
  ov.onpointerup=function(){if(!trTmp)return;if(trTmp.t==="m")trRul=trTmp;else{trDR.push(trTmp);trDrSave()}trTmp=null;trTool="cross";trBar()};
  trBindDrag($("trChEl"));
}
function trBar(){
  $("trTools").innerHTML=TRTOOLS.map(function(t){return'<button type="button" data-tt="'+t[0]+'" class="'+(trTool===t[0]?"on":"")+(t[0]==="lp"?" up":t[0]==="sp"?" dn":"")+'">'+t[1]+'</button>'}).join("")+"<hr>"
  +[["magnet","&#129522;"],["lock","&#128274;"],["hide","&#128065;"]].map(function(t){return'<button type="button" data-to="'+t[0]+'" class="'+(TRS[t[0]]?"on":"")+'">'+t[1]+'</button>'}).join("")+'<hr><button type="button" data-tt="del">&#128465;</button>';
  $("trOv").classList.toggle("on",trTool!=="cross"&&!TRS.lock);
}
function trTfBar(){$("trTf").innerHTML=PTFS.map(function(z){return'<button type="button" data-tf="'+z[0]+'" class="'+(z[0]===pTf?"on":"")+'">'+z[1]+'</button>'}).join("")}
function trHead(){$("trSymB").innerHTML=trIco(pBase(pSym))+esc(pBase(pSym))+'<small class="trmu">/USDT</small> &#9662;'}
function trTabGo(n){
  trTab=n;["chart","book","pos","acc"].forEach(function(k){$("trP_"+k).classList.toggle("on",k===n)});
  $("trAct").style.display=(n==="chart"||n==="book")?"flex":"none";
  document.querySelectorAll("#trNav button").forEach(function(b){b.classList.toggle("on",b.dataset.n===n)});
  trPSig="";trRender();if(n==="book")trBook()}
function trOpen(){
  var a=trAcc();if(!a)return;
  pConnect();pLoadInfo();pLoadAllT(true);
  if(!TRV)trBuild();
  TRV.style.display="flex";document.body.style.overflow="hidden";
  trDrLoad();trRul=null;trTool="cross";trBar();trTfBar();trHead();trTabGo("chart");trKey="";trCD=[];trLoadCD();
  clearInterval(trTimer);trTimer=setInterval(trTick,400);
  if(!trRaf){trRaf=true;requestAnimationFrame(trLoop)}
}
function trClose(){clearInterval(trTimer);trShut();TRV.style.display="none";document.body.style.overflow="";if(trCh){try{trCh.remove()}catch(e){}trCh=trCs=trVs=null}trKey="";dash()}
function trLoop(){if(!TRV||TRV.style.display!=="flex"){trRaf=false;return}requestAnimationFrame(trLoop);trDraw()}
function trVc(k){return{time:k[0]/1e3,value:k[5],color:k[4]>=k[1]?"#22C55E66":"#F0445266"}}
function trCv(k){return TRS.type==="line"?{time:k[0]/1e3,value:k[4]}:{time:k[0]/1e3,open:k[1],high:k[2],low:k[3],close:k[4]}}
function trMk(){
  var el=$("trChEl");if(!el)return;
  if(!window.LightweightCharts){if(!pLwFail)pLoadLW();return}
  if(trCh){try{trCh.remove()}catch(e){}trCh=trCs=trVs=null}
  var C=LightweightCharts,g=TRS.grid?"#191B21":"rgba(0,0,0,0)",dc=PDEC[pSym]||2,u=TRS.col==="gr"?"#22C55E":"#F5F5F5",d="#F04452",pf={type:"price",precision:dc,minMove:PTICK[pSym]||Math.pow(10,-dc)};
  trCh=C.createChart(el,{autoSize:true,layout:{background:{type:"solid",color:"#080A0D"},textColor:"#A1A1AA",fontSize:11},grid:{vertLines:{color:g},horzLines:{color:g}},rightPriceScale:{borderColor:"#292B32"},timeScale:{borderColor:"#292B32",timeVisible:true,rightOffset:6},crosshair:{mode:TRS.magnet?1:0}});
  trCs=TRS.type==="line"?trCh.addLineSeries({color:"#F5B84B",lineWidth:2,priceFormat:pf}):trCh.addCandlestickSeries({upColor:u,downColor:d,borderUpColor:u,borderDownColor:d,wickUpColor:u,wickDownColor:d,priceFormat:pf});
  trVs=trCh.addHistogramSeries({priceFormat:{type:"volume"},priceScaleId:"v",visible:TRS.vol});
  trCh.priceScale("v").applyOptions({scaleMargins:{top:.82,bottom:0}});
  trLines=[];trLsig="";
  trCs.setData(trCD.map(trCv));trVs.setData(trCD.map(trVc));
  trInd=(TRS.ind||[]).map(trIndMk);trInd.forEach(trIndSetData);trCh.timeScale().scrollToRealTime();
}
function trLoadCD(){
  var key=pSym+pTf;if(trKey===key&&trCD.length)return;trKey=key;trCD=[];
  fetch(PREST+"/v5/market/kline?category=linear&symbol="+pSym+"&interval="+pTf+"&limit=300").then(function(r){return r.json()}).then(function(d){
    if(trKey!==key)return;var l=(d&&d.result&&d.result.list)||[];
    trCD=l.map(function(k){return[+k[0],+k[1],+k[2],+k[3],+k[4],+k[5]]}).reverse();if(!trCD.length){trKey="";trFail=Date.now()}trMk();
  }).catch(function(){trCD=[];trKey="";trFail=Date.now()});
}
function trTick(){
  var a=trAcc();if(!a||!TRV||TRV.style.display!=="flex")return;
  var n=Date.now(),b=BK[pSym],tk=TK[pSym]||{},dc=PDEC[pSym]||2;pSync();
  if(b){$("trPx").textContent=((+tk.lastPrice>0)?+tk.lastPrice:(b.bid+b.ask)/2).toFixed(dc);
    if(tk.price24hPcnt!==undefined&&isFinite(+tk.price24hPcnt)){var ch=+tk.price24hPcnt;$("trChg").textContent=(ch>0?"+":"")+(ch*100).toFixed(2)+"%";$("trChg").className=ch>=0?"pup":"pdn"}}
  if(window.LightweightCharts&&!trCh&&trCD.length)trMk();
  if(!window.LightweightCharts&&!pLwFail)pLoadLW();
  if(!trCD.length&&!trKey&&n-trFail>4000)trLoadCD();
  if(b&&trCs&&trCD.length&&trKey===pSym+pTf){
    var m=+tk.lastPrice>0?+tk.lastPrice:(b.bid+b.ask)/2,st=trPStart(n),l=trCD[trCD.length-1];
    if(l[0]===st){l[4]=m;if(m>l[2])l[2]=m;if(m<l[3])l[3]=m}else if(st>l[0]){l=[st,l[4],Math.max(l[4],m),Math.min(l[4],m),m,0];trCD.push(l)}
    if(l[0]===st){try{trCs.update(trCv(l));trVs.update(trVc(l));trIndLive()}catch(e){}}
  }
  trSyncLines(a);
  if(n-trAt>1000){trAt=n;trRender()}
  if(trTab==="book"&&n-trBkAt>1500){trBkAt=n;trBook()}
}
function trPStart(n){
  var d=new Date(n);
  if(pTf==="W")return Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()-((d.getUTCDay()+6)%7));
  if(pTf==="M")return Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),1);
  var per=(TFSEC[pTf]||900)*1e3;return Math.floor(n/per)*per}
/* SL/TP awal dekat entry: sekitar 46 px di atas/bawah garis entry di layar, bukan persen tetap */
function trDefStop(p,k){
  if(!trCs)return pDefStop(p,k);
  var y=trCs.priceToCoordinate(p.entry);if(y===null)return pDefStop(p,k);
  var lg=p.side==="long",up=(k==="tp")===lg,v=trCs.coordinateToPrice(y+(up?-46:46)),b=BK[p.symbol],ref=b?(lg?b.bid:b.ask):p.entry,tk=PTICK[p.symbol]||Math.pow(10,-(PDEC[p.symbol]||2));
  if(!(v>0))return pDefStop(p,k);
  if(k==="sl")v=lg?Math.min(v,ref-tk*2):Math.max(v,ref+tk*2);else v=lg?Math.max(v,ref+tk*2):Math.min(v,ref-tk*2);
  return pRound(v)}
function trSyncLines(a){
  if(!trCs||trDrag)return;var p=a.positions[pSym],b=BK[pSym],it=[];
  if(p){var px=b?(p.side==="long"?b.bid:b.ask):0,u=px?(p.side==="long"?px-p.entry:p.entry-px)*p.qty:null;
    it.push({k:"entry",price:p.entry,color:"#F5B84B",st:0,title:p.side.toUpperCase()+" "+p.lev+"x | "+(u===null?"-":pmu(u))+((p.sl||p.tp)?"":" | tap = SL/TP")});
    if(p.sl>0)it.push({k:"sl",price:p.sl,color:"#F04452",st:2,title:pStopLbl("sl",p,p.sl)});if(p.tp>0)it.push({k:"tp",price:p.tp,color:"#22C55E",st:2,title:pStopLbl("tp",p,p.tp)})}
  a.orders.forEach(function(o){if(o.symbol===pSym)it.push({k:"o"+o.id,price:o.price,color:"#4C8DFF",st:1,title:"LIMIT "+(o.side==="buy"?"LONG":"SHORT")})});
  var sig=JSON.stringify(it.map(function(i){return[i.k,i.price,i.color,i.st]}));
  if(sig!==trLsig){trLines.forEach(function(l){try{trCs.removePriceLine(l.h)}catch(e){}});
    trLines=it.map(function(i){return{k:i.k,price:i.price,t:i.title,h:trCs.createPriceLine({price:i.price,color:i.color,lineWidth:(i.k==="entry"||i.k==="sl"||i.k==="tp")?2:1,lineStyle:i.st,axisLabelVisible:true,title:i.title})}});trLsig=sig}
  else it.forEach(function(i,j){var l=trLines[j];if(l&&l.t!==i.title){l.t=i.title;l.h.applyOptions({title:i.title})}});
}
/* tap garis ENTRY -> SL/TP muncul, lalu geser garisnya (lepas jari = tersimpan) */
function trNear(cy,kinds,tol){
  var r=$("trChEl").getBoundingClientRect(),y=cy-r.top,hit=null,bd=tol||14;
  trLines.forEach(function(l){if(!kinds[l.k])return;var c=trCs.priceToCoordinate(l.price);if(c!==null&&Math.abs(c-y)<bd){bd=Math.abs(c-y);hit=l}});
  return hit}
function trApplyLevel(k,price){
  var a=trAcc(),p=a&&a.positions[pSym];if(!p||a.status!=="active"||!(price>0)){trLsig="";return false}
  price=pRound(price);var b=BK[pSym],lg=p.side==="long",ref=b?(lg?b.bid:b.ask):0,bad=k==="sl"?(lg?price>=ref:price<=ref):(lg?price<=ref:price>=ref);
  if(ref&&bad){trNote(L("SL/TP di sisi yang salah.","SL/TP on the wrong side."),1);trLsig="";return false}
  var o={};o[k]=price;PE.setStops(a,pSym,o);pLog(a,{symbol:pSym,status:"stops",type:k.toUpperCase(),note:k.toUpperCase()+" @ "+price});pSave();pSig="";trPSig="";trLsig="";return true}
function trDragEnd(){
  if(!trDrag)return;var d=trDrag;trDrag=null;
  try{trCh.applyOptions({handleScroll:true,handleScale:true})}catch(e){}
  if(d.price>0)trApplyLevel(d.l.k,d.price);else trLsig=""}
function trStopsFromEntry(){
  var a=trAcc(),p=a&&a.positions[pSym];if(!p||a.status!=="active")return;var had=!!(p.sl&&p.tp);
  if(!p.sl)trApplyLevel("sl",trDefStop(p,"sl"));if(!p.tp)trApplyLevel("tp",trDefStop(p,"tp"));
  trNote(had?L("Geser garis SL/TP untuk mengubah.","Drag the SL/TP lines to change them."):L("SL/TP dipasang. Geser garisnya untuk atur.","SL/TP added. Drag the lines to adjust."))}
function trSp(){var n=trCD.length,ts=trCh.timeScale();if(n>1){var a=ts.timeToCoordinate(trCD[n-1][0]/1e3),b=ts.timeToCoordinate(trCD[n-2][0]/1e3);if(a!==null&&b!==null&&a-b>0)return a-b}return 6}
function trDrawPos(c,d,x1,dc){
  if(x1==null)return;var x2=x1+d.w*trSp(),yE=trCs.priceToCoordinate(d.a.price),yT=trCs.priceToCoordinate(d.tp),yS=trCs.priceToCoordinate(d.sl);if(yE==null||yT==null||yS==null)return;
  var E=d.a.price,gain=Math.abs(d.tp-E)/E*100,loss=Math.abs(d.sl-E)/E*100,rr=loss>0?gain/loss:0;
  c.save();c.fillStyle="rgba(34,197,94,.22)";c.fillRect(x1,Math.min(yE,yT),x2-x1,Math.abs(yT-yE));c.fillStyle="rgba(240,68,82,.22)";c.fillRect(x1,Math.min(yE,yS),x2-x1,Math.abs(yS-yE));
  c.lineWidth=1.2;[[yT,"#22C55E"],[yS,"#F04452"],[yE,"#A1A1AA"]].forEach(function(z){c.strokeStyle=z[1];c.beginPath();c.moveTo(x1,z[0]);c.lineTo(x2,z[0]);c.stroke()});
  c.font="11px system-ui";c.fillStyle="#fff";
  c.fillText("TP +"+gain.toFixed(2)+"% ("+d.tp.toFixed(dc)+")",x1+6,yT+(yT<yE?13:-5));c.fillText("SL -"+loss.toFixed(2)+"% ("+d.sl.toFixed(dc)+")",x1+6,yS+(yS<yE?13:-5));
  c.fillText("RR 1 : "+rr.toFixed(2),x1+6,yE+(yT<yE?-5:13));
  [yT,yS].forEach(function(y){c.fillStyle="#fff";c.strokeStyle="#000";c.beginPath();c.arc(x2,y,4,0,7);c.fill();c.stroke()});c.restore()}
function trBindDrag(el){
  var KD={sl:1,tp:1},KE={entry:1};
  function lock(v){try{trCh.applyOptions({handleScroll:v,handleScale:v})}catch(e){}}
  function geo(d){var x1=trCh.timeScale().timeToCoordinate(d.a.time);if(x1===null)return null;var f=function(p){return trCs.priceToCoordinate(p)};return{x1:x1,x2:x1+d.w*trSp(),yE:f(d.a.price),yT:f(d.tp),yS:f(d.sl)}}
  function hitPos(e,tol){
    var r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    for(var i=trDR.length-1;i>=0;i--){var d=trDR[i];if(d.t!=="lp"&&d.t!=="sp")continue;var g=geo(d);if(!g||g.yE===null||g.yT===null||g.yS===null)continue;
      var top=Math.min(g.yT,g.yS),bot=Math.max(g.yT,g.yS);
      if(x<g.x1-tol||x>g.x2+tol||y<top-tol||y>bot+tol)continue;
      if(Math.abs(x-g.x2)<tol)return{d:d,k:"re"};
      if(Math.abs(y-g.yT)<tol)return{d:d,k:"tp"};if(Math.abs(y-g.yS)<tol)return{d:d,k:"sl"};
      if(Math.abs(y-g.yE)<tol||Math.abs(x-g.x1)<tol)return{d:d,k:"mv",x0:x,xa:g.x1,p0:trCs.coordinateToPrice(y),e0:d.a.price,t0:d.tp,s0:d.sl}}
    return null}
  el.addEventListener("pointerdown",function(e){
    if(!trCs||trTool!=="cross")return;var tol=e.pointerType==="touch"?22:12,hit=trNear(e.clientY,KD,tol);
    if(hit){trDrag={l:hit,price:0};lock(false);try{el.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault();return}
    var h2=TRS.hide?null:hitPos(e,tol);
    if(h2){trDrag2=h2;lock(false);try{el.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault();return}
    trTapE=trNear(e.clientY,KE,tol)?{x:e.clientX,y:e.clientY,t:Date.now()}:null},true);
  el.addEventListener("pointermove",function(e){
    var rc=el.getBoundingClientRect();
    if(trDrag){var v=trCs.coordinateToPrice(e.clientY-rc.top);
      if(v>0){var a=trAcc(),p=a&&a.positions[pSym];trDrag.price=pRound(v);trDrag.l.t=p?pStopLbl(trDrag.l.k,p,trDrag.price):trDrag.l.k.toUpperCase();trDrag.l.h.applyOptions({price:trDrag.price,title:trDrag.l.t})}
      e.preventDefault();return}
    if(trDrag2){var D=trDrag2,d=D.d,x=e.clientX-rc.left,pr=trCs.coordinateToPrice(e.clientY-rc.top);
      if(D.k==="re"){var g=geo(d);if(g)d.w=Math.max(3,(x-g.x1)/trSp())}
      else if(pr!==null){
        if(D.k==="tp")d.tp=pr;else if(D.k==="sl")d.sl=pr;
        else{var dp=pr-D.p0;d.a.price=D.e0+dp;d.tp=D.t0+dp;d.sl=D.s0+dp;var tm=trCh.timeScale().coordinateToTime(D.xa+(x-D.x0));if(tm)d.a.time=tm}
        var E=d.a.price;if(d.t==="lp"){if(d.tp<=E)d.tp=E*1.0001;if(d.sl>=E)d.sl=E*.9999}else{if(d.tp>=E)d.tp=E*.9999;if(d.sl<=E)d.sl=E*1.0001}}
      e.preventDefault();return}
    if(trTapE&&(Math.abs(e.clientX-trTapE.x)>8||Math.abs(e.clientY-trTapE.y)>8))trTapE=null},true);
  el.addEventListener("pointerup",function(){
    if(trDrag){trDragEnd();return}
    if(trDrag2){trDrag2=null;lock(true);trDrSave();return}
    var t=trTapE;trTapE=null;if(t&&Date.now()-t.t<600)trStopsFromEntry()},true);
  el.addEventListener("pointercancel",function(){trTapE=null;trDragEnd();if(trDrag2){trDrag2=null;lock(true);trDrSave()}},true);
  el.addEventListener("touchmove",function(e){if(trDrag||trDrag2)e.preventDefault()},{passive:false})}
/* ===== Indikator (MA) ===== */
function trIndMk(i){return{i:i,len:0,v:[],s:trCh.addLineSeries({color:i.c,lineWidth:2,priceLineVisible:false,lastValueVisible:true,crosshairMarkerVisible:false,visible:i.on!==false,title:i.t.toUpperCase()+" "+i.n})}}
function trIndSetData(o){
  var n=+o.i.n||20,c=trCD,out=[],v=[],k=2/(n+1),sum=0,e=null,j,x;
  for(j=0;j<c.length;j++){x=c[j][4];
    if(o.i.t==="ema"){if(j<n-1){sum+=x;continue}if(e===null){sum+=x;e=sum/n}else e=x*k+e*(1-k);v[j]=e;out.push({time:c[j][0]/1e3,value:e})}
    else{sum+=x;if(j>=n)sum-=c[j-n][4];if(j>=n-1){v[j]=sum/n;out.push({time:c[j][0]/1e3,value:v[j]})}}}
  o.v=v;o.len=c.length;o.s.setData(out)}
function trIndLive(){
  trInd.forEach(function(o){
    var n=+o.i.n||20,len=trCD.length,j=len-1;if(len<n)return;if(o.len!==len){trIndSetData(o);return}
    var x=trCD[j][4],val;
    if(o.i.t==="ema"){var pv=o.v[j-1];if(pv===undefined)return;val=x*(2/(n+1))+pv*(1-2/(n+1))}
    else{var q,sm=0;for(q=j-n+1;q<=j;q++)sm+=trCD[q][4];val=sm/n}
    o.v[j]=val;o.s.update({time:trCD[j][0]/1e3,value:val})})}
function trIndSheet(){
  var cs=TRCOL.map(function(c){return'<button type="button" class="trsw'+(trNew.c===c?" on":"")+'" data-ic="'+c+'" style="background:'+c+'" aria-label="'+c+'"></button>'}).join("");
  var l=(TRS.ind||[]).map(function(i){return'<div class="trrow"><span style="display:flex;align-items:center;gap:8px"><i style="width:12px;height:12px;border-radius:50%;background:'+i.c+'"></i>'+i.t.toUpperCase()+" "+i.n+'</span><span style="display:flex;gap:6px"><button type="button" class="trshr" data-ia="eye" data-id="'+i.id+'" style="opacity:'+(i.on===false?.4:1)+'">&#128065;</button><button type="button" class="trshr" data-ia="del" data-id="'+i.id+'">&#10005;</button></span></div>'}).join("");
  trSheet('<h3>'+L("Indikator","Indicators")+'</h3><div class="trseg" id="trItp"><button type="button" data-it="sma" class="'+(trNew.t==="sma"?"on":"")+'">SMA</button><button type="button" data-it="ema" class="'+(trNew.t==="ema"?"on":"")+'">EMA</button></div>'
  +'<label>'+L("Periode","Period")+'<input id="trIn" type="number" inputmode="numeric" min="2" max="500" value="20"></label><div class="trch" id="trIcs">'+cs+'</div><button type="button" class="trgo trbl" data-ia="add">'+L("Tambah","Add")+'</button>'
  +'<div style="margin-top:14px">'+(l||'<p class="trmu">'+L("Belum ada indikator.","No indicators yet.")+'</p>')+'</div>')}
function trPt(e){
  var ov=$("trOv"),r=ov.getBoundingClientRect(),last=trCD[trCD.length-1];if(!trCh||!trCs||!last)return null;
  var time=trCh.timeScale().coordinateToTime(e.clientX-r.left)||last[0]/1e3,price=trCs.coordinateToPrice(e.clientY-r.top);if(price==null)return null;
  if(TRS.magnet){var k=trCD.filter(function(x){return x[0]/1e3===time})[0];if(k)price=[k[1],k[2],k[3],k[4]].reduce(function(x,v){return Math.abs(v-price)<Math.abs(x-price)?v:x})}
  return{time:time,price:price}}
function trDraw(){
  var ov=$("trOv");if(!ov)return;var w=ov.clientWidth,h=ov.clientHeight,dp=window.devicePixelRatio||1;
  if(ov.width!==Math.round(w*dp)||ov.height!==Math.round(h*dp)){ov.width=Math.round(w*dp);ov.height=Math.round(h*dp)}
  var c=ov.getContext("2d");c.setTransform(dp,0,0,dp,0,0);c.clearRect(0,0,w,h);
  if(!trCs||TRS.hide||trTab!=="chart")return;
  var dc=PDEC[pSym]||2,X=function(a){return trCh.timeScale().timeToCoordinate(a.time)},Y=function(a){return trCs.priceToCoordinate(a.price)};
  c.lineWidth=1.5;c.strokeStyle=c.fillStyle="#F5B84B";c.font="11px system-ui";
  trDR.concat([trTmp,trRul]).filter(Boolean).forEach(function(d){
    var x1=X(d.a),y1=Y(d.a);if(y1==null)return;
    if(d.t==="lp"||d.t==="sp"){trDrawPos(c,d,x1,dc);return}
    if(d.t==="h"){c.beginPath();c.moveTo(0,y1);c.lineTo(w,y1);c.stroke();c.fillText(d.a.price.toFixed(dc),6,y1-4);return}
    if(d.t==="x"){c.fillText(d.s,x1==null?6:x1,y1);return}
    var x2=X(d.b),y2=Y(d.b);if(x1==null||x2==null||y2==null)return;
    if(d.t==="b"){c.save();c.fillStyle="rgba(245,184,75,.14)";c.fillRect(Math.min(x1,x2),Math.min(y1,y2),Math.abs(x2-x1),Math.abs(y2-y1));c.strokeRect(Math.min(x1,x2),Math.min(y1,y2),Math.abs(x2-x1),Math.abs(y2-y1));c.restore();return}
    if(d.t==="l"){c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke()}
    else if(d.t==="f"){[0,.236,.382,.5,.618,.786,1].forEach(function(v){var pr=d.a.price+(d.b.price-d.a.price)*v,y=trCs.priceToCoordinate(pr);if(y==null)return;c.globalAlpha=.7;c.beginPath();c.moveTo(Math.min(x1,x2),y);c.lineTo(w,y);c.stroke();c.globalAlpha=1;c.fillText(v+" ("+pr.toFixed(dc)+")",Math.min(x1,x2)+4,y-3)})}
    else if(d.t==="m"){var dv=d.b.price-d.a.price,up=dv>=0,bars=Math.round((d.b.time-d.a.time)/(TFSEC[pTf]||900));
      c.save();c.strokeStyle=c.fillStyle=up?"#22C55E":"#F04452";c.setLineDash([5,4]);c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.setLineDash([]);
      c.fillText((dv>=0?"+":"")+dv.toFixed(dc)+" ("+(dv/d.a.price*100).toFixed(2)+"%) | "+bars+" bar",Math.min(x1,x2)+4,Math.min(y1,y2)-6);c.restore()}
  })}
function trRow(l,v,p){p=isFinite(p)?Math.max(0,Math.min(100,p)):0;return'<div class="trrw"><span>'+l+'</span><span>'+v+'</span></div><div class="trbar"><i style="width:'+p+'%"></i></div>'}
function trAgo(ms){var sc=Math.max(0,(Date.now()-ms)/1000);if(sc<60)return L("baru saja","just now");var m=Math.floor(sc/60);if(m<60)return m+(lang==="id"?" menit lalu":"m ago");var h=Math.floor(m/60);if(h<24)return h+(lang==="id"?" jam lalu":"h ago");return Math.floor(h/24)+(lang==="id"?" hari lalu":"d ago")}
function trDur(ms){if(!(ms>0))return"-";var m=Math.floor(ms/60000);if(m<1)return"<1m";if(m<60)return m+"m";var h=Math.floor(m/60);m%=60;if(h<24)return h+"h"+(m?" "+m+"m":"");var d=Math.floor(h/24);h%=24;return d+"d"+(h?" "+h+"h":"")}
function trHistHtml(a){
  var tr=PE.ledger(a).trades,hd='<h4>'+L("Riwayat posisi","Position history")+'</h4>';
  if(!tr.length)return hd+'<p class="trmu">'+L("Belum ada trade tertutup.","No closed trades yet.")+'</p>';
  var why={sl:"Stop Loss",tp:"Take Profit",liq:L("Likuidasi","Liquidated")};
  return hd+tr.slice(0,trHn).map(function(r,j){
    var dc=PDEC[r.s]||2,lg=r.d==="BUY",ms=Date.parse(String(r.t)+"Z"),gross=r.g!==undefined?r.g:(lg?r.c-r.o:r.o-r.c)*r.v,fee=r.f!==undefined?r.f:Math.max(0,gross-r.p),nt=r.v*r.o,mg=r.l>0?nt/r.l:nt,roe=mg>0?r.p/mg*100:0,key=r.t+r.s,open=!!trHx[key],
    c=function(l,v,cl){return'<div><small>'+l+'</small><b'+(cl?' class="'+cl+'"':"")+'>'+v+'</b></div>'},ut=function(t){return new Date(t).toISOString().slice(0,16).replace("T"," ")};
    return'<div class="trcard"><div class="trrw"><span style="display:flex;align-items:center;gap:8px"><b style="display:flex;align-items:center">'+trIco(pBase(r.s))+esc(pBase(r.s))+'</b><span class="trbd '+(lg?"l":"s")+'">'+(lg?"Long":"Short")+(r.l?" "+r.l+"x":"")+'</span></span>'
    +'<span class="trrw trmu" style="gap:8px">'+(isFinite(ms)?trAgo(ms):"")+'<button type="button" class="trshr" data-trc="tcard" data-j="'+j+'" aria-label="Share PnL">'+TRSHARE+'</button></span></div>'
    +'<div class="trhg">'+c(L("Ukuran posisi","Position Size"),r.v)+c(L("Harga masuk rata-rata","Avg Entry Price"),(+r.o).toFixed(dc))+c(L("Harga keluar rata-rata","Avg Exit Price"),(+r.c).toFixed(dc))
    +c("Net PnL",pmu(r.p),pc(r.p))+c("Gross PnL",pmu(gross),pc(gross))+c(L("Total fee","Total Fees"),f2(fee)+" USDT")
    +c(L("Durasi","Duration"),r.ot&&isFinite(ms)?trDur(ms-r.ot):"-")+c("ROE",(roe>0?"+":"")+roe.toFixed(2)+"%",pc(roe))+c("Leverage",r.l?r.l+"x":"-")+'</div>'
    +'<div class="trrw trmu" style="margin-top:10px"><span>'+(r.w?why[r.w]:L("Ditutup manual","Closed manually"))+'</span><button type="button" data-trc="hdet" data-key="'+esc(key)+'" style="color:#F5F5F5;font-weight:600">'+(open?L("Sembunyikan","Hide details"):L("Lihat detail","Show Details"))+'</button></div>'
    +(open?'<div class="trhg trhd2">'+c(L("Nilai masuk","Entry value"),f2(nt)+" USDT")+c(L("Nilai keluar","Exit value"),f2(r.v*r.c)+" USDT")+c("Margin",f2(mg)+" USDT")+c(L("Ditutup (UTC)","Closed (UTC)"),isFinite(ms)?ut(ms):"-")+(r.ot?c(L("Dibuka (UTC)","Opened (UTC)"),ut(r.ot)):"")+'</div>':"")+'</div>'}).join("")
  +(tr.length>trHn?'<button type="button" class="trgo" data-trc="hmore" style="background:var(--ln);color:#F5F5F5">'+L("Tampilkan lagi","Show more")+'</button>':"")}
function trRender(){
  var a=trAcc();if(!a)return;var rd=pReady(a),s=rd?PE.snapshot(a,BK):null,on=a.status==="active";
  if(trTab==="pos"){
    var sig=JSON.stringify([a.positions,a.orders,a.trades.length,on,trHx,trHn]);
    if(sig!==trPSig){trPSig=sig;
      var hist=PE.ledger(a).trades.slice(0,15);
      $("trP_pos").innerHTML=(Object.keys(a.positions).map(function(k){var p=a.positions[k],dc=PDEC[k]||2;
        return'<div class="trcard"><div class="trrw"><b style="display:flex;align-items:center">'+trIco(pBase(k))+esc(pBase(k))+'&nbsp;<span class="'+(p.side==="long"?"pup":"pdn")+'">'+p.side.toUpperCase()+" "+p.lev+'x</span></b><span class="trrw" style="gap:8px"><b data-tp="'+k+'"></b><button type="button" class="trshr" data-trc="card" data-s="'+k+'" aria-label="Share PnL">'+TRSHARE+'</button></span></div><div class="trmu">'+p.qty+" @ "+p.entry.toFixed(dc)+" | Margin "+f2(p.qty*p.entry/p.lev)+" USDT"+'<br>SL '+(p.sl||"-")+" | TP "+(p.tp||"-")+'</div>'+(on?'<div class="trbtns"><button type="button" data-trc="stops" data-s="'+k+'">SL/TP</button><button type="button" data-trc="close" data-s="'+k+'">'+L("Tutup","Close")+'</button></div>':"")+'</div>'}).join("")||'<p class="trmu">'+L("Belum ada posisi.","No open positions.")+'</p>')
      +a.orders.map(function(o){return'<div class="trcard trrw"><span>'+esc(pBase(o.symbol))+" Limit "+o.side.toUpperCase()+" "+o.qty+" @ "+o.price+'</span><button type="button" data-trc="cancel" data-id="'+o.id+'" class="trbtns" style="margin:0;padding:6px 12px;border:1px solid var(--ln);border-radius:999px">'+L("Batal","Cancel")+'</button></div>'}).join("")
      +trHistHtml(a);
    }
    document.querySelectorAll("#trP_pos [data-tp]").forEach(function(e){var z=s&&s.positions.filter(function(p){return p.symbol===e.getAttribute("data-tp")})[0];e.textContent=z?pmu(z.upnl):"-";e.className=z?pc(z.upnl):""});
  }else if(trTab==="acc"){
    var eq=s?s.equity:a.balance,pf=eq-a.size,tg=a.size*PTARGET/100;
    $("trP_acc").innerHTML='<div class="trcard"><div class="trmu">'+esc(a.program)+" "+kfmt(a.size)+" | ID "+esc(a.id)+'</div><div class="trbig">'+f2(eq)+" USDT"+'</div><div class="'+pc(pf)+'">'+(pf<0?"-":"+")+""+f2(Math.abs(pf))+" USDT"+" ("+(pf/a.size*100).toFixed(2)+'%)</div>'
    +'<div class="trg2"><div><small>Balance</small>'+f2(a.balance)+" USDT"+'</div><div><small>Unrealized</small>'+(s?pmu(s.unrealized):"-")+'</div><div><small>'+L("Margin terpakai","Used margin")+'</small>'+f2(s?s.usedMargin:PE.usedMargin(a))+" USDT"+'</div><div><small>'+L("Margin bebas","Free margin")+'</small>'+(s?""+f2(s.freeMargin)+" USDT":"-")+'</div></div></div>'
    +'<div class="trcard"><b>Risk</b>'+(s?trRow("Daily drawdown ("+a.rules.dailyDd+"%)",""+f2(s.dailyLoss)+" / "+f2(s.dailyLimit)+" USDT",s.dailyLoss/s.dailyLimit*100)+trRow("Max drawdown ("+a.rules.maxDd+"%)",""+f2(s.maxLoss)+" / "+f2(s.maxLimit)+" USDT",s.maxLoss/s.maxLimit*100)+(a.isFunded?"":trRow("Target ("+PTARGET+"%)",""+f2(Math.max(pf,0))+" / "+f2(tg)+" USDT",pf/tg*100))+'<p class="trmu">Fee '+f2(a.fees)+" USDT"+" | Funding "+pmu(a.funding)+'</p>':'<p class="trmu">'+L("Menunggu harga...","Waiting for prices...")+'</p>')+(on?"":'<p class="'+(a.status==="passed"?"pup":"pdn")+'">'+breachMsg(a)+'</p>')+'</div>';
  }
}
function trBook(){
  if(trTab!=="book")return;var sy=pSym;
  fetch(PREST+"/v5/market/orderbook?category=linear&symbol="+sy+"&limit=15").then(function(r){return r.json()}).then(function(d){
    var x=d&&d.result;if(!x||trTab!=="book"||sy!==pSym)return;var dc=PDEC[sy]||2;
    var row=function(l,c){return l.map(function(v){return'<div class="'+c+'"><span>'+(+v[0]).toFixed(dc)+'</span><span class="trmu">'+v[1]+'</span></div>'}).join("")};
    $("trP_book").innerHTML='<div class="trbk">'+row((x.a||[]).slice().reverse(),"pdn")+'<div style="padding:8px 0;font-size:18px;font-weight:700">'+$("trPx").textContent+'</div>'+row(x.b||[],"pup")+'</div>'}).catch(function(){})}
function trTicket(sd){
  var a=trAcc();if(!a)return;trSd=sd;trTy="market";
  var mx=pLevMax(pSym),lk=!!a.positions[pSym],lev=Math.min(a.lev[pSym]||PCFG.defaultLev,mx),st=QSTEP[pSym],mq=PMINQ[pSym]||st,bs=esc(pBase(pSym));
  trSheet('<h3 class="'+(sd==="buy"?"pup":"pdn")+'">'+(sd==="buy"?"Long ":"Short ")+bs+'</h3><div class="trseg" id="trTy"><button type="button" data-ty="market" class="on">Market</button><button type="button" data-ty="limit">Limit</button></div>'
  +'<label>Leverage <b id="trLv" style="color:#F5F5F5">'+lev+'x</b>'+(lk?' <small>('+L("terkunci, ada posisi","locked, position open")+')</small>':"")+'<input id="trLev" type="range" min="1" max="'+mx+'" value="'+lev+'"'+(lk?" disabled":"")+'></label>'
  +'<div class="trlb"><div class="trrw"><span>'+L("Jumlah","Size")+'</span><div class="trseg" id="trUn" style="margin:0 0 6px"><button type="button" data-un="coin" class="'+(TRS.un==="usdt"?"":"on")+'">'+bs+'</button><button type="button" data-un="usdt" class="'+(TRS.un==="usdt"?"on":"")+'">USDT</button></div></div><input id="trQ" type="number" inputmode="decimal" min="0" step="any" placeholder="'+(TRS.un==="usdt"?"0.00":mq)+'"></div>'+'<div class="trch">'+[25,50,75,100].map(function(p){return'<button type="button" data-pct="'+p+'">'+p+'%</button>'}).join("")+'</div>'
  +'<label id="trPxL" style="display:none">'+L("Harga limit","Limit price")+'<input id="trPx2" type="number" inputmode="decimal" step="any"></label>'
  +'<div class="trr2"><label>Stop loss<input id="trSl" type="number" inputmode="decimal" step="any"></label><label>Take profit<input id="trTp" type="number" inputmode="decimal" step="any"></label></div>'
  +'<label style="display:flex;gap:8px;align-items:center"><input id="trRo" type="checkbox">Reduce-only</label><p class="trmu" id="trSum"></p><p class="pdn" id="trMsg"></p><button type="button" class="trgo '+(sd==="buy"?"trbl":"trbs")+'" id="trGo">'+(sd==="buy"?"Long ":"Short ")+bs+'</button>');
  ["trQ","trLev","trPx2"].forEach(function(i){$(i).oninput=trSum});trSum();
}
function trPxNow(){var b=BK[pSym];if(trTy==="limit")return parseFloat($("trPx2").value)||0;return b?(trSd==="buy"?b.ask:b.bid):0}
function trQty(){var v=parseFloat($("trQ").value);if(!(v>0))return 0;if(TRS.un==="usdt"){var px=trPxNow();return px>0?v/px:0}return v}
function trQRound(q){var st=QSTEP[pSym];return Math.round(Math.floor(q/st+1e-9)*st*1e8)/1e8}
function trSum(){var lv=+$("trLev").value||10,px=trPxNow(),q=trQRound(trQty());$("trLv").textContent=lv+"x";var e=$("trSum");if(!(q>0)||!(px>0)){e.textContent="";return}var nt=q*px;e.textContent=(TRS.un==="usdt"?"\u2248 "+q+" "+pBase(pSym)+" | ":"")+L("Nilai","Notional")+" "+f2(nt)+" USDT | Margin "+f2(nt/lv)+" USDT | Fee ~ "+f2(nt*PCFG.takerFee)+" USDT"}
function trSubmit(){
  var a=trAcc(),m=$("trMsg"),bad=function(s){m.textContent=s};if(!a)return;
  var st=QSTEP[pSym],q=trQRound(trQty()),mnq=PMINQ[pSym]||st,b=BK[pSym],n=Date.now(),long=trSd==="buy";
  if(!(q>=mnq-1e-12))return bad(L("Isi jumlah minimal ","Enter at least ")+mnq+" "+pBase(pSym)+(trPxNow()>0?" (\u2248 "+f2(mnq*trPxNow())+" USDT)":""));
  if(!b||n-pLastMsg>5000)return bad(L("Harga belum live. Tunggu koneksi Bybit.","Price feed is not live. Wait for Bybit."));
  var o={symbol:pSym,side:trSd,type:trTy,qty:q,reduceOnly:$("trRo").checked},sl=parseFloat($("trSl").value),tp=parseFloat($("trTp").value);
  if(trTy==="limit"){o.price=parseFloat($("trPx2").value);if(!(o.price>0))return bad(L("Isi harga limit.","Enter a limit price."))}
  var ref=trTy==="limit"?o.price:(long?b.ask:b.bid);
  if(sl>0){if(long?sl>=ref:sl<=ref)return bad(L("Stop loss di sisi yang salah.","Stop loss is on the wrong side."));o.sl=sl}
  if(tp>0){if(long?tp<=ref:tp>=ref)return bad(L("Take profit di sisi yang salah.","Take profit is on the wrong side."));o.tp=tp}
  if(!a.positions[pSym]){var lr=PE.setLeverage(a,pSym,+$("trLev").value||PCFG.defaultLev,PCFG);if(!lr.ok)return bad(perr(lr.error))}
  var r=PE.placeOrder(a,o,BK,PCFG,n);if(!r.ok)return bad(perr(r.error));
  pLog(a,{symbol:o.symbol,side:o.side,type:o.type,qty:o.qty,price:r.filled?r.price:o.price,status:r.filled?"filled":"placed"});
  pSave();pSig="";trPSig="";trShut();trNote(r.filled?L("Terisi @ ","Filled @ ")+f2(r.price):L("Limit order dipasang.","Limit order placed."));trRender();
}
function trSettings(){
  var t=function(k,l){return'<div class="trrow"><span>'+l+'</span><button type="button" class="trtg '+(TRS[k]?"on":"")+'" data-k="'+k+'"></button></div>'},
  sg=function(k,l,o){return'<div class="trrow"><span>'+l+'</span><div class="trseg" style="margin:0">'+o.map(function(v){return'<button type="button" data-k="'+k+'" data-v="'+v[0]+'" class="'+(TRS[k]===v[0]?"on":"")+'">'+v[1]+'</button>'}).join("")+'</div></div>'};
  trSheet('<h3>'+L("Pengaturan chart","Chart settings")+'</h3>'+t("vol","Volume")+t("grid","Grid")+t("magnet",L("Magnet (snap ke OHLC)","Magnet (snap to OHLC)"))+sg("type",L("Tipe chart","Chart type"),[["candle","Candle"],["line","Line"]])+sg("col",L("Warna candle","Candle colors"),[["wr",L("Putih/Merah","White/Red")],["gr",L("Hijau/Merah","Green/Red")]])+'<button type="button" class="trgo" id="trClr" style="background:var(--ln);color:#F5F5F5">'+L("Hapus semua gambar","Clear all drawings")+'</button>');
}
function trList(){
  var e=$("trList");if(!e)return;var q=String(($("trSrch")||{}).value||"").toUpperCase().replace(/[^A-Z0-9]/g,"");
  var rows=PSYMS.filter(function(s){return(!q||s.indexOf(q)>-1)&&(pCatSel==="all"||q||pCatOf(s)===pCatSel)});
  rows.sort(function(x,y){var d=((ALLT[y]||{}).vol||0)-((ALLT[x]||{}).vol||0);return d||(x<y?-1:1)});
  e.innerHTML=rows.slice(0,100).map(function(s){var t=ALLT[s],d=PDEC[s]||2;return'<button type="button" class="trpk" data-ps="'+s+'"><span>'+trIco(pBase(s))+esc(pBase(s))+'</span><span class="trmu">'+pLevMax(s)+'x</span><span>'+(t&&t.last>0?t.last.toFixed(Math.min(d,8)):"-")+'</span><span class="'+(t?pc(t.chg):"")+'">'+(t&&isFinite(t.chg)?(t.chg>0?"+":"")+(t.chg*100).toFixed(2)+"%":"-")+'</span></button>'}).join("")||'<p class="trmu">'+L("Koin tidak ditemukan.","No coin found.")+'</p>'}
function trPicker(){
  pLoadAllT(true);
  trSheet('<input id="trSrch" type="search" autocomplete="off" placeholder="'+L("Cari koin, mis. PEPE, SOL, XAU","Search coin, e.g. PEPE, SOL, XAU")+'"><div class="trch">'+PCATS.map(function(c){return'<button type="button" data-cat="'+c[0]+'" class="'+(c[0]===pCatSel?"on":"")+'">'+L(c[1],c[2])+'</button>'}).join("")+'</div><div id="trList"></div>');
  trList();$("trSrch").oninput=trList;setTimeout(trList,1500)}
function trClick(e){
  if(e.target.id==="trSh"){trShut();return}
  var b=e.target.closest("button");if(!b)return;var a=trAcc(),d=b.dataset,id=b.id;
  if(id==="trX")return trClose();
  if(id==="trSymB")return trPicker();
  if(id==="trGear")return trSettings();
  if(id==="trFx")return trIndSheet();
  if(d.it){trNew.t=d.it;document.querySelectorAll("#trItp button").forEach(function(x){x.classList.toggle("on",x===b)});return}
  if(d.ic){trNew.c=d.ic;document.querySelectorAll("#trIcs .trsw").forEach(function(x){x.classList.toggle("on",x===b)});return}
  if(d.ia){
    if(d.ia==="add"){var nn=Math.max(2,Math.min(500,parseInt($("trIn").value)||20));TRS.ind=(TRS.ind||[]).concat([{id:Date.now(),t:trNew.t,n:nn,c:trNew.c,on:true}]);trNew.c=TRCOL[TRS.ind.length%TRCOL.length];trSet();trMk();trIndSheet();return}
    TRS.ind=(TRS.ind||[]).filter(function(i){if(String(i.id)!==d.id)return true;if(d.ia==="eye"){i.on=i.on===false;return true}return false});trSet();trMk();trIndSheet();return}
  if(id==="trGo")return trSubmit();
  if(id==="trStSv")return trStopsSave(d.s);
  if(id==="trClr"){trDR=[];trRul=null;trDrSave();trShut();return}
  if(d.tf){pTf=d.tf;trTfBar();trKey="";trLoadCD();return}
  if(d.tt){if(d.tt==="del"){if(trRul)trRul=null;else trDR.pop();trDrSave();return}trTool=TRS.lock?"cross":d.tt;trBar();return}
  if(d.to){TRS[d.to]=!TRS[d.to];trSet();if(d.to==="magnet")trMk();if(TRS.lock)trTool="cross";trBar();return}
  if(d.n){if(d.n==="trade")trTicket(trSd);else trTabGo(d.n);return}
  if(b.parentNode&&b.parentNode.id==="trAct"){trTicket(d.s);return}
  if(d.k&&b.classList.contains("trtg")){TRS[d.k]=!TRS[d.k];trSet();trMk();trSettings();return}
  if(d.k&&d.v){TRS[d.k]=d.v;trSet();trMk();trSettings();return}
  if(d.cat){pCatSel=d.cat;document.querySelectorAll("#trSb [data-cat]").forEach(function(x){x.classList.toggle("on",x.dataset.cat===pCatSel)});trList();return}
  if(d.ps){pSym=d.ps;trShut();trDrLoad();trRul=null;trKey="";trCD=[];trHead();pSync();trLoadCD();$("trPx").textContent="-";$("trChg").textContent="";return}
  if(d.un){if(d.un===TRS.un)return;var px0=trPxNow(),v0=parseFloat($("trQ").value);
    if(v0>0&&px0>0){$("trQ").value=d.un==="usdt"?Math.round(v0*px0*100)/100:trQRound(v0/px0)}
    TRS.un=d.un;trSet();document.querySelectorAll("#trUn button").forEach(function(x){x.classList.toggle("on",x===b)});$("trQ").placeholder=d.un==="usdt"?"0.00":(PMINQ[pSym]||QSTEP[pSym]);trSum();return}
  if(d.ty){trTy=d.ty;document.querySelectorAll("#trTy button").forEach(function(x){x.classList.toggle("on",x===b)});$("trPxL").style.display=trTy==="limit"?"block":"none";trSum();return}
  if(d.pct){var s=pReady(a)?PE.snapshot(a,BK):null,px=trPxNow(),lv=+$("trLev").value||10;if(!s||!(px>0))return;var N=s.freeMargin*lv*(+d.pct/100)*.99;if(TRS.un==="usdt")$("trQ").value=N>=.01?Math.floor(N*100)/100:"";else{var st=QSTEP[pSym],q=Math.floor(N/px/st)*st;$("trQ").value=q>0?Math.round(q*1e8)/1e8:""}trSum();return}
  if(d.trc&&a){
    if(d.trc==="hdet"){if(trHx[d.key])delete trHx[d.key];else trHx[d.key]=1;trPSig="";trRender();return}
    if(d.trc==="hmore"){trHn+=10;trPSig="";trRender();return}
    var sym=d.s,p=a.positions[sym];
    if(d.trc==="card"&&p){pCardPos(a,p);return}
    if(d.trc==="tcard"){pCardTrade(a,PE.ledger(a).trades[+d.j]);return}
    if(d.trc==="close"&&p){var r=PE.placeOrder(a,{symbol:sym,side:p.side==="long"?"sell":"buy",type:"market",qty:p.qty,reduceOnly:true},BK,PCFG,Date.now());
      if(r.ok)pLog(a,{symbol:sym,side:p.side==="long"?"sell":"buy",type:"market",qty:p.qty,price:r.price,status:"filled"});
      pSave();pSig="";trPSig="";trNote(r.ok?L("Posisi ditutup @ ","Closed @ ")+f2(r.price):perr(r.error),!r.ok);trRender();return}
    if(d.trc==="stops"&&p){trStopsSheet(sym);return}
    if(d.trc==="cancel"){var co=a.orders.filter(function(x){return x.id===+d.id})[0];PE.cancelOrder(a,+d.id);if(co)pLog(a,{symbol:co.symbol,side:co.side,type:"limit",qty:co.qty,price:co.price,status:"cancelled"});pSave();pSig="";trPSig="";trRender();return}
  }
}

paint();
if(CFG){
  load("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",function(){
    load("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js",function(){
      load("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js",function(){
        fb=firebase;fb.initializeApp(CFG);fs=fb.firestore();
        load("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage-compat.js",function(){try{fbs=fb.storage()}catch(e){}if(user&&view==="prof")dash()});
        fb.auth().onAuthStateChanged(function(u){
          user=u?{name:u.displayName||"",email:u.email,uid:u.uid,verified:u.emailVerified}:null;
          if(!u)prof=null;
          paint();
          if(window.vzHideLoader)vzHideLoader();
          if(u&&!signingUp)loadProfile();
        });
      });
    });
  });
}else{
  try{var em=localStorage.getItem("vz_session"),us=getUsers();if(em&&us[em]){user={name:us[em].name,email:em};paint()}}catch(e){}
  if(window.vzHideLoader)vzHideLoader();
}
})();
