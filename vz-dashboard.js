/* Vekxt Zero - dashboard trader (login, akun, withdrawal, profile, terminal Perps).
   Dimuat hanya di halaman /p/login.html oleh template statis. */
(function(){if(document.documentElement.getAttribute("data-v")!=="login")return;
var CFG={apiKey:"AIzaSyCVJG4IKxyRqFDEdM3j-nD0H_azN-DbCpk",authDomain:"vekxtzero.firebaseapp.com",projectId:"vekxtzero",storageBucket:"vekxtzero.firebasestorage.app",messagingSenderId:"918745170835",appId:"1:918745170835:web:891a76e2bc31c5acfede66"}; /* Firebase: ganti null dengan objek config dari Firebase console, contoh {apiKey:"...",authDomain:"...",projectId:"...",appId:"..."} */
var lang="id";try{lang=localStorage.getItem("lang")||"id"}catch(e){}
var T={"id": {"demo": "Mode demo: data hanya tersimpan di browser ini dan belum aman untuk akun sungguhan.", "tl": "Masuk", "ts": "Daftar", "hl": "Masuk ke akun trader", "hs": "Buat akun trader", "name": "Nama lengkap", "email": "Email", "pass": "Kata sandi", "bl": "Masuk", "bs": "Buat akun", "forgot": "Lupa kata sandi?", "hello": "Halo, ", "mine": "Challenge saya", "none": "Belum ada challenge aktif.", "start": "Mulai challenge", "out": "Keluar", "reset": "Email reset kata sandi sudah dikirim. Cek inbox kamu.", "resetDemo": "Reset kata sandi tersedia setelah Firebase dihubungkan.", "eBad": "Email atau kata sandi salah.", "eExists": "Email sudah terdaftar.", "eWeak": "Kata sandi minimal 8 karakter.", "eEmail": "Format email tidak valid.", "eName": "Isi nama lengkap.", "eGen": "Terjadi kesalahan. Coba lagi.", "note": "Contoh data. Akan terhubung ke platform trading setelah integrasi selesai.", "phase": "Fase", "active": "Aktif", "size": "Ukuran akun", "days": "Hari trading", "progress": "Progres challenge", "target": "Target profit", "dlimit": "Rugi harian", "mlimit": "Rugi total", "cert": "Sertifikat", "support": "Hubungi CS"}, "en": {"demo": "Demo mode: data is stored only in this browser and is not secure for real accounts.", "tl": "Log in", "ts": "Sign up", "hl": "Log in to your trader account", "hs": "Create your trader account", "name": "Full name", "email": "Email", "pass": "Password", "bl": "Log in", "bs": "Create account", "forgot": "Forgot password?", "hello": "Hello, ", "mine": "My challenges", "none": "No active challenge yet.", "start": "Start a challenge", "out": "Log out", "reset": "Password reset email sent. Check your inbox.", "resetDemo": "Password reset works once Firebase is connected.", "eBad": "Wrong email or password.", "eExists": "This email is already registered.", "eWeak": "Password must be at least 8 characters.", "eEmail": "Invalid email address.", "eName": "Enter your full name.", "eGen": "Something went wrong. Try again.", "note": "Sample data. Will connect to your trading platform once integrated.", "phase": "Phase", "active": "Active", "size": "Account size", "days": "Trading days", "progress": "Challenge progress", "target": "Profit target", "dlimit": "Daily loss", "mlimit": "Max loss", "cert": "Certificate", "support": "Contact support"}};
Object.assign(T.id,{"n_home": "Akun", "n_wd": "Withdrawal", "n_prof": "Profile", "n_aff": "Affiliate", "wdT": "Penarikan profit", "wdAv": "Profit tersedia", "wdSch": "Jadwal payout", "wdBi": "Dua mingguan", "wdAmt": "Jumlah penarikan (USD)", "wdAddr": "Alamat wallet / rekening tujuan", "wdBtn": "Ajukan penarikan", "wdHist": "Riwayat penarikan", "wdNone": "Belum ada permintaan penarikan.", "wdPend": "Menunggu", "wdBad": "Isi jumlah penarikan yang valid.", "wdMax": "Jumlah melebihi profit yang tersedia.", "wdNoAddr": "Isi alamat wallet / rekening tujuan.", "wdOk": "Permintaan tersimpan.", "wdDemo": "Masih tahap uji coba: permintaan hanya tersimpan di browser ini dan belum diproses.", "pfTg": "Username Telegram (opsional)", "pfSave": "Simpan", "pfOk": "Profil tersimpan.", "affT": "Program affiliate", "affCode": "Kode referral kamu", "affCopy": "Salin", "affCopied": "Tersalin", "affClicks": "Klik", "affSign": "Pendaftaran", "affComm": "Komisi", "affRate": "Komisi", "affNote": "Pelacakan referral dan komisi belum aktif, jadi angka di atas masih 0."});Object.assign(T.en,{"n_home": "Account", "n_wd": "Withdrawal", "n_prof": "Profile", "n_aff": "Affiliate", "wdT": "Profit withdrawal", "wdAv": "Available profit", "wdSch": "Payout schedule", "wdBi": "Biweekly", "wdAmt": "Withdrawal amount (USD)", "wdAddr": "Destination wallet / account", "wdBtn": "Request withdrawal", "wdHist": "Withdrawal history", "wdNone": "No withdrawal requests yet.", "wdPend": "Pending", "wdBad": "Enter a valid withdrawal amount.", "wdMax": "Amount exceeds available profit.", "wdNoAddr": "Enter the destination wallet / account.", "wdOk": "Request saved.", "wdDemo": "Still in testing: requests are only saved in this browser and are not processed.", "pfTg": "Telegram username (optional)", "pfSave": "Save", "pfOk": "Profile saved.", "affT": "Affiliate program", "affCode": "Your referral code", "affCopy": "Copy", "affCopied": "Copied", "affClicks": "Clicks", "affSign": "Sign-ups", "affComm": "Commission", "affRate": "Commission", "affNote": "Referral and commission tracking is not active yet, so the numbers above are 0."});
Object.assign(T.id,{"pnlT": "Kalender PnL", "pnlTot": "Total bulan ini", "pnlWL": "Hari profit / rugi"});Object.assign(T.en,{"pnlT": "PnL calendar", "pnlTot": "Month total", "pnlWL": "Profit / loss days"});
Object.assign(T.id,{"accHint": "Ketuk akun untuk melihat progress challenge dan kalender PnL.", "accBack": "Semua akun"});Object.assign(T.en,{"accHint": "Tap an account to see its challenge progress and PnL calendar.", "accBack": "All accounts"});
Object.assign(T.id,{"accLoad": "Memuat akun...", "accErr": "Gagal memuat akun.", "accRetry": "Coba lagi"});Object.assign(T.en,{"accLoad": "Loading accounts...", "accErr": "Could not load accounts.", "accRetry": "Try again"});
Object.assign(T.id,{"accOff": "Offline", "accOffMsg": "Koneksi akun sedang terputus, data belum tersedia. Coba lagi beberapa saat."});Object.assign(T.en,{"accOff": "Offline", "accOffMsg": "The account connection is down, data is not available yet. Try again shortly."});
Object.assign(T.id,{"addr": "Alamat lengkap", "addrPh": "Jalan, nomor, kota, kode pos, negara", "eAddr": "Isi alamat lengkap (minimal 10 karakter).", "google": "Lanjut dengan Google", "or": "atau", "needAddr": "Lengkapi alamat lengkap kamu untuk melanjutkan.", "verT": "Verifikasi email kamu", "verMsg": "Kami mengirim tautan verifikasi ke email kamu. Buka tautannya, lalu tekan tombol di bawah.", "verDone": "Saya sudah verifikasi", "verResend": "Kirim ulang email verifikasi", "verSent": "Email verifikasi dikirim.", "verNot": "Email belum terverifikasi. Cek inbox atau folder spam.", "eGoogle": "Login dengan Google gagal atau dibatalkan.", "pfAddr": "Alamat lengkap", "eProf": "Gagal menyimpan profil. Coba lagi."});Object.assign(T.en,{"addr": "Full address", "addrPh": "Street, number, city, postal code, country", "eAddr": "Enter your full address (at least 10 characters).", "google": "Continue with Google", "or": "or", "needAddr": "Please complete your full address to continue.", "verT": "Verify your email", "verMsg": "We sent a verification link to your email. Open it, then tap the button below.", "verDone": "I have verified", "verResend": "Resend verification email", "verSent": "Verification email sent.", "verNot": "Email is not verified yet. Check your inbox or spam folder.", "eGoogle": "Google sign-in failed or was cancelled.", "pfAddr": "Full address", "eProf": "Could not save your profile. Try again."});
Object.assign(T.id,{"stT": "Statistik trading", "stWin": "Win rate", "stTrades": "Total trade", "stWL": "Menang / kalah", "stAvgW": "Rata-rata menang", "stAvgL": "Rata-rata kalah", "stPF": "Profit factor", "stBest": "Trade terbaik", "stWorst": "Trade terburuk", "stNet": "Total PnL", "stNone": "Belum ada trade tertutup.", "hiT": "Riwayat trading", "hiMore": "Tampilkan lebih banyak", "wdCrypto": "Crypto", "wdBank": "Bank (Indonesia)", "wdRise": "Rise", "wdSoon": "Segera hadir", "wdAddr": "Alamat wallet", "wdBankName": "Nama bank", "wdBankNo": "Nomor rekening", "wdBankHolder": "Nama pemilik rekening", "wdEAddr": "Alamat wallet tidak valid untuk network ini.", "wdEBank": "Lengkapi data bank dengan benar (nama bank, nomor rekening, nama pemilik).", "wdNote": "Permintaan penarikan ditinjau oleh tim sebelum diproses."});Object.assign(T.en,{"stT": "Trading statistics", "stWin": "Win rate", "stTrades": "Total trades", "stWL": "Wins / losses", "stAvgW": "Average win", "stAvgL": "Average loss", "stPF": "Profit factor", "stBest": "Best trade", "stWorst": "Worst trade", "stNet": "Total PnL", "stNone": "No closed trades yet.", "hiT": "Trading history", "hiMore": "Show more", "wdCrypto": "Crypto", "wdBank": "Bank (Indonesia)", "wdRise": "Rise", "wdSoon": "Coming soon", "wdAddr": "Wallet address", "wdBankName": "Bank name", "wdBankNo": "Account number", "wdBankHolder": "Account holder name", "wdEAddr": "Invalid wallet address for this network.", "wdEBank": "Complete the bank details correctly (bank name, account number, holder name).", "wdNote": "Withdrawal requests are reviewed by the team before they are processed."});
Object.assign(T.id,{"n_offers":"Offers","n_cert":"Certificate","rf":"Perbarui","rfAgo":"Diperbarui","rfNow":"baru saja","rfS":" dtk lalu","rfM":" mnt lalu","rfFail":"Gagal memperbarui. Coba lagi.","rfTip":"Perbarui data akun (otomatis tiap 30 detik)",
"crT":"Kredensial akun","crLogin":"Login","crPass":"Password","crServer":"Server","crShow":"Lihat","crHide":"Sembunyi","crNote":"Pakai data ini untuk login di aplikasi MetaTrader. Jangan bagikan ke siapa pun.",
"kycT":"Verifikasi dokumen","kyc_none":"Belum diverifikasi","kyc_pending":"Menunggu review","kyc_verified":"Terverifikasi","kyc_rejected":"Ditolak","kycDesc":"Upload foto dokumen identitas (KTP, paspor, atau SIM) dan selfie sambil memegang dokumen tersebut. Pastikan semua teks terbaca jelas.","kycType":"Jenis dokumen","kycPass":"Paspor","kycId":"Foto dokumen identitas","kycSelfie":"Selfie sambil memegang dokumen","kycBtn":"Kirim untuk verifikasi","kycEFile":"Pilih foto dokumen dan selfie dulu.","kycEType":"Format file tidak didukung. Pakai JPG, PNG, atau WebP (dokumen boleh PDF, selfie harus foto).","kycEBig":"Ukuran file terlalu besar (maksimal 10 MB).","kycUp":"Mengunggah dokumen...","kycPendMsg":"Dokumen kamu sudah dikirim dan sedang ditinjau tim.","kycOkMsg":"Identitas kamu sudah terverifikasi.","kycRej":"Alasan penolakan","kycOff":"Verifikasi dokumen belum tersedia saat ini. Muat ulang halaman lalu coba lagi.",
"ofT":"Penawaran untuk kamu","ofNone":"Belum ada penawaran aktif.","ofUse":"Pakai sekarang","ofUntil":"Berlaku sampai",
"ceT":"Sertifikat","ceNone":"Sertifikat akan muncul di sini setelah akun kamu funded.","ceView":"Lihat sertifikat","ceFunded":"Funded"});
Object.assign(T.en,{"n_offers":"Offers","n_cert":"Certificate","rf":"Refresh","rfAgo":"Updated","rfNow":"just now","rfS":"s ago","rfM":" min ago","rfFail":"Could not refresh. Try again.","rfTip":"Refresh account data (automatic every 30 seconds)",
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
function money(n){return "$"+Math.round(n).toLocaleString("en-US")}
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
function pm(v){return(v>0?"+":v<0?"-":"")+"$"+Math.abs(v).toFixed(2)}
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
  return (p.side === "long" ? px - p.entry : p.entry - px) * p.qty;
}

function equity(acc, books) {
  let u = 0;
  for (const p of Object.values(acc.positions)) u += upnl(p, books[p.symbol]);
  return r8(acc.balance + u);
}

function usedMargin(acc) {
  let m = 0;
  for (const p of Object.values(acc.positions)) m += (p.qty * p.entry) / p.lev;
  return m;
}

function maintMargin(acc, books, cfg) {
  let m = 0;
  for (const p of Object.values(acc.positions)) m += p.qty * mid(books[p.symbol]) * cfg.mmr;
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
  const buy = side === "buy", rate = maker ? cfg.makerFee : cfg.takerFee;
  const ev = [];
  let rest = qty, fee = 0;
  const pos = acc.positions[symbol];
  if (pos && (pos.side === "long") !== buy) {
    const cq = Math.min(rest, pos.qty), before = pos.qty;
    const gross = (pos.side === "long" ? price - pos.entry : pos.entry - price) * cq;
    const closeFee = price * cq * rate;
    const share = (pos.feePaid || 0) * (cq / before);
    pos.feePaid = r8((pos.feePaid || 0) - share);
    acc.balance = r8(acc.balance + gross);
    acc.realized = r8(acc.realized + gross);
    acc.trades.push({ at: now, s: symbol, d: pos.side === "long" ? "BUY" : "SELL", v: r8(cq), o: pos.entry, c: price, l: pos.lev, w: CLOSE_WHY || undefined, p: r8(gross - closeFee - share) });
    if (acc.trades.length > 1000) acc.trades.shift();
    fee += closeFee;
    pos.qty = r8(pos.qty - cq);
    rest = r8(rest - cq);
    if (pos.qty <= EPS) delete acc.positions[symbol];
    ev.push({ type: "close", symbol, qty: r8(cq), price, pnl: r8(gross) });
  }
  if (rest > EPS && !reduceOnly) {
    const openFee = price * rest * rate;
    fee += openFee;
    const cur = acc.positions[symbol];
    if (cur) {
      cur.entry = r8((cur.entry * cur.qty + price * rest) / (cur.qty + rest));
      cur.qty = r8(cur.qty + rest);
      cur.feePaid = r8((cur.feePaid || 0) + openFee);
    } else {
      acc.positions[symbol] = { symbol, side: buy ? "long" : "short", qty: r8(rest), entry: price, lev: acc.lev[symbol] || cfg.defaultLev, sl: null, tp: null, feePaid: r8(openFee) };
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
  const lev = acc.lev[symbol] || cfg.defaultLev;
  const need = (opening * price) / lev + price * qty * (maker ? cfg.makerFee : cfg.takerFee);
  const free = equity(acc, books) - usedMargin(acc);
  return need > free + EPS ? "insufficient_margin" : null;
}

function placeOrder(acc, o, books, cfg = DEFAULT_CFG, now = Date.now()) {
  if (acc.status !== "active") return { ok: false, error: "account_" + acc.status };
  const b = books[o.symbol];
  if (!validBook(b, cfg)) return { ok: false, error: "no_price" };
  if (!(o.qty > 0) || (o.side !== "buy" && o.side !== "sell")) return { ok: false, error: "bad_order" };
  const buy = o.side === "buy";
  const limitOk = o.type === "limit" && o.price > 0;
  if (o.type !== "market" && !limitOk) return { ok: false, error: "bad_order" };

  const crossing = o.type === "market" || (buy ? o.price >= b.ask : o.price <= b.bid);
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
  acc.orders.push({ id, symbol: o.symbol, side: o.side, qty: o.qty, price: o.price, reduceOnly: !!o.reduceOnly });
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
    const hit = o.side === "buy" ? b.ask <= o.price : b.bid >= o.price;
    if (!hit) continue;
    acc.orders = acc.orders.filter((x) => x.id !== o.id);
    const err = marginCheck(acc, books, o.symbol, o.side, o.qty, o.price, true, cfg, o.reduceOnly);
    if (err) { events.push({ type: "order_cancelled", id: o.id, reason: err }); continue; }
    events.push(...applyFill(acc, o.symbol, o.side, o.qty, o.price, true, cfg, o.reduceOnly, now));
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
  if (acc.day.startBal - eq >= (acc.size * r.dailyDd) / 100) return events.concat(breach(acc, books, cfg, "daily", now));
  const ref = r.trailing ? acc.peak : acc.size;
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
    maxLoss: Math.max(0, r8((acc.rules.trailing ? acc.peak : acc.size) - eq)), maxLimit: (acc.size * acc.rules.maxDd) / 100,
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
  const recent = tr.slice(-200).reverse().map((x) => ({ t: new Date(x.at).toISOString().slice(0, 19), s: x.s, d: x.d, v: x.v, o: x.o, c: x.c, l: x.l, w: x.w, p: r2(x.p) }));
  return { pnl, days: days.size, firstEntry: acc.firstOpen || undefined, stats, trades: recent };
}

return{DEFAULT_CFG,validBook,newAccount,equity,usedMargin,setLeverage,placeOrder,cancelOrder,setStops,onTick,applyFunding,snapshot,ledger};
})();
/* ===== PERPS: dual login (CFD / Perps) + terminal. Harga: Bybit publik. Mesin: perp-engine.mjs (inline di atas) ===== */
var PM=document.documentElement.getAttribute("data-mode")==="perp"?"perp":"cfd";
var PSYMS=["BTCUSDT","ETHUSDT","SOLUSDT","XRPUSDT","DOGEUSDT","XAUUSDT"],PDEC={BTCUSDT:1,ETHUSDT:2,SOLUSDT:3,XRPUSDT:4,DOGEUSDT:5,XAUUSDT:2},QSTEP={BTCUSDT:.001,ETHUSDT:.01,SOLUSDT:.1,XRPUSDT:1,DOGEUSDT:1,XAUUSDT:.01},PTICK={},PMINQ={},INFO={BTCUSDT:1,ETHUSDT:1,SOLUSDT:1,XRPUSDT:1,DOGEUSDT:1,XAUUSDT:1},INFO_OK=false,ALLT={},pAllAt=0,pInfoBusy=false,pSubs={};
/* --- daftar koin: semua perpetual USDT Bybit (otomatis) + kategori Major / Meme / Micin / Emas --- */
var PMEME=/^(DOGE|SHIB|PEPE|WIF|BONK|FLOKI|MEME|TURBO|BRETT|POPCAT|MOG|NEIRO|PNUT|GOAT|ACT|MOODENG|FARTCOIN|TRUMP|MEW|BOME|DOGS|CAT|BABYDOGE|SATS|RATS|LADYS|WOJAK|MYRO|SLERF|BODEN|MICHI|GIGA|SPX|CHILLGUY|PENGU|AI16Z|VINE|HIPPO|BANANA|TOSHI|DEGEN|MOCHI|APU|PONKE|HMSTR|CATI|MUBARAK|BROCCOLI|BANANAS31|PUMP|USELESS|FWOG|PEOPLE|MELANIA|LIBRA|PIPPIN|ZEREBRO|GRIFFAIN|SWARMS|TST|BULLY|MEMEFI|MAGA|SUNDOG|KEYCAT|MANEKI|SIGMA|SNEK|BOBO|WEN|ELON|CHEEMS)$/;
var PMAJ={BTC:1,ETH:1,BNB:1,SOL:1,XRP:1,ADA:1,AVAX:1,DOT:1,LINK:1,LTC:1,TRX:1,TON:1,BCH:1,ATOM:1,NEAR:1,SUI:1,APT:1,ARB:1,OP:1,UNI:1,AAVE:1,ETC:1,XLM:1,HBAR:1,FIL:1,INJ:1},PGOLD={XAU:1,XAUT:1,PAXG:1};
var PQUICK=["BTCUSDT","ETHUSDT","SOLUSDT","XAUUSDT","DOGEUSDT","1000PEPEUSDT","WIFUSDT","1000BONKUSDT"],PTFS=[["1","1m"],["5","5m"],["15","15m"],["60","1h"],["240","4h"],["D","1D"]],TFSEC={"1":60,"5":300,"15":900,"60":3600,"240":14400,"D":86400},PCATS=[["all","Semua","All"],["major","Major","Major"],["meme","Meme","Meme"],["micin","Micin","Micin"],["gold","Emas","Gold"]],pCatSel="all",pPickOpen=false;
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
function pNeed(){var m={};m[pSym]=1;PERPS.forEach(function(a){if(a.status!=="active")return;Object.keys(a.positions).forEach(function(s){m[s]=1});a.orders.forEach(function(o){m[o.symbol]=1})});return m}
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
function modeLinks(){return'<a href="#" data-pm="cfd" aria-pressed="'+(PM==="cfd")+'">CFD</a><a href="#" data-pm="perp" aria-pressed="'+(PM==="perp")+'">Perps</a>'}
function modeSw(){return'<div class="modesw" role="group" aria-label="Produk">'+modeLinks()+'</div>'}
function paintMode(){var e=$("lgMode");if(!e)return;e.style.display=user?"none":"";e.innerHTML=modeLinks()}
function setMode(m){if(m===PM)return;PM=m;try{localStorage.setItem("vzMode",m)}catch(e){}var h=document.documentElement;if(m==="perp")h.setAttribute("data-mode","perp");else h.removeAttribute("data-mode");selAcc=null;selP=null;paintMode();if(user)dash()}
document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("[data-pm]");if(!a)return;e.preventDefault();setMode(a.getAttribute("data-pm"))});
/* --- penyimpanan akun uji (browser ini) --- */
function pKey(){return"vzPerp:"+((user&&(user.uid||user.email))||"x")}
function pLoadAll(){var k=pKey();if(pKeyLoaded===k)return;pKeyLoaded=k;try{PERPS=JSON.parse(localStorage.getItem(k)||"[]")}catch(e){PERPS=[]}if(!Array.isArray(PERPS))PERPS=[];if(selP!==null&&!PERPS[selP])selP=null}
function pSave(){pSavedAt=Date.now();try{localStorage.setItem(pKey(),JSON.stringify(PERPS))}catch(e){}}
function pNew(size){var a=PE.newAccount({id:"PP-"+Math.floor(10000+Math.random()*90000),size:size,rules:PRULES});a.program=PPROG;PERPS.push(a);pSave();selP=PERPS.length-1}
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
  PERPS.forEach(function(a){if(a.status!=="active")return;
    var slot=Math.floor(n/28800000);if(a.fSlot===undefined)a.fSlot=slot;
    if(slot>a.fSlot){var ok=true;Object.keys(a.positions).forEach(function(s){var t=TK[s];if(t&&isFinite(+t.fundingRate)&&+t.markPrice>0)PE.applyFunding(a,s,+t.fundingRate,+t.markPrice,n);else ok=false});if(ok){a.fSlot=slot;ch=true}}
    var ev=PE.onTick(a,BK,PCFG,n);if(ev.length){ch=true;pEvents(a,ev)}});
  if(ch||n-pSavedAt>5000)pSave();
  pLive()}
var PERR={insufficient_margin:["Margin tidak cukup.","Insufficient margin."],no_price:["Harga belum tersedia.","No price yet."],bad_order:["Order tidak valid.","Invalid order."],bad_leverage:["Leverage tidak valid.","Invalid leverage."],position_open:["Tutup posisi dulu untuk ganti leverage.","Close the position to change leverage."],reduce_only_no_position:["Reduce-only butuh posisi berlawanan.","Reduce-only needs an opposite position."],account_breached:["Akun sudah breached.","Account is breached."],no_position:["Tidak ada posisi.","No position."]};
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
function breachMsg(a){return a.reason==="liquidation"?L("Akun dilikuidasi.","Account was liquidated."):a.reason==="daily"?t("brD"):t("brM")}
/* --- tampilan --- */
function perpHome(){
  pLoadAll();pConnect();pLoadInfo();pSync();
  var a=selP!==null?PERPS[selP]:null;if(a)return perpDetail(a);
  var x=modeSw()+'<p class="lg-demo">'+L("Mode uji: harga langsung dari Bybit, tetapi akun dan posisi hanya tersimpan di browser ini dan hanya berjalan saat halaman terbuka.","Test mode: live Bybit prices, but accounts and positions are stored in this browser only and run only while this page is open.")+'</p>';
  x+=PERPS.map(function(c,i){var br=c.status!=="active",pf=c.balance-c.size;return'<button type="button" class="acc" data-pa="open" data-i="'+i+'"><div><b>'+esc(c.program)+" "+kfmt(c.size)+'</b><small>ID '+esc(c.id)+'</small></div><div class="acc-r">'+(br?'<strong class="dn">Breached</strong>':'<strong class="'+(pf>0?"up":pf<0?"dn":"")+'">'+(pf<0?"-":pf>0?"+":"")+""+f2(Math.abs(pf))+" USDT"+'</strong>')+'<small>Balance '+f2(c.balance)+" USDT"+'</small></div><span class="acc-a">&#8250;</span></button>'}).join("");
  x+='<div class="lg-card"><b>'+L("Buat akun uji","Create a test account")+'</b><p>'+L("Aturan: daily drawdown 4%, max drawdown 8%, target 10%.","Rules: 4% daily drawdown, 8% max drawdown, 10% target.")+'</p><div class="pchips">'+PSIZES.map(function(s){return'<button type="button" class="pchip" data-pa="new" data-size="'+s+'">'+kfmt(s)+'</button>'}).join("")+'</div></div>';
  return x}
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
  +'<button type="button" class="lg-link" data-pa="del">'+L("Hapus akun uji ini","Delete this test account")+'</button></div>';
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
  hd.innerHTML='<div class="dtop"><div><b>'+esc(a.program)+" "+kfmt(a.size)+'</b><p>ID '+esc(a.id)+'</p></div><span class="tag'+(on?"":" kyc-rejected")+'">'+(on?(pf>=tg?L("Target tercapai","Target hit"):L("Aktif","Active")):"Breached")+'</span></div>'
  +'<div class="pbig">'+f2(eq)+" USDT"+'</div><p class="'+pc(pf)+'">'+(pf<0?"-":"+")+""+f2(Math.abs(pf))+" USDT"+" ("+(pf/a.size*100).toFixed(2)+'%)</p>'
  +'<div class="grid"><div><small>Balance</small><strong>'+f2(a.balance)+" USDT"+'</strong></div><div><small>Unrealized</small><strong class="'+(s?pc(s.unrealized):"")+'">'+(s?pmu(s.unrealized):"-")+'</strong></div><div><small>'+L("Margin terpakai","Used margin")+'</small><strong>'+f2(s?s.usedMargin:PE.usedMargin(a))+" USDT"+'</strong></div><div><small>'+L("Margin bebas","Free margin")+'</small><strong>'+(s?""+f2(s.freeMargin)+" USDT":"-")+'</strong></div></div>';
  var fr=tk.fundingRate,nf=+tk.nextFundingTime-n,mk=+tk.markPrice,ch=tk.price24hPcnt;
  $("pQ").innerHTML=b?'<span>Bid <b>'+b.bid.toFixed(d)+'</b></span><span>Ask <b>'+b.ask.toFixed(d)+'</b></span><span>Mark <b>'+(mk>0?mk.toFixed(d):"-")+'</b></span><span>24h <b class="'+pc(+ch)+'">'+(ch!==undefined&&isFinite(+ch)?(ch*100).toFixed(2)+"%":"-")+'</b></span><span>Max lev <b>'+pLevMax(pSym)+'x</b></span><span>Funding <b>'+(fr!==undefined&&isFinite(+fr)?(fr*100).toFixed(4)+"%":"-")+(nf>0&&nf<864e5?" / "+new Date(nf).toISOString().substr(11,8):"")+'</b></span>'+(live?"":'<span class="pdn">'+L("Feed terputus","Feed disconnected")+'</span>'):L("Menghubungkan ke Bybit...","Connecting to Bybit...");
  $("pRisk").innerHTML='<b>Risk</b>'+(s?row("Daily drawdown ("+a.rules.dailyDd+"%)",""+f2(s.dailyLoss)+" / "+f2(s.dailyLimit)+" USDT",s.dailyLoss/s.dailyLimit*100)+row("Max drawdown ("+a.rules.maxDd+"%)",""+f2(s.maxLoss)+" / "+f2(s.maxLimit)+" USDT",s.maxLoss/s.maxLimit*100)+row("Target ("+PTARGET+"%)",""+f2(Math.max(pf,0))+" / "+f2(tg)+" USDT",pf/tg*100)+'<p class="acc-hint">Fee '+f2(a.fees)+" USDT"+' | Funding '+pmu(a.funding)+'</p>':'<p>'+L("Menunggu harga...","Waiting for prices...")+'</p>')+(on?"":'<p class="pdn">'+breachMsg(a)+'</p>');
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
  up=cv("--up","#2EBD85"),dn=cv("--dn","#F6465D"),mu=cv("--muted","#888"),ln=cv("--line","#333"),dec=PDEC[pSym]||2;
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
  dn=cs.getPropertyValue("--dn").trim()||"#F6465D",up=cs.getPropertyValue("--up").trim()||"#2EBD85",ac=cs.getPropertyValue("--accent").trim()||"#FFB43A";
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
var PCARDIMG={green:"data:image/webp;base64,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",red:"data:image/webp;base64,UklGRmplAABXRUJQVlA4IF5lAADQVwKdASoAA4AEPrFYpk6nJSQpotI5MTAWCWVu/C41O91UlZ6Ko062/O8/B/x/5D/Bhbv9D/e/17/dvmC/sedHu//H87zn3/uf3f/Nfu58u/97/5v9f7rv1t/2Pz0+gf+Jfzn/r/4//L/BX/jeuD93PUf/Xv9P+1vvff879qvfH/h/yV+AP+o/8X/4f9j39/U39BHzgP+9+8Hw5ft9+3H/h94X/49nn0h/bL/ef4H2F/HP4//dfmD4oPdd9y+dZvi9HP5j+hf23n94A/LvUI/Hf5r/reBD3TzC/bn7r51n3Hnr/OeoL+uvrh/u/EXoCfqX1df9ny/fn//F9hT+h/4vrniq9SWN1rG61jdaxutY3WsbrWN1rLYW9a08G306cNESXJrWobABO1P4ZO2xoiS9DIAr6gh9QQ+oIfUEPya3GnEsxB3xxwkbedcBbL0KkVLjgox3cZ4Vs7PqCH1BD6hLm5tkLbWlHGxeInV3dCpkgvyiR9Ps1K62cM6nS0bqMaFKIiWg9IIQWh9koS8n1BD6giL/iVwjCAI5L5m5QvyXQkfhdfMLCwuxu5KuIZYDRdWVgeRUVmHEfDiuRCHixiQU2PsyetUVsAKiUV07IdKNKZ8PboV7QKDOeBp1r0eKQWOwzldGkQpmkwikb73ZHcaIhvDmCAHdL9Y09H4Q4c8Gt2R9HahvHnpqkkWivhpeLcSiE3kvBgCs+Ps3IMlVfM6xT3WyMnSH2SdUSjuYlkv0ERBWOvCgHFnsuihidX/G9bBJG3zHLG8g5z/5tzGCiNG/U27iAOpLmwh0bMbdxEmAIcoTKLVyzohG3ufTQJUyOpxPo1Z50bwd1ZsCH2tWf6S6CxTWegsOB0VBujncsuS0/quCX2wTOXK40KzBihMEnHyBFQjfKBmBqg8xDzqkbpdqINBXjaSzhM/exkt+oKponeyZ6+k16PsHqw1u/ms4MCWAlgi1Vv5Y0y+8/uev6J/B1Iys1mpL/f05bPzbtQ7JaOKCsdk/ZQX19p961sSDia1k2Q8nREl3K+1fQJSkSbbXqz16d62Ek7OcSxJcmtY3WsbrH/Jj363RdXfifWcp04aIkzRmhMlya2CVpgOzefZWBGHnEo+3j6hEruKtU2wwBT9gJBJyeRSIEJA/UcLKo236XuzceQnmzlocscH09Nc1DnFE0XtMBinyUEiZMCsmC9oh8m41uSkdAt2iLNG+GB4XjdCF7Jo2ri4PWTOsuggjzHAso9GvHDA/CJs++/N4i10uvCCkyInpO2a2Gpe+kW35heEuI6JThkNKOPJsqZNCedS3SFL5vuPoStPTWS3porKn4vPGlQ6/Kr+jQGXDaUfjwG/S55gDOwG09FycF6zbZA+cJeylpdijj7munwwHk0YpLb6ia1NzN3uGPsMscLuyCIGON+c0AhL62P8g4CZ6HQCEPwxxYjXsjtP3KS16yJpUw03/FBufwWzNWwmmjfI/xOYnT2m3evF4NtbBmtTLjXE6Ll36H/sD5Pc1uSJ0ti2j6Poak+6fJ1zfNnjoL6CluIDejb39uFwl/9oplmFPrDx/73axuZefFPooQ/AfB05IywFkihK0voVPtKC4L914AzKkZjViIfFDwxcHw5OHWHRMpvBIiSRmCMLnzephQinDggvMiCoP5xFQYSmMvRS8MjVOBhcpTqvEgECIN31ixE6JbWpgE9jQmglYcsR4OEwgqqbuHAIj/uibifUEQulzYfavRIhH4AN3I6akv8/ifPL2GRtRnMCMLbkn5pG61jdlbzom0HDRElya5wCL1jREuCbd6mLfEsTx9bMVrG61jdaxJLetY3WsbrWN1rHeccLg4QbrWN1rG61jdaxutY3WsbyYxuxQwRL1CnTpw0RJcm75ptDWfUEPqYt61k2TDLetmK1jdaxyH07f5vPTJLTlax1+4Y3WsbrWN1rG612nTJMGDbNxPqCH48v0JgluuDbL06cNETLzDRldn03bJrWOPOrNvZL1rG61jdaxutY5A6A5utY3Wsb1abgzMtzXBtl8e8nRElya1jjyO3gNsvUgGLJg59X3d0JjeG4NaGUP6faWSkWKnSN2bCl4/59Vklvi63zaxutY3XN50Zgfya2YrWTdiwAoW86Seb/nbIfAL41aHxmybWtoDnrAeZ2ZDTMqjFqHFwSSka2PrWN4l2D/k6Ik8cyhsL09y+oYk16HPHu0WFL7lbQsGNd3PYS05HuxhrpywPcNqAZwsqSxutY3WqTIgka6zNaMMFqWyUedUCbw7Z287lfsE1zPdVrpTpya29Ojce1WmJcDOF9SdWWNcMpdcvxSM5KTXPyDwBWjDbkKIGGqZlBbgya/TGGAYRe7k2izOGM5j0NGhYAN9IqNux/k/RS0qwwsUXWu00RJcjVxkLDnTT6YN7/1qyYZx0JtvLS4Rc3jBwb/yLASwCpzxexsKYc++c5SVPibkvXq7JQ2LZY3SYQZut4Mp9QVZltZdV1na9axutY57JgOl1oth9ZqJXBUofxLCO4WVDdICOwC0DH5rm86FyravK3Rh05vwsEFl31zR97b7wGlGz3tyeaECGpR0h08/4VjWKzkRF1Dh/V2oCQ83XBtl6dOGzQi7/RQTvIaKt35iX4vMKBafHXRmFHxAahT7De7uoJBX53UslgmOBtpDdF3zDRElVqQ2z4BMNnxXk2tn9ju8/xLcB/yerNLG61jda2DiVfen+UBr+UX6iv/3MOIC0RJcmub8AxNaxutY2IdZVBMmXEquHXnIDbL06cNEd38nREmGAO0TBxPpcR/qHgh5S9P3vOUDzxxUFOLNjzNt5f2YrWN1rG69tzXx9KDuPLug69fuR/kaLmifIWNxmBAyXwRJjyQpglTkMON4NsrhPFeEV/NzbNkI1Lczv/4npw0RJcmvbc16mhCXQ1bcS8Rj5DV6waCGy/qSFhXy4kj67Iiclrgu7B1ayxg3aXimic/vxWE+qdAEogcROv4fANkfEWaVVJY3WsthXJb1t/xgKF6+xfJSZu+SWdYnxvt6rTk0o868xh987ArXJGUbFy+7XGu6lwn5Grnd2wFH3RLRKG+8Oje1F3IbRI3ctzK0NdrwCWzx3WygtypgrVU69Oqgh9QSyDcYCbSjUhELeBShgaltmihaVgHgbzzNLFw7f3xvsbuXbDuTK6E7JbgTZTsAjxboURGi2jXYjo+w3swXbO9PaAaLpMvTpw0USYkTVB32eYIVXOhi/90DJSUurdRYAY8FLiPUDFJWD/9OMiiVJiqUmw2KU41KMQMMedTdoU8HFcOSzM51X/I2Xc2LiolaPs1J+y8+bkzfjdfT3qnnIG2udZOZenThooDazq4rNzWePgWohg70oDLQPGOvbYJCa/+mD/8aS////nSiK+J3MLP7TnbLYziNHViqOOVu2EPsTgMDrA+MjGisNIYJHzfII4BDuxMTKlfcTr9RJRzSSyJPphL9DYNsvUzlNzqgVfboWXHXeZb8+KVpblCAPao6luvbn1UWUN8tGbVB+rXYnidcK3O9dbkf9h1HmML6DLqHDJK9lFI3LQIDrH+cqBqEQwdgkTbh0SGgwZHhii60uq277zOlraYLGvS0761jdCCCvGrHnTb+sCLTbk7n/yzJwv/oSmRs/AIshkpZq0/dQ+ziJOV+/SOCyLgl2h6/CnHDOIs02BtKG53ufAV1vHi7R3sQUCg/5OiI9vK1NYZ/IL9TS33l3C+5p4f48aYxO49+upf4cPFfktVsqpL9C7yNjsV6nC7agGvTfwgHuUKf0nWT3xkljdsLvm2J6GNM76zwUTSo1INsv4Z5Oi6uK9gWs5SxH+Zl9zkQdaTcwrVp/830O3nkmQozmXvvp5vW0WxBYQ+Or1um7oCD6zOFarp9tpyFBD6hzu66N/DxsIPa8vk0v8iaTCQ+oIfUZjvQ86l/B4xS7qEg1mAKeGzwknO/yc6YWsG44BUwwWiiNO7Wy3P9/XrHCDGSVNolsPFf62oIqnxCizburnmx3+TyTuSjN4JR6uCarZOiJLkgaLW4Vxq00eYEzCHOc0YC+1AeIHUsPKTAzWc/Vojv0d32yg353yF1z4wCDhxsgMDGHXCo9K3OKJQ8TA6co6oflnXcmtYju8gA+8sjCcCOcw3WSqjtsgVZu86qPvKs31YfomfR0YjL0rpB/849aX0mZ7lfEDtsIy+biIEqDb7iACCMFA/XXtMCrd6Jtim0wuHICJcvCIn57lEPqAwuAoFBtlBEXfuumBaeisyGjTKOxYReRDMdPQftryg9/IlLBhBD1taiKfH507B0taMt9vgGTyoQV7k/hysrvpprihNYX1tLQ+gNdGf5TilIfvmZLV2kQ0T9HqdNrZwv5sUiv31c6KM9No4ldhXrL9SKBdW6fqoCNbfUry4J4j+OLzxf8i8mNdccgv+oxxpCBRd3UjXaahsnUQUFew9YQz08pvrPDk+z/HfxMLFt77+mxJj5GitTvj/tmoR6G7p7AlFF01rG61jrKC90p+hpjNftWJPpN/RlPpCStyxX3s6c/6mWzAQpfmrgjcpGe/M0beZDmUGvZxv8v0vSf//9Ha//hZ6f+cbLhlkxoYq0dH4N23bciDr35q+x0p/xu5qFK+hGdSbPqCH1BL3Gr/maDr6OTrY9HUMhVgrI3LoBj9jIODaRUZjW2AQvEaM3YuYhYvF73oAYJLyJF70oBx6PKgEXxZvv2dS9bjGQfwANc5udih4dIRS6ppiSMuHIMiu9SNK2zP+/qe05mk1z6QG5bbKOd3NcvDWrHtDY9TTfkX11CcYStivcrKNEyd/mmDz5CLejg7zD7uGyc5ZeEAy5+tGx9efJfrPemfheJYmeZuJZB3RskbPN8TP4cI/UNg4NcPM9+O4ykwxqCfSmNo6DIFixBP7+wXDs3e1KnBr/FJCmGikaLCTbdTNxbb54QV1ZYiAryZyIkAHWu3e8Be4lgtDsNYeft7+uHiMyeMMsaCUAodzf+YB6kzvcua1qGmd5yzwywOwe/J9x2v3ej9k3EaO3agLjD/RLyKHRLAd5MljRB9y7iBcTxlGTlWVDSFMUACvpZkSj1eItddk5uNAlEePpcoHqTa57cHgcpvQ2VYXSAetK+2mTe/ptpE6PpAAOeU6qGJdI+I0W6+nYcA8YWS4QgkdXWbmqZGkCJk9lNBAz+enVihVmAAHUKg5BrS7NsgVY3XDtzqdGbkHmJlrJPLRAdQKgx4KcnNHzbr5S7Jcons9VmlqlKvapHfWoL9m/rJ6vw+H13tUkZizAm3ctfHFZs4rw7ekh7hXJdvP10tRyRjsGvL3AqTivYF/XsVpTpz0s8OdVqJPcP6/srnChajn5zgKskqqOe3RxJ5xrcS530qgLmxVAiKt3ixGelMAuKAncL2BeYYiBhnVLdmk0d2yqhrfOuF0bZPckSziONbDImTd3TVcTgRJVJMi/cnF31N1gtC8mky+hhSl1YH5CAlNUDTe9huN3UQv0IiCzmlrWNGadIyBV07KqXipFY3kdkyk+KELocfl1bnavhkomUso8L3wk2AO4Hs8EzrIQCXcOWodEelMz4jQRuRUWwmDWcedFLFnGbOkM7vvI/9yiSOo50ii8LF/HGs8G67xU+VM7s8np4Mm2BGAfn7rL06cNESipuA5fOFpQT/IEbDAP0Is+JVU9tWcp9J9fjnj8lbDic3PdyKt7YnbEmbEu6SJrQiEBwns+SaqvGjKjCYrdxs+XhoGkMCpu32NoYLhsSIIfTMn2kyeFoFkxVxgVBGQ9DcNUgE+ezbMEyetOAVvG4UZ10vcy518V3llIoc1q5CyOOl/d2vT+puypWxVgR+cavbJwk0YQQvHE0W3sZhbjUhzyqwto1K+jAa04+48F2Ai4/bSzf1gUrT1V+73z2FxRX7qQfhnZFfZQBK9dJr06cnq4AjOslzjih/mzHeA5NP5COe2RpWr4VDY3tr/U3AciTDMK5QrgKQg3Wsm4PpyaTXp04aIjax44DhUd3q7bMvCwX7gbhTtC9KirtTU5z5bAS49tNpsnhDLphazoJx6TLxpanx/1btWH9hcrtXjrO4E/8HR9c8McwtatLM0qATFyAIzUDeR5rtvCxq5/7FGqXS0huB/WNde4OZ73VMQEwL3QpAE1/i+YaIkuTWscCRREcaAaeZGN3TCii4My1U+UpSgfjVyV17Or96TZvJ/0LMxJ/4qxMH31KxKS0Poux/mxmKpRRtUm1CCIqOrB6/NPmXi3zQ/g5deqrFHPp9Byefpq292eW4Iksc0ND/k6IlMLrccv81rLe+fnwwIhAiDbm4IvETYMmN1rG61jdayCv1BD6gh9QQ+oIfUEPqCH1BD6gh9iI3npw0iLV+hprrWN0D46ll6dOGiJLk2fkFfqCH3d0RJcmtY3WsbrWN1rG61jdaxutSgAP7537UwX+xm2czs4gAEolvB2Dlmfd35VABClVW+fEDmQbjGBaBa04aGb+/iU66Hl/XYRGMBc9ZX/3AAAA18Yc/GLlte9Zxgsb2lE2m5nLdF2gQAAADGPgJjMrX5RK2+taM/4BF7oEi8TLPvtc8wCMvaE/nFFZk7mlUViCICAHZuaT/5P5Qd2K4T+kG5y7mK3Ob5JSIe4hByzL/iFoN/7JfwAAYgj7ZPKSbG4vUI0lvl4CUv0M3QCkzUdY274WxpN1veUTRwodwfajDmesK9RRoN84MR/D72CBgJgF3r8Yi2mFV9Mz46p4Q1kONUo4ENfM8E59/1Y3VCInwNb3BYBuq0fpw2rcZKR4I919yYHTkSk0srLqQACtqZIGalmRbq+yHUV+E4g73HnqQ/UEkhUYCylJ2QlqqJiqnLUCTMZXWvAWMZ5EgHPyQyKDvVTiAohAAXqRjrwXlygAOEdr2lP6WbTXPjXKA0mhPZWEpIWc0fU1xc8zLmxxhKF9QUH0v86/fIA+wWB7njevU/KZjIaHyHa1qz/ehFjC0qHGeB4tdRA2ZaD0Dg+6+mDRIkWkUf43ScCMIi+R5PEy7Dnz4HdX5BMnaxqZQgO/Sntkrn/K8T9iOpaN+Fzzvd5BAAjdKFynE0Com6dgoTb6/EiLECHg/C0afZt/s+o92nOkh9uB9UvdpToWYNfc9ub58KyO8qt0N6ZWtkRphsf6uzSc2y/8dVzSEG1NY2HDIQrAihtZuJaRZH2iQnk8/iv49u++yWxrwJI0HEtmZwVEbnhFViqhxDMkvz55l/gID+Xo9xVjEJSPxoOdyEOVuQd96W/KrH/6q9StOyn3NI+seA9PLiO8cA4rK9Kv/QZ4nchOteQ3lij/+KR7eru/sTuS3pR959VZWgC+SnMWflP2butAm2AdiB5P9PF2vPSyd++//Y9cFOLYCmXv0Y2kj7O6CpXTSD7gOtx6rMfWQuyOW1vci9tg7IK0BVsIvGJxsXH2aNbbgCnJeejPT3BrAepRdcx3b45n5lDrhey5KHZjlBBWfu1nC2/Ne6C/Pebsj63TiUvfsz6/cIRZilcpFJW5YdnXNoB+ZglfF+bGpYrBPUISDN+wa7+5B7+vtBvA38M+iNNhDRXyk5avYt/zcS75Kl7pqRAuvvG5kAVR3M3WFJ+yOnEvJxMNQqSxDGo1zQUkwR2jjKel5RAF9lodhUICQLU6YQF+1Ru/0n9jSa7ekkewke09XCWRIqg7xVhPkvbC6ZMdZxsmyXzvyvvq8Bd/yQs8lCMm1RcBGi1/qenkiFnVWvE1qCkw5EJvFH4A82jcmGtgZp+ZUhVFIlt+kVAKnMdHLJLpn1i9evurlJ+L714nReIbGJqIi1/Hgi2nWQR/V9ZgGKMr/rgrb3J/AKTfGDVsC1xICUpfvymDprUu/Djsq/7JCRsxHHLlCapsz3woULxkS5QUkWlPU8UzRr6OvktV+GhTwcKDZ5SFefT/a2vMA0Xn0R1DC2E9fLfL9UwUKXwGWkZyqG8lg4KBweO/E9ndkHTWpYCJnVdDL1ZtEuNyniDpG2ajQOSvpBiUJL4daOsPE4GfNIsL6RSWJ9O2uGTdY7umDRsN7fNJyB8H1ts4QRbMnC0GCNoINePVveT6zqbheo5vU3bJrbHzt8oiLDkCM1huqzAxTmfxjKFUCIkYFZAmAS+dNb3rTRrnPxBAehDBnGJ5vosGXI6WkygLxonxhyfufPaYg6UlhK2n4LUkRxCxlBykahwnLai4GLM7WsZzWVgwYark6llK8W60tl7YzNYQI9ksIRZ232SoRJ9piU/25Jku8y+DDWPcd9pTVB3Zvx5TEaGz6OYXM4mrShxn0aTls+sD7UUoSnpoY/RVtRAQDRPiaozy+hzC00JX7DSW/zc0lt5vgJJgqrHHqSA+xqc2OPCwgdpT+BED58p/ekzt/FAZKaiAxRrVyFIAeir/AJv2Qw/kX+CrGXer6lKldB1SxjZwhkDMIhomfxmYm0ki8JA25y3MO+bKyeCNRAEPLeJxMKLlk2J2VtMOQ6QqFQ+S5DlkJMxLK08KmyYnAe163Jsrrr1mrU8rwOTqdZ74taEMCRsBV+lTJWs++Zt+VgGgo77DiPtDqNIFeX75B9dsmSbHQZuvSt0a5ZwIfTtHCL3zDACKpLdXtiaByPMHKQFaeIrHBdFBCTlbbsihnyeITCTNws8FnDr8Y2hp6G8Tv6fJMu6I3D3rSK/NtaSGelShHCSAY2ZCKx7SGcEWTSFR4J0LsSmWam8bv72764KCv3T7RRsSZSoqw/V4XHnt0WCCvT8ku7HnEGJ+lS/F2n/RjwdmcL3fx29rED9MPwHzyV4VNZ3pJCn2PRZ4Z3ZxwFjCqz7CBSMJ3WHkj+6C5xyASvc7ACgTKq0WG54AtGPgScXCxamY0oqDjMHcuX39PVfqvkUqROLJfSfnNCVj/Zi8YnPmnLAk+YXecP5i10WvekYZvehUAsqRnSPrde8ZfGZcS0D//RlracDnc6tgv+hjKhImgh5ls9wmbtB6xJo+vPZuGokaQc732yiNn+W7IGJvBDUA6935XPvwrCVGqf9VO4Q6APg9pU560QP3qh6yGvlOuH797CXuWnVNbbTL8ii9GG5mHLwX2ILNHprSeqKEcLGDr/59/4UCszhhNQE+QQsnkh+GXZ7W8OnJZkMCAxcIX5UwTwrpjdRaxHQENsS1Fwrr8NdAfuYrjDyqw0N5+BB9/pl9egm1136PDfgV04CLSoMs6OaPGpHhSOAalsUQgvScEKn8uopBoDSDGL3xPdESGWk+ROJf2sQvrHLaoZaNtvmKn9Ud/x9egNppJzPV4B8gc0yBQwcw0WncKQqvqCd0WwXbI6+WUgbos5Ouk3cjk7xEo1MODGWLkl31zHop8zVSHW4o8RGVxJ9Z6NYYD32QBGHxgwoRJKrlwiambBx/RSBgDc2V67CBixci462dv+sWKs4C/8MAgrlxO6EZTTj9VU2OmiQlAmEElIN2RkD41axkAycCBgsn6wAIpyNj06gA8YC7RYKSAAAKVSlH4GAI545+FWIDhwEWIcFCOCfzZ73KuZTrzVdGBgF/HLe3zqhD7PHGqC3Wztqsak/3MEo6vCeTOQV2xL9OgtuBtE8d0XT8WFTsxlPOOOFzXv1pKmVrhGYbQkQd+GT2W1nOFQZzuGHn9gIZMkshkZ1EmKC73hiySS1QCmy+Aa0/LvLp7nYueypqy1r0wuo/Fa32S0NFUhsXm+D0eBwg/NAea9Ys56BaDP4Sb1AhYZ90wdkH10/ebeqhBzuzILKY4kL5u3wxHj6rZvq4mVH4rW+yT3QwiJuFWA8rg6dWp4rA8IAAALhxVV3BUsc7B4DHRBFtI1Mkdtml8TlDyWkJt2iLj+pHV6gTHL01jPJAD4MyKXAxhNIBy+M7mHKP8eWlM99MCnPrSPoIEdts/VYbE8vTuoU+3q5qK6fp9hqIfyaqKLfkRaG9CJv+P1vecOmBoe3hetZ7bp+D1X0Q2/qHiaVyH2OhpsZbMmgnj6WJRJZ6NlUtHLhV6/cWO+hEpOgJ1RPg2eM9Wwdm3AUrKzrEhPw3x8pmmpv9187623GONpBTydvd3JVvxY4KQk3whnZR5EBiMo0rKEZPl5kXoYTE3iSrq2DRG5FfBmTUCb1nZRpv2bg7s+Fc1uC9qQ2i2DFv6/p4PyAHEyHR//XOMT36ygfmX2eFgSL8sw8bbiUjr8BrmbHYRWBTyMgNR6aAMguIjravhbJUDkZS05o2sAFwNI8ALrKXY83Ef8k2p4o34Sg9XnQct5LX3Ltsv3OeFkjPhORbCTooaK4KuiDWCYiEm4DGlK5cBFHBNl9gwQSge1BfgfRtZqcXSZvSBRMcWdYOOQPPkT9vnJCWF6tAY8GWEtlQHpDwh/OUOxT5hgkyM4YM2espDTsU+mKL/7uYbY68t55bdy/4ELcoRoiv7izgPpzdJ4zB7sDobalftHO/ZPwfYAQb0vRuD4CPRhnEU8gGE4fF4a8KKdByJMK1vGxEV4dg5Ynu9705KM87o5Zu8WDMDrUVbUoGadrbyztl0dwtfRK5M+l85AVyMVf/fWIgP8YZJZQdydnIeX/ypSo5k1sv86nWRGJZF7wwSwOPtfEq+RyPBUx1r6tJDz8vpfW/gR7vhoHWTZwd6aByoOMtJPe5huZUX9gFCj56BsUDi5z2CZZoeytdO9lSJqLVnTnnHvERGxWEKlNEGICND3m2XNrG0Hi7eZQKxOydVi5VdQMp1zHzk6yluzQ/NwIy/verm/ehB0tVjwB4V6TOhu+tC2XQAH1AFeof/CQGp2KKx5+svQ3z/soE8Rv55M9QK1YNWWCtCv10xMQmqheTe17HiT8RUSc0t6cQts+90iRrS1hDAUQEMoMkBLatKcQ1+tdm+mOKm/bB51mrmG5ZY8jPUYQrXoCS/GL5JDwmLCnFmIMtmPzNbysLlnJr5wMO4XwlCHLndIYOUoW1Kt0zbia9+4OPz4WxpY/BVhfvkraohC0z9Qz8TnryMDnbPwFcsTqqAWeddMlLBF1fss8Q/VnzosoEY6iTzHpvAohzfXG5LcC99BI90v4zobIU0KzzUSo92DB/WOlJZbXwuBxOGC+zEc+NxJZVb00J0BmtIcL/+bkyzHcg48XqKRc4KorJvBVf7i8c7ucw+iJmwBm/9dltSlOSyzVewE2R+z8VMXJYhbUKCaPtBfYVWIj/Na7bsC/Be77XE6PvOvw/htLwgSAtUlKbGx6d1AnMjIQtJ4ndZbQJnLvy404DRjBfITgh/v1zNm6BEBffmNMtD+v1+k1EVn9OX3CVVjVtFv9EeoLSY5LmVXUuScGOWbkuaf8dxzwcGYBB+5aIAXuj4hO0lcE/S0j49Lzc0HNqYpfWWGWXGXKskaNiSPCV6+G87n+KxllYQ0dElhqiDPzkbFfXfORX8kZbUmEBYqKbNRr78p7dEry9Su1OMsLm58YkAlTC3R9RGGLupvriR9Ze4CIFIi/wk1Zhg4wm2hbyckVmFO/AwWf8k2Ca9exfKuVG+SheSfNO/5wR95VBROVgZernWuiG4OLlJvR/m+40lk9+Kumyi73qhJYFqs1pt1jjX3lPaXGo4+KNVhtuksY7U3UFpzGAno5U/SBa9Gro0gop9n+ZMYeeDHWQCtvXNX7ISgf6T3cHmgaCfCZEo2j44D/z6kPPGalzkj2N7O8XeHk5Ep/3ecm3cZpUHGD8xNShM4x2emC5WgA87NyS+cC2OPJwhA0LFIenx7/leADVq+GcBm5X9ZWGqJHSh0Bt1Io/MN9aoxJchlcKnusNfbBGtxbNCkfWLvPjEQAeirllY0OeZSgb0GIKqgJAAQCOhMNP+Jn+gv34VHc4yOp8S0VIk6TrmEiCRIRHoJ+TZaXT390mVU+RoXCxdi18um+w6kYYVw0HjGgYJXmsINkFhaZBZaAhm/VJT8Sg00fMzvRpldQFeujoOnT9RjUGj8X8DpSleZhMws0DwW/kaXRzEIfrdpcp/0qchpwEWzISqXpKkk6ycFlOFLRYKjR82coaiUENKfpTegQEwUYDB2KtUwBiMTsxUf1DDvdfoxPeblPKpmqmM19pwh+znU6OE4QiqF+t9tuIFYeiUIS6DXNeyKesa5z6lZLywwzAnIU4gEHN3oG2zNU4X2gLos/TdTMVTzfdKqHFJFwDSACTfbybZ2OTV4ReprwEhsT1NxOEvOqqyXvLsoPLZNit2bWc2ipB+3goXg+ssUTxZg2VSjAU07lFkc+o0vh0+OuFDR4orUogdW4pYEZOjYtCcMxFoBR4T+KFzrkrf6tbk44oO+pMyNcfpe1d/AXbK3ZpCK/+zMl0AATwtUiAQ4v/298ipWAK7InmBNM4EANArKCLh5QAEjhWOwzHn3j0AfJYoYAiru43EA3sTH+Shxmt/80SFJNCqIjbm0gkA55PV+ccWy0k2c0QZTyrQznDa3yRFyXfnyLAM/DbI8MAk15WyD8j8G5aZC6xKGRQA8CHp5M8bnkVQHVnaNERF4NTRfjksakkt58s0n+ZSDbbV271H5A/5CUxVEoZPxDFwcRWRntZAAACo4jB4+sAztHUuHsxtui0xC/7AV97PD8afQ/OHsAACq4JdIChJj54rEUCmZW9FD5gA4xIZDziG4AARGTLvp+ck1Dr9EH0Z6HpTnJL7YjGvnrTs1gADEtFk4oi7JZAysfvpv/5iMYnhKQ3qSyuzfV5QdAMVYRnFBlBxWjKRFYoGSkLOsGspeB69YRkezt9x1259CUxG2F3bpENbfE9hVAnvW/wywLsElcAglk2F4BCp1Nov2lLgTHTyzmi8SAm9+L440okCTBPJTFAj6l2IaRt/TrM7eJ3fOn38M9ll6C1H1YQTB/HU7FUCezN8UdHwDo++T/ZKYemyhF1ugl65xZeatwncnG9TVEHsmIKCcCCamuWV1BheiMbfjikwSsQMdrPgjdWcahj/KlyWOCunFoj744d192LMbUraDiX+LGIAaBNyVl8SdaxtC9TWlVh2pxZ7ALr496BAgbcA7j+cbq667zzIrnV6alSwilNgjp08xcxdWUAhym9q0bCaZYvoWnxkXxHtZCWO05Y2rlMTZvnnASa+/PCVNZYaSBlBYAgyeftzZ9I7zWLr8xwwbNNFka/mCYuDbcnsIYwz/StPhBmhUVCGfYSrQ+d/KmSJisodWVma/3CRSRPzRKUlaoadAMoMpbf7eeBpnECJlJ73p21XkiIg8qRsJV740DO9y1izQvUbuAvQt8Y4mL5GEh6JFKM8CBKyrpZCBEUfNNssINsDXA/MkfNQsJVjigG5bkfcnEPDqBUX9+ah03MXtL7D4ursnQ7gFBcb+BBzmgv+LMl9V65Gpp3P3LUMs+cxpIbFRkUUYfOkppZ37+VSJR/n8zNViSa5E1F3jpU0emcAa/Z/wVFVKiZmzLtrXXkNNBba1chydGnnOYGgvpjkHtdAy30Pb5diykTwsmllwQbUjBpXN2QXFaiC72d0PrUv17gobDs7v96Q5KyIusoywx8SFsyXrtpwb+DLkNiGWV/0vKEHh9gq2nraKAUD9o2fas73oIgz69H4G5Zq4xP8/edDPX4bOzy6IoWg+o7N2SnALMNEvOGNNuKO8DHhK8aFaJRfPCRNZ2L66w9nTE/bT8HLl6SbkKvSYSbz6UYKszV9lACO8420yQY2Igv2w9T5NIONOibiW2Xjg09ENGLOcKLDG3lhmRq8RhgwMV7jfp2Zxb/GU9yF6Wak73draqeO95o9wg4Jt87nWhQt4/5MPOQpmyYlZo42yldRv5uxdqW3jX66Srz+7XkXJpxZy/Mf897EXGdavV5OagKQp+gCyYTY20BUuA/+hukBblmocKQo0lSQ1S61WXwTogvvjNJ1xfhn2BW6BHtWMzfN+ZfYzr9pu4yjGctaK4nx2ZgWWxZ66fynhFgaCCHjOZDqeaIm9acI1Gcp6tvvQ7+gi62YLwpQrfgU0h0L6EHzQKDCs2I+crwSfU3i9OvRzB4tvxXXzl8VO/o1rnPTkQgQi6DScsdwITZf3JUeF+40vxdKoFd4O41k3amz2wbdtvZNn+dnI+JrqiM8NCUfTPZ0boJAgrXb4YhHru4J4e3KEIbbMIgjW+hgDpYU7o39WN0RGXknqasWdEtoj+qvomLVtgZWehIyv2kEv74n6L6VYUTdEJz2UcaIdxowfwwOtNstCSPc3e2UIvE9oqisC5zRtECA7qAa8cFTky/EmuMNc6A1/CZM+WXLcqKxHlleklLYK607zW4x6ZtkJ2rUb3S6dkZ9M+RlGEP3WTqZ1VPVH5/4ZJU0TjlKNfGIkPtrJ+sJuOCyy2+8CiddGLHeh3wT7ERyeFgDkE1vBtNGOttEn98S3ffqFGfiZ0E7tD+IEOg6I8pAfTHtXJCNCtHvP11O6J12cmBNyULLbSYlz9fjSrPVetRram0M0FZ0yjxiIxWXd9YqpHlLNXQ0cnF29FilE3yUHqIpQh9tRTHTEB3SaDxn2AsXQIi4SmPqREPGeF2oKNrrC7MIMQW6xgPdmoi64KX8rNUZlnBNGt7BbGgmHy6aOZ7Nm86iEXnydwOB0pS3bhuMUaACqKA26celIZpCPIK3hC6TSE4lOvGKl9or6+vytdf/PMrg0aTfTbd6/n7za+n9frQvfsAAebDK5obTK1PZuxPN/8GAtK+qX2WJtCfr9uJp9qob2kpxnGabxEe6BO5uDSnd+9GXD3dFXGuHUFUyhq0YxdhVBkkX+KzEz1kqI3xpuaF0J6Nc9jEEcgAPo1ubhWthKkpGYxJCYtYM9X1/yFQoMEpenkUve7A+fEC9huef3VOQ5jZNB1qtfCr88xbvp9abYVvR/ECVi1rPdR6+TVYoTW01Vqw2uPBaOW0+DfO+cAXBygi+nReWV5FZJro7nRQ5EVVPUXtNHA+ZHyvxwkSc/YDj7P38kYC6IaObvdD1PO/O3FW2zSodDWZDIAQCt2TbSQ72S9zmFbEehmnmiCAltBAOk0AUxXiHU03gjjdEVnPi7PBqz7+llQ7HqPh71wdhORUu68BHFlRKB6pYKjeCWbYRPve+c6TvzPNK06FqVBoozW+NBoUo3ZSPe/1FL1L1xMf7meBYQ24hk2EW6/PAxYyn+9qXMO/Ug3+6uVTf78bq2kcc9ofdLToLbxje7HuSguVzRSYHQfKVuTNlKY3sMuGRI/zzqT2n72HhQW8fJrVB/P3/H9+W3qo/ZJ0jJhvuMD/tj+bHwP6SEdkcWB6CQBUN5yij3nS1B6kNS405pYY0TxO7SIpLB1jczMcAuP+j6/rNdtkTekGeG2xhRDO5G8tDesx5RfRipGwsdE58cPLHCNgM0HE785yOjZlfJvph9lMh1XOgzM9J+rdbiwXGnYuzCC7bVSd1q36AK6AvUkoeQG8IN8Omu/Yz0nlsGtQodxMlxIyFwrtAQMQWPy9+i8cJ7rY+BlW31JEBqfEYkv1jilAVWuDXrZn19586c0GuXuiIUgoNrGJsnkAInAZcbQdUHYoKraBMerPlzdFQBdsuZ/EgdFZX1wUjV+hLrk64hH7sbl7Odca9ZWOvBuI7mqaFGvDM5HDKB6rVx2O46JcFWdL3WjmCCFRoGiex2UXRUPehRzGkJFLYyeEH4/8h8k8E36AQuAaI2Widh4UpsLIAw2dbNIQNdW0vDv/Sn2bBZj8VN3PQgaUk0kZZAndiaJ2gk0eTsOCLCObma6xZz6o/ushMxvu6uLNEywA3pthBXGT6QplYTd8S/myFtMtcYKdwYMeJzMTOfBpQSgi01eS957fwlDhoI/TmsqUI1OTFUpGY2ii2tplvm5I/ibEKq1gcyMRxsWJpdR8P/aiMnFVfz1ORuWHDprlobCQrrV9YG5yzH7OIr5GbczoyN73fenjlhbl9/B7kkkOIYyEOjVfksySdUxsUdfodo6h8qJBvT2sLMFJtCLHo4znkZE2aW/e+3paoO3kxP4CMmcwFKLurJW5TWf+/1148l1yIbxNqJanyxOkGrlhR1SU0VaJ9cOyAZCcOqSDi9FaT8+aWEpMmERqytG/sa7j0n5cTIK2hk17SxL1iL0gw8JPJLoD30hiokFjQOhOV1ktn65eLe+F/4rM1ZrNbmSS3ORuEn5z/geypRuHXBFTR8TdRm4IGoDsK0XPlmB+NkcbmTN1HD2TOhYniCSePseMwl+VQER2GkdxIKmRhbnS1HftWxoejOd3pw8c1hemnvCTxKBTstmsRBD1uFq2k0j3TXnxUt0RMOgirZrkA46CNZoisDrvMKEAmJXhDcPqv75Jd9dXY4vyJIDxBhOkiE8ST1tT7u+plKaUYNW2u/IemZAzMBdj8QJbODMlMKnxhUHY67Z5cQuEBSMN+H5jJIc9BAUTmjf0ERMWvlyJtr/77rsGtZhZDVa28nfkQgT59vgz+b4FoCgriW4/8BlKAIuGYynF4+wDCZe2pnkTmbAeUbL1/m5SPqsJnhjpQEAKkoiolFE7AYqz9cK8W0HgdBfxpoLyTaRPOkuGYgV517IsNVYZ6j3nOEgTjUQKnY7tsaYKnkMpGP+KeULjHfclY4gTuGAiUN+h0NWyO67zVJjm/xb0DLAgTmPfDuWV0y3smeHNNxW0rbCD/Ta0pwiiU+06cVOFocAbDOu8F51C4ui5pVItvjPxPtYKGQ9TtSAqYiz9+IxlMjf8JJhVHG3AM0bdAhyhP7hU9NaCFV0Lj5PWim5sgYjEtMvAYTBciqANVauqpIB1x/0oSVIyFes/kcBeuxyhzIdx1OZs3y5pyGIvg5w6/kAm0XbWCIyYzaPSNaKgmKgtduq7WdQsACZjYrLq8SC9APw7foU4iPOVrW+akSSiHCSGclVAVfCYU+pnNnyR8N5ebAuf5atOp3VQCNZPV5WaQ1GPexNgkaS32cHnOL7PZZTaSLw0iZQwmw9mlbOuzvxKEKJ10gteEumIKw1jYDgCpG+cqVeriixBI3xlAXBLb1j1p6QGuPdnN162WA+oCEaTHG2gBDuSxkzMS35hy3Pv/rh1CuX1GKQB4I8rSyMbTCEZnnrZT73bJ0gLdMihrxWZgtqd4JSIlMCfby5OaHCCXOVevYTN41zCsPZoYq0W0h1CQdy8ZEtREDyYP5Xc65pKyBeg8HClv3wWzkL68AYyN0INVqWLsCQKvPGrHDg6OYkyEHJdSvhgJ73T7lC0MAwCRPyLa3DKdOWr4iZVGUN5fkUphI6viFY6oZaSk02vlv5OeJt0ovMe3jp1Svlh7N78SLmLKZoDGGqHDFQy4zQbtgMUj7LuB7ewIp3/RqmQfieR0Ns8TQyHvy2Vzxd4oclCnXu0fSRYzlfehg6RenKbEqFy+MFYlMb5fnr56axp7IghYVY2WndTgXjtWZOC3DET7WfI4efkcHukJax4s299gSpgnpdKc0LioFx7FiL3RDzgiflgD3MdArmF59qZrAJP/jxu3rIncsmionL2isaGjHdErasGrDz5O2nY/omTnSikGh0iUNTyqJBdChUS5jQNXAF7g0V3Rf7C1tYn11ZAIknr12LNpBWxPzXp8Pjd4oFGYnUAl8Y82pKt6dQGFL+PZy8HSpCsTrU6wM1EBQEgCsny4YQ/7FtOwZ1NkutASeZvNmb6EFenoSlbiOPUhwO8kw3WgO+mK4QSxMRt9Tx9hbEDw4iKVwzS4vzpUxhVnoOkdCKqKf2/HfoFtsMwrGLAqcuQ4jMxnM6rdixbOV7vINM79wNik8qLbanHVg4PjXxYkJBuMxTgiY9/aQUrGGc0IHEA/7GiaHn27a4IR/qDCuHtU9qbMQ0Eh+sh2aXaA9qWfCx6Hbrx2OvkgYlTSseG7DFPu8rvBHzMURhQ4l3oTupUv9ec6twQA5NECD+HgJ+x4GCtIVZIgYnD3WRdN8T8IURVwtWukhj7Xp+m4okAOBy337HVbatnHFq4j6mKPg06iAPRBR/JHDbU1pprQcdnuD24B/cnawlAXAQjsDCME2XicKLS8Am03WufSTvcwTSxGXXCbDJkoJhI8gcs2pHtEjykIW+fC9nswFGMHtDn05enwehOagKEVIVYP1tPxLd5mmgAWiRSwgIz80Awvl1HdVrafaYJyANOsOQTCn5vH9TfTMdRcYL1KY9cmtt+D2wLaHXIS2Pbm0NNDgEGwElGC0JS/Kyc8SUD4sZav/mMhGfEwWB0E7BS6RErnWyeDQ4vsecl28fuZsgzPvKVTOuz3CBpzkBUOCijdQ3H41YILjC9xCc8qM3y2EO4HdiatU5YxFqBTWD+zRu66qYsK/2bZL1eR7fkVvW/k5wn0QlJBWHjAXqtepBsp959feNq7UmGBKVxVjBtPspAhsv0vgUD94yi4+iykDkGSCtFG8nm/V71JWK4zRu4alw3sWQRgpNRFNUAYK8cjakHOTtnEgfXjB54nGOu4pAINs9dhRLwFhyJacG1deXWlWhWva+fttjfxDy20YgIT2Z0G/2bp22Hkq9HsmnpmAIMqRIzVZyXciiz8bc+slf7LnDEPY3MY6GPSi/ZqBNXwcBZFO6vMinnEOjVo9+HrvfDKOf+P6ak/0lwthtaMPgbGvYtLiE1sdVPz1fwsfFnGPxnBo8I54MPurG/8HtMEu2Fi/ror/CFEA8PGLcCL5wokZqa0nHCRV0yMhcVAdqZr8oWWXOjzwtQrHxnwuAGACXPLeWeLJ0o4gD7ENcOhg6JQjXAHWJmo9d880yCHKZz3k93l9dbOYMiv8daUt7E0AQbNRd17wb7dUbJlL5ZibXc3U231NOApLWCWaLUZvleb06WWrB/oWZkHygSQKs4s30bWudvBSaZ/kCRHC3djaMSlVQMJISaAtaCMjWAvicf+Tg9B9cR1cUHrSQaptDTpt6tpEAhLsfZNo4rO+HyAWbl3teeQmqbgFw/gSyegX4cPvbpODKJSAnXSKmffJ8DZc4teW3MqH9FwjDCFY7PWn/LvyDBVIG3NvQMlMlZ9PurcuC2pnZo4pgeEvFgCIWPxjCBiJRwO/hLX8ncmkhQnFqrFPoU0AUEzpoNO8T2KMiKuGtvhrRhTGh6gNsi9vgCpWvik57XXiyHkG/7t76eO3f0Vk2+LRzli7CUXW8TypuPhKTyBIRSqFwRo2ZKo7ABPi8IDJUbvgqGbYkoYjU1/oOSqETce7MTtM6AE6Nsmh4KY2Kxssi9i8P5WWmeKT5qziv4oXCiCz/LZhIJ/KnMXVsqq8Vbv8Pd7BjDWQQyibXZ5QNcC6w0fDhYyKLLLMTtFzPBo5dyWULL3wIW1ZGnQo+rE/aExciNvwCECACCcK4ap4UNkFZuXxcVnHv/Jhfhppy/eJZMMcGcSa9vWNiCShIRyEIebcfgbWH9+Wn7Ge1bZTR8kMNIz/fo8G70eSc3B1KP3CrRYt6rUiRVs/zYA+lk2pN/LZEJ6ihlJkHuRMJlghw4G0hR/Y9gdGuLSNnOmxYRRp9V2TdPBRYVAh4cRPuiBQflr+QFB+YSuf+f+VbawXfxkxmN7ftaamfhMhYWQFX12ByecMoBCKHKSrlHwZ2p9r1G6P5zwdYFNjlThoNdXlnA9rxuVvCrsWhOwB+HezGJC3xAoSbAUIuZqaohlzzdZwUJuv29+lFeaqzH7+WxCGzr3MMNgJrzmBRtSdncmjkCFUEoNLb/VWv1WazX1gbCOuqwp43qhEX2otKEiF10xBiqUaRFO2ltwFa1MIMFv3DLkJv2yRv/h+mcrWrSbl+NWmGICzaaGAglgoZILeQR9O2cBa5yF/E0e+vvzmWwden5+JCabVza80SD+9uu5fQhB4ckD8ssxIGhzm146Pcww03Z2HMLxjx3kXneIUpG3kgGjvlbRFnNGj0WAySPMuN0RBLdCuKFlDw4YaWDy7/SwbIysOAA5yFqwi1JVnhYle2AF/zzKe0/rP0VePshTY1/n8UTM2Mijz2tx4WWLzUDWVAx41xokpK2ZioWgi6lPyrNohqcGEk6YfhT4I9sc+qmRElQgq0q1aQRONbEsWKTHf7VB64iY64dssxMNzO16DhTtNlentWpWZheeh86klgi44TdLKYHxrgmTCO2oEhuH+R8Gnn1wqRAIX1E+SF+QP4Mh/63XYGiG6gmakMFILEIv2Xa7vbpb28Ni++KDbjgVHe2xNiKyvMTJm94WbL1PDidGWSTogT375ozPAXtfBjTAodHoirVViofGTUPE/3mI7SaCmc2X3CCC+SzzPO6TYVi1oI3GZHN7zNWFK4pQ3uGdnjPeR44GwSSGHx4K7fu5y3ltfS6tsDqe7U9jOVlu/VEk3dDkgcCT/bQVFfLDgUeLUEZXrPZNLCKoU2iEUKArHRccBu+r5y4BHn25GMipvDBY7W5AwqxVm3LzkE90YWf5yRaOT0j0LY6rt80BEuu0njkxnmftrAjKb8iBfupjZfQ/6mRVNHBmzriftvOUgl+RwqBytkY4nyBhHchi5VAfYJI3fKOtNQ3MgYNF77flyEm7Ddn5nZZADSZytCdVzNhEDqx7oarFu0MzxRM9rBSLqc09J1q270C9k21/3DSUGkZTbHlrNYFUYNehhIYpKSaI0OZ7R+c4ol9sy7En82dhzNDuDNkTflTgEMudc5Y9+9poDBjfCM71wREd6Ld8R3S/M1vLEGTTmlLnE7P5brP9qhASaN3ucl1GV1Eh4RESLJyzkmUNkMebpRgcbL239qCEjGgJoViL7LxcsUmy2rH+LrsJFAr1ysBJ6/deaiZUgeHtgNgZ2j+Z1dXw6cl3EZ5l6yA/W7DowCX9cEosTMjowWQNTP+G/js9X2SVQ+UjlyDtKp9qq9G2tCV6djX53Tn+1Sq+Ks1reDIrOJu7YvWrSFZxMewQvkn0rmUqaXouBqDVI9RAWLou9ygNYPkbvqwYBjGpAT6AlV3XUSWi7fsrC8MTqB4G/cDlZVEQa7dLMlvoAJD5kpgj37gYlWOXbJcQ+s09B7STUmJWpSNunM3/ZKqHvdCGnZtc1pJ472HA+2cbi0uUtAabDXHWo42yV5dFLcTPztPjIB/2u2Uz7Fl1iFzGpZ0y1Grj1hUzrrudXW/xIGf/BdMstnfWN0OLdSBPJ71imhu5UY8CucwMeSvOpV4ZTvON+LCmaF5CstBp+iAtsmxn+p09fh1Rijrq4Wsql3J8/uKk/N5EV3uAFYmjCXrSez5cg1xYrR39paXYihZKhlBpNIxEpXmtEV7prOcupp125oTOgVBmFx8G9Ae05GPw+KpXz+KtNOsaCJTYusMHtVc36uvfBowyOsUZL9LhkEmKp0p72VDQ3NvFm7Muus5gON+JB/pLhnPtQkOWy7qiuNu0v3GW48H6P6138YUfy4b/TXjSsBvvcLHDG7Q1haUPEWsiIBIkofGkYATGNAHI/K+kH3S7KSXDfHcAblsmJRcoiBTKZHIe6eLcgAB4a+4D68vOBHy0iuFgu7KXTQdGOjZa1gpiPQPcfBKECCaHxVTzOJg+1vRZA44U56jY0IIn3xklEPwhF09rv/5rmHhbu0fc+SuinW1jMA78Kti/g4PK59Rex1WxPV+2isR/Ygy+jiWjX9eT2CfnzPK5QL36rE7nUhRXq0NdW2PfrSDnxl6SuTSI4YaOh4c+p2IuCMVrroZr6GHYfV+pz6Dc2reFjSJKpdQM5kVGrZJd/3o169JFKCYquokgn6bnvoo5NkrnZmUDsA+om/aBwklIep1xyi4Z4tpJigdnvQePXj9sVo08V+nuBUsYTrttFwRzWBzeCdIlAhU0gPiNBeDyd7pN4LvKYVihz2h1Y3ts00uoIBRNxvuTFL36Z3BBg+2dGM/8SFbGgLmzUsnUJ/PNq/fu8tlcsuECZHllCM9DAr1n/95N602nMKf4xlC6AADIO4J/D5mkdVrUJNL6D0r0zxzIQcSvDIVkWkk1BSPF9B9Y6KvDl4p8xfgiDg8d6U+jizkDznCThBvWpSFmO0MKsHleb9lb/tyRRll5Sp8PvUN9PLFB757ufWGUu7F/gBZhYxKcY+fVvoUnQsRbesnETjAXHOHm/JnRMgy6+OWpLpOy7aC0tBYrIAFJNTPvANXqefiK/sfZzScA0vz8XpYAQs0H1drUCMKDmO8gu2/b0pDQgXq12kIy2gajQBIxblI8yBqVb2A3aXKzx5P9gYJqnQ8b4XgBGQEQ24XUQh4oLtXqNZ7P+UUFQYRidfBeWKaZh8pXGnpFsJv7AdXx+QlKYpJta1hV/xWsJyHRNj3WsO/40x/ZgLGW6M1iER7mUijdmBP0RwOdrZqfRVXWci3HdWZ1dyACfrWSC3riZfYDNq6FVZlwLmMWPEubVeiZI9to5ko4T8I+GEyB4ntRiaYjjp2EjLc5ig8OPxc6RL8ehSBvnaE5eUXXc2Ia9ZDxvCZZ/54W6gnducBiWSsFKLpEVnT8fv8/PKZR5NkT38Qs+H1VRl6Lhx5c4nKZ+1xOCD3fMmi/t0P9JOuZepaT54bFA+CqVDu6AcqmphhTVzupVP3HeLC91jGVREj+ba7gsuh7HuIT9ra2vb6j6r9tohgljA4Qg61KECHJyz6A0WUWczRNoVDLywzo6Q06EG32qElcvv6Lwm1TeVr8Hscuvy4DP2Zlf107fpp7u9Tcb8uy59Xix/vic4vvHA+XVTMEQDMRj9omlxyYKOJHC0Fq3d3OU/ke0JsOHvd6pziCAgqffyEyVwaST1CondLyHHbSiqe6CejKnOp6A/adx5+mNONbDVlSTZTLVjF87clSNqDXQ0k0wLho2/x/6plCgdsL3UZi+PeZfOGtVFAnYamZRTHCp3F71Spq+HCkTitu0X21XioSH8+Za8SMiGNp+vBk9n3ZP13Uhh/uKl1M4irPHUkTd6PKFIqMexpBNf63gSqVIsL7BTOjyXrqwlrQfYrNiLuCT5gspNFeTuP1y4wskmhvIOkBR/o6jIWwB9bpNMrImt/0FSZY6nfpelxf0EU7YYL1IJ1oZiL2KqY0zcNSBeBWsDyyPcTfgIUBO+83RgL9ReZhkZWZfDgtgceYF+Lsjj+TSw4khNYjEotaHAiccoxNCFU6vFPqmXrzOJsmJNCud/pnIGCxwrai03P36QLzw4gr0bCjgVEYvXNd/DIIZCWqqtHM581q/7sKZrqjERdaeNxBac9RojFd0KIzP+bQgj/a1EAYqdBVdI5nlQxe2het3CQLrJI6gLtog9cRFaFgWb9Ab9kqRMBPOTvGdu54ZbSGWM0pSDFTSmUUy7f/MTYQqqoH8MKyfzAuPMVicQ3LaHjQGK4O1m5gkInyfnbIHHPH2scGklnJ92XsM5CY4vQDducoK9WS1RZ7sFkYjZk6rR9i5dA2+HRbYEOMRPlDjVhCyYBJzrZsd6DSsl0nvuLAJKK3xPdDlZMeZFMmPA6RjEH8x3LgK81x9NqllEuSfGhJ6ERchkq4sUMh+ue3kBR0ZLmMxs+1m07oyrCYg0jGVliylqooqj7aZO68IdQBcSTVlWq+c5V5v7vj9o50sVMNYLyXAuW108DBCpjiYz0JjjrxxrJmmgceu+AxWLyXnEqIKtt4aHOG0B2iduWzguAm/V6kzmRHW9k0H0uf8+MZfkZ1nK5gb1Dk33mlEe+CYqWkksNqsQskRAlK6juMPxEipslwtrBFGYOXt/gekfFmzede/xxsP3/vt6en29Z7m9KjUgLkptZs/pk5jVVXgO5k+lgX+TpB1j97R7TocIL6NcR1ouALHV3O9CQ3mF/VRN07xC4l0AgDgZOuMTu5qqlt7LWF9DPzyTq84wCElYyNyTpluNB8WqcfEKdUDZxPoRlf9KQd28b/nk8iX/rRM+b+qNWbKFy23h1/olzZh5QvfQMF98Og/sd4IxHNa9M0QCWrSVK3G0kCJTZYeapjnQ0ebWQuM0T0Hh8ZJ3/LqZCz5YyVvrEWAeonuSo0eZnTjMvUxi66f/QdhyGIa0KYjk8HLU/N07nx1CS9hapjDOyVpQg8pEDGVT4rhBi1mo5pkPvO6HmQ22GPin1lfcHyrOU3mvfWlWHABh1bV899vMF1oPn8+HwhspLKqhWJv4q9+d/u0JAyaLWqX1dxzi6RDHDN30+0QE/OGmBz5KJz9zvJl6/xQaNg+j3EKd+FAf9f4ql19sAenYcWX9afMTcNYK/OxIPmIqXnHRzQn9uodwOcDr8Y3eLjjrbSKuft5o8F1sWetejjLsAH6g/KCZQyQdrOT2aD7NGrGAV1V2OYcPV0iVxra9HjDFchTvNKrg+VO1tF3iKv1IBVD3+4p+cNwwO+aBCdoDeQA4WrhJJe1znuNef+mJ+zkbuZA8B1pCPboISXyQV97QzmxDitghZZRXIMYq6yX+gV4uACL8oQPoQJ0ys1/BygOaRmnGNFRvdLQFwzVGivrnGGnQjvpLAkg9j1SMjMyxrPxa9uavHKtsAoD0G7iP+Sdff+lFfmn3BbSHA3ni+DD7QOZD1Z0bQlfpDzjuR5XvG6UAsvu7PFfD1VS0FOhAUx5+I4SLj6oMXRoqHdADQthjaAVt4A9UXCa1iLzY1izCp1S0p9DkDzhf91W9p8ZfrwWT6Ls5AdwO7gd3B/gpZzEbN23jsYwnwX6hNuPdyUzcM/+r7LzaTcdbUcLlFprv8rmhiCMRn6fZQCdgoRE57ies+96esc/vZgg89Y3HwtLEDV0nvk+CVr/l65IU52DKhvw88NDZwQruDYPudMtLVoZvisXKHJIoDvNtNEbvAM83IDH06xif5bU9MUfuInuBdaepdaQ5rEWj5XarwqnnwVsejPJ7opH2T34y6+FU9Sl3LCHRUX2k/FOnmBEdU4F6XDWAR9BHfDkcknZ7Vp5dw7dkzhuY6beyo8iPSd//JJbzWNJUigKrJpYv28hvFewoxQtxbSCH76XeSwefzBL8XIYpSxeUUJpXz8Wxa2bvDi29frgB+nUyb7/7902j6EZOeB+ZRkxgPHQZQqPb9r/SGMQrCL8GGrYU0XxDbSLfHxFX6kEF3ccG+qkvkIdmmn3sGQ6yFeqXlYk+jyptUma0cT9OG3fUdT6+GQ8lnuKfdb23ZlNkKR9t8QQJTEFi4xtrtoD7uJeccPUe8R2GD4eOF++tfIBfw/fzpCHZjCDKas/TI9dA8rPH4nOgxuiYbDNr6GrJVhbxLUVvSWDpQwaRN1r2m30hf6CHsCPWou2SenBd/tKzXd8G7IH1Y5lTK+ODEu/eaWoFhFNqnVvOaX1uofWQrKnDQff8AHBZcEu3Oml++/24b2YiT+DcUxr+07ypuO0U0kcAWhH5ByDor3NWFZclh4ln3zeNUS67Mvy8Zh7SmEDuoGa+L32rgdowb/PqcV88vmt+4+LzGZ8bz/RPA1I/YxrLEWKqkw2aTZDOfEuYda9CoFn+SOgm84LsvJm3W6eXHlTtr4QNxwm40FjtPCzDfosBGCTuUTftpGi6ox6HKroZAxDp/oaTcdWI3RC72h11yRagGvWOTZWRHTYAXGU9ifGr00PMcOtgAfd/xaCkUVT2kF+pEjqTI8KS1vfgp9p4huQm12EhGhhqh5cnB1B1uG3fApHhETZbUe1c4BFG/khuMFaL13NOEp+zXKOnGRlLdKwW4sbaz3+Nm9jLILAkAgwfdKrpaZziwU4UrJAY8h9SIK+tG6CbCvNh05/WqZJad8UJIj38Zpw2rNJEk6Ovq4M/LWnqzV/lXHU2/kykTp+CbfnYsaXsJkpf+KlLj583GZkervf7uOhBDY0DbSgLtBq5dvFM+wexwQhfk7FyhLAqT0bbC92ID/7pCnDmqLcdtW6Bl/ZkFUtpjX+GF0zIpkhrVQAwusED1UAfGHf0YcI1PX2TutmCzlQ2DAfWs7s8fR69ZYYIZjejq/7E/rq3E4GIIy5PlhK3vwC5t9s/imF3wk2nLR0aH85UDJJe+V9JEcSljjIwojV9YwHGGnpuEYcs+78iih1b8HG47IRkkzsIKuKFeij5lYr6tuv9LKhkVP2nKPKRT1lLk+xeA5nO3wycPgcNulQtQ1m7vRdGNFZ1dbzPiEV0GkoAynaLk6yX6ps9RxVmgKMpNUlJFWq5YajvOyywT4GHCUeakPREyZV+z/ST+hdUNjif6eY00WH7Fvkq+pauuWEx6j7r2KheSAU6jP+YqG4WzBBzOCdNB5A/FsGvC4MGobC67N9SCjr5fFjhR7yTDy9McMsWf4mOiCkVGIlwRDfxNwi/PyaVNLSRBFP5ynMp+42wo142EuQJCPjvcBDijl+d+foBQI3ApjwHptdRBH8EkYfX9jvYO6JcJGuNS7C/sC4zPECjIfOQFJtpoisMkUMWVOm0G7Cr26kAUonsS6s6Og43fZ2fEp+XMMBOHdm1EmiP+i8Hw/VVgr0fRDDhukAwmcoebkSkpGRPiKMOT4TOqSbCjP/HNot1qS73X1d5QmniSXkozPkmtubTqrHOEfjmIUtKyw7DxLQc7+UodapPwSeHl8i9/tuUb5h30m6axjitOahl0XfJM3gG+7fk5iR+UUAY19qKgNaPbI2FyFetywanouBBjZCcOwj7il1n6L6W/FMR5iZIEI/x3dfKUZQx0ChuivY9q10HX11Wq6oQH0AiZ2ULVqwzH34/OO5Q3RWTquL6ygv3okJgI7/0cKnAZvNLaFwhIFy9vjsEgzBB2Nft2fcfpkyBh5SnyKzNzEdkAl1PVtHhlwsg+LC/g/ouTeSyW4bTdtxzZz95A1zNkxhxiqECyvEiLUJGTgQshp24lymshpz2wvM7iVq1ITZqMMYIg7VgV9D5TM9wIJCPHDZyqW9fhkgPC3MYVjVm9/fCvG/qRl4TZmSsoasBsoVqj9azksjfl+4NGnPnRgWGkQjZEya9v8tPGqmYorAfcdgfKOaxpyOdjvQFjw3eYh7P8/xnwtz+Bezj0nYrzz677wzGJ1BITSyG4Jz3rYfMLoZG5berqLRJJqO2FF3hATVGZdfTnNOfvMTHT1qGY1ZIz//p9MK0eT6QSQ94fLZ5Ml36RNLh68hZcad5chpM8HlCiSa8DpjQAxQIWRME5lwHBQJX3fUuPwf7RIqce5Q9N6TyLXuH965oE1kFQ9V0yy6OOmEABBy49PmP51h7pZ9wM6Ay69KExl2O8RX7d1Kfc1cK+HDeBbNhBMyIEe3cxrK9dTRladE6DeEMK0aE0eyXex3cdVhCI0gZf9MHqvBbm4l025e4XPfiXi3CAGV9JpYt2ox/Jlw9JLathbQG3YYxVdspGHmo3MRKTG5USnXKA8otRzpu1T/oXK16wPZV3NAsSMrjs4lFPIvg3J1KmEMkupWBAIWv91d0ah3qHrzi8WXcOmcb04mDlmMoNtyPzaGGbh1nu3Z5hOLYoyeEoTuGobLYJ9m9S+HV71xaaGvETYO3QJoRjoa4EwNyFqxT+BY7zYW0LLi6wdrTWogEN6fi89YEY/g/JytoEmQke8RKhftMCoGf1MTSP/WeXT+u3UoR/LRlb3FqERcjtkzU5ochnW2CrudBofLw+7Sl966LCBDzp9jKCE+CTUhVGZ6K6vWHzaB5bDYqhpSRhv87cQ/dC0OFUbHEgWN20tax86fAVSOlPEkt2s4XiF7bF45gADfTsVnthtgBgRbBc2fcGpBwKvkMUsDTXKat60N4dEjInjCo/l27yfF69043GORh0fHnf8GMeKnrbCMS+Vfy+qCjaLaA4X1K3r2djFuq7ccYxyWFG/Er874OWe8k6FRhoOUtJ4uhGWRcVWjh+cyYu1JLRKlRkmLbTDWiULKvE2gm6C9oKCveyY4HiXK32J8ddwVy0u3OvJas92Q10GkV4qSDK+1AtIBKzT3BbqQPwaeK0VsjsJp8deavjSAvToq3AsFukn5pIJCnLdKDtMFMipvi5kmIGQbUOOpKLaVstQn6Mj5MGTt0m5r0gOUw7d5ISV7TmdaqnjW9a7vrpWer1/XJ+k1+du0ic4lyv5y3+ONYdiNLwgdwJkemaB0p60JH3h+ZauVC0Z3h2d3vgOObOFnjSTqK9F7PvBqqQi6OQb7FGsfBusStADlGd9XuosgOFjG7vIUv/KjgRPuW+8CJkyzgwP08FL8GzBxz6IDzhVSsF4bwjnLht6MnXHnAS1fNnytP3iSFmbJbf8bKNAQtEj7oQMMqjq6t1Mf47iqOQQxH7NCfTVh3hrk4CG3zZzP71/wFiY+kCUhC9Eijg9TmfKmIrC6whvB9stArpcCJEqzXQZSWeYgtBOVQpEMKW/RaJkbLD/O7Pmf5Q5Vyp46YGFBk+Qs1zTAKPMquyd6JHrM7GXAy0lDAc8a2xxoT1qIm3AEwWKL01D1LrNYHlvv8bwJzuBLeMNvuCmXayuWCd7XeBrq/o8MWJhTrlvZXqp2YrZKrCA6TX5WgoQzhlRsnTBgTR61TCVLrYaEulgHmd2vFCn4a5YKbfn5EnH3duc8LWyYjllKlm2sFdshQ5P00qW+32st4Tg7jhc80ORijTgXwKRlAGGRX1qtvEyqic2+S3qxjdMPDEyx35TWTnj16WXORYLGJtk/KKAxqx6KYFHQ85K4tiEvWwbF2d0CtFaRyi+L7d9w1szusDLJH5k3cxsH6ZHCrHQhWafq1HlVOiBntt4cQ5vkj71Lq8ZwlTXpqj2SLrpcKQNgycCG8bggxjNGKfwv8Y7fr4utTUIQgy0mZAgZhCdGx7u9B0Z7BjlhJda729423huLGeOD6ztKSNGdGLU40TEmZIpAwqO2DmbRPohQE2nfNWjkLIc6LlGoYnQZA2ZnlNsvkgTbGfUMAWCHK8t6M1TC24LEr3yqxLIT0aQvM8DLKA2EWjqpqK/+sMRoNe/O3WcJRzZI83FykcPXrvlqfUaE1SzBeiEdrLbD0KRd1nQWyWZ67Qn7Y/6OW7tK8N4ZP+s3qC/+V429ddB+W7zf+H2ZkILtwH/49ZTt2hDn+koXRAd/ZPDCEWL64SVrAaCCo4QzxJWgMb8Y8xuQuGj36KwuE3UhJoRfTkz0z9yOmpY/VaHgu2lwPrrMKu/wrgVml7/y43oKhPDsMf4QcKdFuD4mpP2BlXwyBciePS0zRVvMBVbQIPP1Np6AiLl7xVMlEdIqsJQoVpBM+PHaZQX9IgNNDjiXtEpU6rba8iHTFVDFvQlyiFONucQQd02WT9XOzJZ+TDEEkSXFthyYAzT8npOo3k7ELBfdU+G875vUGvEFutaA+L18/cLfa2OXutHdk5K1RoEvZh7LzY4aGUzzyZE3eMlwE95RnReWGRtP074ipo+7CyiJTNu5axcmeroQKOR1Xlo4rgRY0oScFineJIF0/SjBi/TKkk+ftDYB043GhK5dWxSt7QLfPOA/nMl29A1g8/HD6jplnpQTBu4EaPXOaPDh/YtAeDJp+/oTFu7M/34JU4x8m9v4vE7gWcSlINPrV15j1csP/Q96mlJLvHqVCs1upYhd3F45OPMTeiD7MiMLl58LO4bj5IrgIIg0PSNk7DBcFPsxOV1dxVjxa/4uEVQj/0q01s+nqcQlchWxAGWh0wYyckOM7EChR9si+gLaVl4m7E6JU7VLC0siCMx6jphRohvP7uXm9X9ooseVzmfbv+zBFxjfMSHNX9EKNvwwM7C8qvEw10f7yCBiZ8DSM6qlDxPQvdEpPGXGQJWRDiQF5fv3ZVXH5w95Zu3GWa9OUnbTGSHMEFZKwHai55aAKazTURjfp5s8gPIosIJ2rIabn2Vug3304YxJzXDT0l73svxsgNallACPuF0daCBeLu1SzaFtSfyluGwHkIgjyW3C+23NfHnTb8z/xjc+/ecwHH4+RDKkYRC8G/JwITthAxIyFU4EADz/zn/mWwEeIc3TNbh09gZrpna7cbG7F9sD/HTgEsy3hDGg9l3CxBuc4MnYgsSBr/HGtbOQnMASAXDOk0J5kwPgcChkjr2+L9qCa/uuP5XOYIOx7LVR/JNwEJwoJ1YvYTSfLGCQuWPsZH6IXnpFAlVd4VxVzqGI5ExG/mx7pKY8InIZ14uwBrLDi1fPhcFmR63B5s6mCOv9Z3AZUgjbSvHR30F3jZa/r6IU45GztvCVACrYmuXWR1iqtSqq1DMe58LuGFeHhkZAf7L3uStfozkOq9Nodvg3RD4+LuaJoXBYY2aLEhnB5uSXzhtyYLp/c4j5kZF0hD/IYmrlxSEmsZWR37cBd3WOhWu/vRGHmyOsRdO48ag1km6TTSYZr324K4fWgwwtaERf8hjxPMri7qcycuVvG8gafmkYXjVuY3NiF7Oq2cS998YAdAMkBrmMhblt/AcOet4feuP49GzVXSrGa1R4r9LppymtUV1o80SC7H4HQ2yhdfbqTjIv96UPRPwU2u+21tRikM8B6Qa2hz8A1+wLZQHXHLrVCEaOvB65wg0NlRBAgnuhUry11UCRaA1pV6Lr+MFwVWUDvmcsLSYUbmnygg0SERfpD1nHXm3dVGC8BCOfU9csoptMamblH80Ss9kQbzHLvCqd7Z4BgMLjrDPYpSQaHAkR+MBRY0YjdR9V6zfkx35es4DHxhu9kYco07iMtoqnAzPZ4u/ry1hf44XjZ/Wo9c+L/JdB+gD5Bv5r/HMs369/lR2uTgcREkrw7YhvtCxXKytXoELufL2ZAgod8aK8c5faQ5kbY2LeZcvBnkWfJ5RI9Z9pFyUrZhuzy+39WuKalJ1hWpubc8pE/WInMAGJzsVrhJDftyZ93GoeB8j9TUiLooSWg9eBqQMFBQKINAtU2sP34Rn48M6oxFEoEChZYCNSxwLhrzzG3plT9QwsF/NQbdhgsnyC6KyKu/YhlXFOU3OfEW59RZIMUBMpsEML2nU4ziCkDr4LA+m7Pr2veoG20GWU9Qm7rhIlN10jD0twBmsvzjyCBBl9sHIe9vuKE22PHjPJQrSi++QrIYjGjtzIKReNKTODWDIUhhQZaOAU41vbbVDcI1DkoNR24rzpFEFX10i74bPk86rSjhmG0om3Ar1SPXjO6spPk41ra0yuPSXg6QnnDTGsezkGCmtA1K69aHCJrshnna+C6l2cLFmjHOcZ8a8jPq9yltK6sCW12j6kiutWX9IWZwk7NkkRRdzoOp9uNLMVK94VaCOCIoefNdGIHsLAQ/zWHIRslwiD1TFBte2sJ5E+c40Y/GzNuXolpd4L1cBYK7KzqTNykGF+GgW54XKhCNzG4BPZ05F3PjfK9Z5GGOngcs7kOxZiPGrCJoZxK5iY7e3AfHd+ld6ipjsBkpXcP6+y3OXYT56Tt41zGyPkRnXsNdzC5pottFj0lt5B1YdOvTuf/NQFBSxjNaEzgKO1wm2lNBnf7pKQ0nU6qNA/XWm76ETVUOyx8+E9Tq+/cidTwGNNNSb81LkGJAG8jw86YiNCF7Skv33KYUtn0AKpBYTghHWV01cBHvrqmcoxfS2m9HVizgwyZ5DoqyVHywX1MHrvh62Ozz8o05f2o+ots/xKLKq8cqqcD2cC5V0SBN/ZYigq7siY0yVB7ANz3yI8LOxqeTTwvCdW6qqdxOCG8+euQ9l2JNl0cdA2vdcGlqVNgjra8h5axaqhDAbu2b6+xMjR6AffYNYXCT86Nyvh5+OuwrtxW+KGty47er0J0A+ir58pzhEQtu60eBeOiKN2hiO5K8IHuIWh8sfxJ7Kg8bfGG/SS6WLMlPE4Do6pnjGdv7COhVgbb2zFLN2XjhYP+fe/AiowBLLH62aLfarxmWl8hsevs0xa3g5esgd5UucB9ZQ/K1porjhbDb9xotBLxvdYghxDNeMxxKESu6FoyawV6MOopNoeZfFtbCU7gBo9FrsAVid2I3+Nx2/zXtxZIIfdq3tIAhR0ql4tbdG8qW/JJfocDIiArBYYRbXd9Qw5nbG3y/bCsmv5CtXuzyKY+gFzFhIqCnvAOSsPmsx9DVw8FhbLc5rX6x7Ou9qH/OdeUDLzB758bA2K8TBIA9pB7zdSpjzsMrnUEkbp86KDSbKQ7MdZIRZ/GMsaHAhLToMU0gIqS2le5joY/QpWIHkuwHettmA7ycZn5E+5oYmTeqTjVgQQct0bVxEvJtyxKTurWXgPABbyxgfiGi3Z52kD5ho657G6JiUZH6I+5jn6eLE/g2IAVzJWy294VYQJnPqp+79pdK1Ca44Ij7IYyWVzpTdHZLzCDJPHQ3AOSU95SW4vHGiRaU9bqL5EmF/lMCZQVzQ2IvWFrUqMwohF1hxAcmMdvwxsMclbGxs1fLtpnBDh2H3AJJw3tTEIlAO4OkyA3XaGb0tCR3nsY/2iYKVvlRSYE4F1/IRZIZcxarsFaheBS4ZZttt5qcUpInqaRZNyDrCsyVm0VoguU0UB4+UYALvzsEijAoR/88WUKwyEzyp1D23SUG2CB9Le2vrqhorHVaJYXR/UhtCwexwFdaNsH11UC58IkHyehIznNX/zAjlwH5az8m/0/zjq9/w6IvHu9IJWIKavI4DGGbnhdr/PQL06QQ1vEurZVVJGKB7YJ6pvTc9lZYNW9CEZnbxpvmlbWk8/mgsO95fJGEKdIa6W33Vz4eW5dFl3vNZ1czSWpdqUrS2LS+5CEfur+Tn49yyZpmxiB844elsF5Z2Kjn2cy43k9xdwfumhQFCerwmAGFAfDMOXhK8XuPGNxAhvRsheVvhx1FVLus/Unrj8DDhIGOmDxzviN/DqP0+91bspFJvcVjus0tJ3xF1KJlCFtMJcOtJNqaBHbkEDrnXMIrNSONxtNhPbtDx/H1pWzmDpHF84jqAYch0ghgo+N2gVQ0ip+yrGCMpdPmVre3Eb2jWTatIHPm8FVnhW1QyemM8qDi1419ZgkrTgxN45vsJ/JXbgxOoYxse9XjuzjuAeQGTIJz79J0KQA8bqWtDqplLPQCpl9Lyt+iY7o/Bs6bQPX1G9IeGJa4LXN7j3RlYHHkaVbP3/4U2UPr2hP5skdLOzXya0efZs9iXk5/wRPuMPfC1U8p84tlNqSkHcLPDkq3nP3XTwh+BwF9ExWZwvf7CoMJMU6jCJcfrXx0Aj8O/U+pF+zkfIBq10nFU7lz39swW9n/1ss/GyxP2Nzb4XCrHXhLG90a77+7lBGcOGxphbdSBmD48UbyohIIL4lquNa3bw+0QUIZJlVIPBWe5cR3Maw/dAP02i1unvejQl/sMBzht0VygHnQ9F/of7TEMkgSfleU+V8R1zX4vzDSm53rcAZ1GiEZ97GbUGQ/c3v9iD00ZLz0IHELNqXluxjJYGdJBMWWttRzdG+EgGqBXlMgHuCaW2ieLPjh57PVH8IWc7ao17kFoiM138UOAH8cOIjyXg7eTP1f5PfekLnLFFDQqrbWIYT3BwbRsFJ95cR9Oa3Xg4Raz+PBOzkEHZdVtagPvwdv3138BQGgmZrvB9Ety1SgQH3QAzgKD0LlxPs75DG2aHYJeFFEVSB+0aL8yJO8tMcKQsa6IcelOlWcsYC5uB4KmiK9sLr8qImsR5mY+0FFWQHJ+SuzIdzGEJCGY193GA5/vtP8R2uVYGzrzLqKd2yRjssZ4Pc3Tz5URYr7WHE7jq1dkWf59HjD9Dg1JsfQY5KhFL92Dg6H4MuVyTUY9hgYyRXlOf3bRFjXfmxMCWL8qtvQKI4n26ZkCZFTpaOifIziORcIPlwVszrWq2ZmHrEmi8GB3YIoA6CJbMJ4DAeStc3q+Uuva5unZ3Qqdy1fInSPtiUm72FLkGnV/Ee5zxlrVtfZwHxo4/E2JoijK/+/svifyBmK3ZK1pBsUPAYHnEOfmeHzH66lZ+72hpnGvim4muidvNbhnM/El7GZ/3zfVWcJTVWuS7WMvfVLFCUst0M7Ry15Bq+VyNrAFZlpqVzbBJJ712/mkCZdfxK4aanSHAXTh6uvrltezlHXimqDPdsMHUdHv3qtHnmeWPc6h1TjdLekEqxQFmpOyhxU99rNqLoe55cake4CQaxDqdhXi3PZeM16xHVo47UghTQjJi4QNgf5GA7ZcTKRHIz/qDqP3J8tmCBOnP/nUl5RZtt3lcjWyDhnfoNei4uu/bzn3tGIcJ+Qn1jkC+SrbSW8DWdxPJ+YWd9wTiJPCtr3Ay2GZEKPAXNzV38zwMx6570RTio/lhTvnG2o2Kzwe7vQcVY5ZNxTKX+v9EjsRuRw+cTFfNdNYkDJ4Jip+mGSorQqKaAi7NAQjqSFBakSFCv4OFOctrHyoaunaj644trUWE8dZEIZLjaPOmg+mFqISR0FVxApHvFrkm22qfIEzA24MYsQKhcICscQg4J47sH89nnPjOzyi4NjBfviEmmGwSqux8YvsvCYOgaLTyeaV/1eYzHyUazE5eCMASvbbZPIN+vHOYIjMyNRI+F6eJHzJeVY5W1Yp7z1qpL2xszLVd1IIiDkvxQkPwdP8VmGLsDPA6vOuqkpCO1PpZREK//BWwfqYBh6AetybgCl+7sFiARMFbBpapCU+4MUxvmoeMIPy9Ln74isn/V1x15Oy/ymBwbWJo77GpDBrN+e5+wfX1NBF6OHOL367W5EZ2CgIHHlh/22DbdqLIHj5a5IntKImgv6ilJXjizzoMt7ppH4Yptnu7Sf9MbK3krNzFyGWa4hFvFRiSqlmidYZMmWWEcSK3hXSHyqQzjbPeEvPTtSsI9Pzm1DKxPC4fdb6mwstLavRF+mOJCRqjC/alit4avOAwjytnkPDxAzOfrrrEao0/gzRiiYP34FU0//sIALtAAAAAq06nDfA5zu67KRORaOfeC+uvZMNtQAAAEFICbKTYQ/A4VYJ93FydPcxzAAA="},pCardI={};
function pCardImg(k,cb){
  var i=pCardI[k];if(i&&i.complete&&i.naturalWidth){cb(i);return}
  i=new Image();pCardI[k]=i;i.onload=function(){cb(i)};i.onerror=function(){cb(null)};i.src=PCARDIMG[k]}
function pCardSize(n){n=Math.abs(n);return(n>=1e6?(n/1e6).toFixed(2).replace(/\.?0+$/,"")+"M":n>=1e3?(n/1e3).toFixed(1).replace(/\.0$/,"")+"K":n.toFixed(2))+" USDT"}
function pFit(g,txt,tpl,maxW,px,min){while(px>min){g.font=tpl.replace("{px}",px);if(g.measureText(txt).width<=maxW)break;px-=2}g.font=tpl.replace("{px}",px);return px}
function pDrawCard(cv,o,img){
  var W=1024,H=1536,g=cv.getContext("2d",{willReadFrequently:true}),win=o.pnl>=0,F='"Inter","Segoe UI",system-ui,-apple-system,Roboto,Arial,sans-serif',sc=img?img.naturalWidth/W:1,
  Lo=win?{dy:352,by:405,bh:160,fs:150,r:[614,664,716]}:{dy:350,by:386,bh:132,fs:122,r:[553,605,656]},
  pn=(o.pnl>=0?"+":"-")+""+f2(Math.abs(o.pnl))+" USDT",rt=(Math.abs(o.ret)<.005?"":o.ret>0?"+":"-")+Math.abs(o.ret).toFixed(2)+"%";
  cv.width=W;cv.height=H;
  if(img)g.drawImage(img,0,0,W,H);
  else{var bg=g.createLinearGradient(0,0,W,H);bg.addColorStop(0,win?"#06150A":"#120505");bg.addColorStop(1,win?"#2F7A14":"#5A0B0B");g.fillStyle=bg;g.fillRect(0,0,W,H);
    g.fillStyle="#fff";g.textBaseline="alphabetic";g.textAlign="left";g.font="800 60px "+F;g.fillText("VEKXT ZERO",84,150);g.font="800 84px "+F;g.fillText("Perpetuals PnL",80,300);
    g.fillStyle="rgba(255,255,255,.55)";g.font="500 36px "+F;g.fillText("Return",84,Lo.r[0]+12);g.fillText("Position Size",84,Lo.r[1]+12);g.fillText("Win Rate",84,Lo.r[2]+12)}
  /* template merah punya teks "$36.6K" yang tercetak: tutup dulu dengan warna latar di sekitarnya */
  if(!win&&img){var y0=Lo.r[1],c1=g.getImageData(600,y0,1,1).data,c2=g.getImageData(870,y0,1,1).data,pg=g.createLinearGradient(620,0,860,0);
    pg.addColorStop(0,"rgb("+c1[0]+","+c1[1]+","+c1[2]+")");pg.addColorStop(1,"rgb("+c2[0]+","+c2[1]+","+c2[2]+")");g.fillStyle=pg;g.fillRect(620,y0-32,240,64)}
  g.textBaseline="middle";g.textAlign="left";
  var ds=o.date.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});
  g.fillStyle=win?"#8E9A8E":"#9A9A98";pFit(g,ds,"500 {px}px "+F,300,38,24);g.fillText(ds,84,Lo.dy);
  if(o.pair){g.textAlign="right";var pt=o.pair+(o.side?"  \u00b7  "+o.side:"");pFit(g,pt,"600 {px}px "+F,470,32,20);g.fillText(pt,816,Lo.dy);g.textAlign="left"}
  g.fillStyle=win?"#97F63C":"#FF3B3B";g.fillRect(82,Lo.by,734,Lo.bh);
  g.fillStyle="#070A06";g.textAlign="center";pFit(g,pn,"800 {px}px "+F,734-56,Lo.fs,48);g.fillText(pn,449,Lo.by+Lo.bh/2+4);
  g.textAlign="right";
  g.font="600 38px "+F;g.fillStyle=win?"#9CF54A":"#FF5A5A";g.fillText(rt,800,Lo.r[0]);
  g.fillStyle="#fff";var szT=pCardSize(o.size);pFit(g,szT,"600 {px}px "+F,320,38,22);g.fillText(szT,800,Lo.r[1]);g.font="600 38px "+F;g.fillText(o.win==null?"-":Math.round(o.win)+"%",800,Lo.r[2]);
  if(win){
    var cx=123,cy=1428,r=49;g.save();g.beginPath();g.arc(cx,cy,r,0,7);g.clip();
    if(img)g.drawImage(img,325*sc,800*sc,440*sc,440*sc,cx-r,cy-r,2*r,2*r);g.restore();
    g.lineWidth=5;g.strokeStyle="#97F63C";g.beginPath();g.arc(cx,cy,r+1,0,7);g.stroke();
    g.textAlign="left";g.fillStyle="#fff";g.font="700 36px "+F;g.fillText("@vekxtzero",196,1410);
    g.fillStyle="#97A397";g.font="500 27px "+F;g.fillText("vekxtzero.com  \u2022  Trade Smarter",196,1450)}}
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
    if(act==="new"){pNew(+el.getAttribute("data-size"));dash();return}
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
    if(act==="del"){if(confirm(L("Hapus akun uji ini dari browser?","Delete this test account from the browser?"))){PERPS.splice(selP,1);selP=null;pSave();dash()}return}
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

function dashHome(){
  var a=curAcc(),home=$("lgHome").href,x=a?"":modeSw();x+=(ACC_API&&accState==="ok")?syncBar():"";
  if(CFG&&user&&!user.verified)return'<div class="lg-card"><b>'+t("verT")+'</b><p>'+t("verMsg")+'</p><div class="lg-msg" id="verMsg" role="alert"></div><button class="lg-btn" type="button" id="verDone">'+t("verDone")+'</button><button class="lg-link" type="button" id="verResend">'+t("verResend")+'</button></div>';
  if(PM==="perp")return perpHome();
  if(a)return x+accDetail(a);
  if(ACC_API&&accState==="loading"){x+=skel()}
  else if(ACC_API&&accState==="err"){x+='<div class="lg-card"><p>'+t("accErr")+(accInfo?" ["+esc(accInfo)+"]":"")+'</p><button type="button" class="lg-btn ghost" id="accRetry">'+t("accRetry")+'</button></div>'}
  else if(!ACCOUNTS.filter(notPerp).length){x+='<div class="lg-card"><b>'+t("mine")+'</b><p>'+t("none")+'</p><a class="lg-btn" href="'+home+'#plans">'+t("start")+'</a></div>'}
  else{
    var CA=ACCOUNTS.filter(notPerp),nA=CA.filter(function(c){return !c.breach}).length,nI=CA.length-nA;
    x+='<div class="lg-tabs" role="group" id="accTabs"><button type="button" data-at="active" aria-pressed="'+(accTab==="active")+'">'+t("tabActive")+' ('+nA+')</button><button type="button" data-at="inactive" aria-pressed="'+(accTab==="inactive")+'">'+t("tabInactive")+' ('+nI+')</button></div>';
    if(accTab==="inactive"?!nI:!nA)x+='<div class="lg-card"><p>'+t("accTabNone")+'</p></div>';
    x+='<p class="acc-hint">'+t("accHint")+'</p>';
    x+=ACCOUNTS.map(function(c,i){if(isPerp(c)||!!c.breach!==(accTab==="inactive"))return"";var pf=c.equity-c.size,r=c.breach?'<div class="acc-r"><strong class="dn">'+t("breached")+'</strong><small>Equity '+money(c.equity)+'</small></div>':c.offline?'<div class="acc-r"><strong>'+t("accOff")+'</strong></div>':'<div class="acc-r"><strong class="'+(pf>0?"up":pf<0?"dn":"")+'">'+(pf<0?"-":pf>0?"+":"")+money(Math.abs(pf))+'</strong><small>Equity '+money(c.equity)+'</small></div>';return'<button type="button" class="acc" data-i="'+i+'"><div><b>'+c.program+" "+kfmt(c.size)+'</b><small>'+(c.phase?t("phase")+" "+c.phase+"/"+c.phases+" | ":"")+'ID '+c.id+'</small></div>'+r+'<span class="acc-a">&#8250;</span></button>'}).join("");
  }
  if(ACCOUNTS.length)x+='<div class="qa"><a class="lg-btn ghost" href="'+home+'#plans">'+t("start")+'</a></div>';
  return x;
}
var view="home",VK=["home","lb","wd","prof","aff","offers","cert"];
var AFF_RATE=10; /* persen komisi affiliate */
var WD_MIN=50; /* minimal penarikan (USD) */
var wdBusy=false,wdFlash=false; /* wdBusy: cegah dobel kirim; wdFlash: tampilkan "tersimpan" setelah kirim */
var affData=null,affState="idle",lbData=null,lbState="idle",lbAt=0;
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function ls(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function ss(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function refCode(e){var h=5381;for(var i=0;i<e.length;i++)h=((h<<5)+h+e.charCodeAt(i))>>>0;return"VZ"+h.toString(36).toUpperCase().slice(0,6)}
Object.assign(T.id,{"wdAcc":"Pilih akun","wdNoAcc":"Belum ada akun yang bisa withdraw. Akun harus Funded, dan akun Zero Instant harus memenuhi aturan konsistensi 15%. Akun challenge tidak bisa withdraw.","wdFirst":"Entry pertama","wdNext":"Payout berikutnya","wdNoEntry":"Belum ada trade di akun ini. Jadwal payout dihitung dua mingguan sejak entry pertama.","wdWait":"Payout belum terbuka. Jadwal berikutnya:","wdUsed":"Payout siklus ini sudah diajukan. Siklus berikutnya:","wdConsFail":"Aturan konsistensi belum terpenuhi: profit hari terbesar {p}% dari total profit (maks 15%).","wdCons":"Konsistensi","wdOpenNow":"Payout terbuka"});Object.assign(T.en,{"wdAcc":"Select account","wdNoAcc":"No account can withdraw yet. An account must be Funded, and Zero Instant accounts must meet the 15% consistency rule. Challenge accounts cannot withdraw.","wdFirst":"First entry","wdNext":"Next payout","wdNoEntry":"No trades on this account yet. The biweekly payout schedule counts from the first entry.","wdWait":"Payout is not open yet. Next date:","wdUsed":"This cycle's payout was already requested. Next cycle:","wdConsFail":"Consistency rule not met: your best day is {p}% of total profit (max 15%).","wdCons":"Consistency","wdOpenNow":"Payout open"});
Object.assign(T.id,{"wdConsHint":"Profit hari terbesar dibanding total profit. Maksimal 15% agar bisa withdraw.","wdBankPick":"Pilih bank","wdBankOther":"Bank lain...","wdBankOtherLbl":"Nama bank lainnya"});Object.assign(T.en,{"wdConsHint":"Best day compared to total profit. Maximum 15% to be able to withdraw.","wdBankPick":"Select bank","wdBankOther":"Other bank...","wdBankOtherLbl":"Other bank name"});
Object.assign(T.id,{"n_lb":"Leaderboard","lbT":"Leaderboard trader","lbYou":"Peringkat kamu","lbLoad":"Memuat...","lbErr":"Leaderboard belum bisa dimuat. Coba lagi nanti.","lbNone":"Belum ada data. Daftar muncul setelah ada akun aktif.","lbNo":"Kamu belum masuk daftar. Hanya akun aktif yang dihitung.","lbNote":"Diurutkan berdasarkan return akun aktif, diperbarui tiap beberapa menit. Nama disamarkan.","eqT":"Equity curve","eqNone":"Belum ada trade. Kurva muncul setelah ada hasil.","eqLow":"Terendah","eqHigh":"Tertinggi","eqNote":"Dihitung per hari dari profit yang sudah tertutup; titik terakhir adalah equity saat ini.","wdMin":"Minimal penarikan $50.","affDesc":"Bagikan kupon kamu. Pembeli dapat diskon {d}% dan kamu dapat komisi {c}% dari nilai pembayaran mereka.","affLoad":"Menyiapkan kupon kamu...","affErr":"Kupon belum bisa dimuat. Coba lagi nanti.","affCoupon":"Kode kupon kamu","affSales":"Pembelian","affNote2":"Komisi dihitung dari pembayaran setelah diskon. Pembelian oleh akun kamu sendiri tidak dihitung."});
Object.assign(T.en,{"n_lb":"Leaderboard","lbT":"Trader leaderboard","lbYou":"Your rank","lbLoad":"Loading...","lbErr":"Could not load the leaderboard. Try again later.","lbNone":"No data yet. The list appears once there are active accounts.","lbNo":"You are not on the list. Only active accounts count.","lbNote":"Ranked by return of active accounts, updated every few minutes. Names are masked.","eqT":"Equity curve","eqNone":"No trades yet. The curve appears after the first results.","eqLow":"Low","eqHigh":"High","eqNote":"Calculated per day from closed profit; the last point is the current equity.","wdMin":"Minimum withdrawal is $50.","affDesc":"Share your coupon. Buyers get {d}% off and you earn {c}% commission on what they pay.","affLoad":"Preparing your coupon...","affErr":"Could not load your coupon. Try again later.","affCoupon":"Your coupon code","affSales":"Purchases","affNote2":"Commission is calculated on the payment after discount. Purchases by your own account are not counted."});
Object.assign(T.id,{"wdClosedT":"Penarikan ditutup","wdClosed":"Kamu sudah mengajukan penarikan untuk periode ini. Penarikan berikutnya bisa diajukan mulai {d}."});Object.assign(T.en,{"wdClosedT":"Withdrawal closed","wdClosed":"You have already requested a withdrawal for this period. The next one can be requested from {d}."});
var wdAcc=null;
function wdIsInst(a){return /zero|instan/i.test(String(a.program||""))}
function wdEligible(a){return !a.offline&&!a.breach&&(!!a.unlock||(a.funded||wdIsInst(a))&&(!wdIsInst(a)||wdCons(a).ok))}
function wdAccts(){var r=[];ACCOUNTS.forEach(function(a,i){if(wdEligible(a))r.push(i)});return r}
function wdSel(){var l=wdAccts();if(!l.length)return null;if(wdAcc===null||l.indexOf(wdAcc)<0)wdAcc=l[0];return ACCOUNTS[wdAcc]}
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
      wdList=q.docs.map(function(d){var r=d.data(),ts=r.createdAt&&r.createdAt.toDate?r.createdAt.toDate():new Date();return Object.assign({},r,{d:ts.toISOString().slice(0,10),ts:ts.getTime()})}).sort(function(a,b){return b.ts-a.ts});
      wdState="ok";dash();
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
  var opts=wdAccts().map(function(i){var a=ACCOUNTS[i];return'<option value="'+i+'"'+(i===wdAcc?' selected="selected"':'')+'>'+a.program+" "+kfmt(a.size)+" | ID "+a.id+'</option>'}).join("");
  var cs=wdIsInst(ca)?wdCons(ca):null;
  h+='<div class="lg-card"><b>'+t("wdT")+'</b><label style="margin-top:12px">'+t("wdAcc")+'<select id="wdAcc">'+opts+'</select></label><div class="grid" style="margin-top:12px"><div><small>'+t("wdAv")+'</small><strong>'+money(Math.max(ca.equity-ca.size,0))+'</strong></div><div><small>'+t("wdSch")+'</small><strong>'+t("wdBi")+'</strong></div><div><small>'+t("wdFirst")+'</small><strong>'+(wdFirst(ca)||"-")+'</strong></div><div><small>'+t("wdNext")+'</small><strong>'+(st.cy?st.cy.next:"-")+'</strong></div>'+(cs?'<div><small>'+t("wdCons")+'</small><strong>'+(cs.pct==null?"-":cs.pct.toFixed(1)+"% / 15%")+'</strong></div>':'')+'</div>'+(st.ok?'<p style="margin-top:10px">'+t("wdOpenNow")+'</p>':'<div class="lg-msg" style="margin-top:10px">'+wdWhy(st)+'</div>')+'</div>';
  var fS0=h.length;
  h+='<div class="lg-card"><div class="lg-demo">'+(CFG?t("wdNote"):t("wdDemo"))+'</div><form id="wdForm" novalidate="novalidate"><fieldset'+(st.ok?'':' disabled="disabled"')+' style="border:0;margin:0;padding:0;min-width:0"><div class="lg-tabs wdm" role="group" id="wdMs">'+WDM.map(function(k){return'<button type="button" data-m="'+k[0]+'" aria-pressed="'+(wdM===k[0])+'"'+(k[0]==="rise"?' disabled="disabled"':'')+'>'+t(k[1])+(k[0]==="rise"?'<small>'+t("wdSoon")+'</small>':'')+'</button>'}).join("")+'</div>';
  h+='<label>'+t("wdAmt")+' (min $'+WD_MIN+')<input id="wdAmt" type="number" inputmode="decimal" min="'+WD_MIN+'" step="0.01"/></label>';
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
  else h+=wdList.map(function(r){var pd=r.status==="paid"&&r.txId;return'<div class="rl"><span>'+esc(r.d)+" | "+wdLabel(r)+'</span><span>$'+Number(r.amt).toFixed(2)+" | "+t(pd?"wdPaid":"wdPend")+'</span></div>'+(pd?payCert(r):"")}).join("");
  return (ca.unlock?'<div class="lg-card"><div class="lg-demo">'+(lang==="id"?"Mode tes payout aktif sampai ":"Payout test mode active until ")+new Date(ca.unlock.until).toISOString().slice(0,16).replace("T"," ")+" UTC. "+(lang==="id"?"Batas tes $":"Test limit $")+ca.unlock.max+'</div></div>':"")+h+'</div>';
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
function viewAff(){
  var d=affState==="ok"?affData:null;
  var h='<div class="lg-card"><b>'+t("affT")+'</b><p style="margin-top:8px">'+t("affDesc").replace("{d}",d?d.disc:15).replace("{c}",AFF_RATE)+'</p>';
  if(affState==="idle"||affState==="loading")h+='<p style="margin-top:8px">'+t("affLoad")+'</p>';
  else if(!d)h+='<p style="margin-top:8px">'+t("affErr")+'</p>';
  else h+='<label style="margin-top:12px">'+t("affCoupon")+'<div class="aff-row"><input id="affLink" type="text" readonly="readonly" value="'+esc(d.code)+'"/><button class="lg-btn ghost" type="button" id="affCopy">'+t("affCopy")+'</button></div></label>';
  h+='</div><div class="lg-card"><div class="grid"><div><small>'+t("affSales")+'</small><strong>'+(d?d.sales:0)+'</strong></div><div><small>'+t("affComm")+'</small><strong>'+money(d?d.commission:0)+'</strong></div><div><small>'+t("affRate")+'</small><strong>'+AFF_RATE+'%</strong></div></div><p style="margin-top:14px;font-size:13px">'+t("affNote2")+'</p></div>';
  return h;
}
function lbRow(r,me){
  var medal=r.rank===1?"\uD83E\uDD47":r.rank===2?"\uD83E\uDD48":r.rank===3?"\uD83E\uDD49":"#"+r.rank,up=r.pct>=0;
  return'<div class="lbr'+(me?" me":"")+'"><span class="lbn">'+medal+'</span><div><b>'+esc(r.n)+'</b><small>'+esc(r.p)+" "+kfmt(r.s)+'</small></div><strong class="'+(up?"up":"dn")+'">'+(up?"+":"")+r.pct.toFixed(2)+'%</strong></div>';
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
  var f=ACCOUNTS.filter(function(a){return a.funded&&!a.offline});
  if(!f.length)return'<div class="lg-card"><b>'+t("ceT")+'</b><p style="margin-top:8px">'+t("ceNone")+'</p></div>';
  return f.map(function(a){
    var d=a.fundedDate||new Date().toISOString().slice(0,10),cid=a.certId||("VZ-"+a.id);
    var u="/p/certificate.html?n="+encodeURIComponent(user.name||user.email)+"&p="+encodeURIComponent(a.program)+"&s="+encodeURIComponent("$"+a.size.toLocaleString("en-US"))+"&d="+encodeURIComponent(d)+"&id="+encodeURIComponent(cid)+"&f="+encodeURIComponent(a.firstEntry||"");
    return'<div class="lg-card"><div class="dtop"><div><b>'+a.program+" "+kfmt(a.size)+'</b><p>ID '+a.id+'</p></div><span class="tag">'+t("ceFunded")+'</span></div><a class="lg-btn" href="'+u+'" target="_blank" rel="noopener">'+t("ceView")+'</a></div>';
  }).join("");
}
function dash(){
  if(selAcc!==lastSel){lastSel=selAcc;credShow=false}
  var h='<div class="lg-tabs dnav" role="group">'+VK.map(function(k){return'<button type="button" data-k="'+k+'" aria-pressed="'+(view===k)+'">'+t("n_"+k)+'</button>'}).join("")+'</div>';
  if(view==="wd"&&wdState==="idle")loadWd();
  if(view==="prof"&&kycState==="idle")loadKyc();
  if(view==="aff"&&affState==="idle")loadAff();
  if(view==="lb"&&(lbState==="idle"||((lbState==="ok"||lbState==="err")&&Date.now()-lbAt>60000)))loadLb();
  h+=view==="lb"?viewLb():view==="wd"?viewWd():view==="prof"?viewProf():view==="aff"?viewAff():view==="offers"?viewOffers():view==="cert"?viewCert():dashHome();
  var db=$("dBody"),key=[view,selAcc,accState].join(":"),fresh=key!==animKey;animKey=key;
  db.innerHTML=h;db.classList.toggle("vz-anim",fresh);if($("pTerm"))pAfter();
  document.querySelectorAll(".dnav button").forEach(function(b){b.onclick=function(){view=b.dataset.k;if(view==="home"){selAcc=null;selP=null}dash()}});
  document.querySelectorAll(".acc").forEach(function(b){b.onclick=function(){selAcc=+b.dataset.i;calY=null;histN=10;dash()}});
  var ab=$("accBack");if(ab)ab.onclick=function(){selAcc=null;dash()};
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
      ref.set(Object.assign({createdAt:firebase.firestore.FieldValue.serverTimestamp()},rec)).then(done).catch(fail);
    }else{
      var k="vz_wd_"+user.email,w=ls(k,[]);rec.d=new Date().toISOString().slice(0,10);w.push(rec);ss(k,w);done();
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
 id:{title:"Asisten CS",tg:"CS manusia",ph:"Tulis pertanyaan...",note:"Balasan otomatis, bukan nasihat keuangan.",greet:"Halo! Saya asisten Vekxt Zero. Ada yang bisa dibantu soal login atau pendaftaran?",greetU:"Halo, {n}! Ada yang bisa dibantu soal akun atau challenge kamu?",chipsA:["Cara daftar","Lupa password","Verifikasi email","Harga"],chipsU:["Withdraw","Verifikasi dokumen","Kredensial MT5","Data tidak update"],fb:"Maaf, saya belum punya jawaban itu. Hubungi CS manusia lewat Telegram ya."},
 en:{title:"Support assistant",tg:"Human support",ph:"Type your question...",note:"Automated replies, not financial advice.",greet:"Hi! I am the Vekxt Zero assistant. Need help with login or sign-up?",greetU:"Hi, {n}! Need help with your account or challenge?",chipsA:["How to sign up","Forgot password","Verify email","Prices"],chipsU:["Withdraw","Document verification","MT5 credentials","Data not updating"],fb:"Sorry, I do not have that answer. Please contact human support on Telegram."}
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
function lcAdd(r,tx){var d=document.createElement("div");d.className="cp-m "+(r==="u"?"cp-u":"cp-b");d.textContent=tx;$("lcLog").appendChild(d);$("lcLog").scrollTop=$("lcLog").scrollHeight;return d}
function lcAnswer(q){for(var i=0;i<LFAQ.length;i++){if(LFAQ[i].k.test(q))return LFAQ[i][lang]}return LC[lang].fb}
function lcAsk(q){
  q=q.trim();if(!q)return;
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
var TRS={un:"coin",type:"candle",col:"wr",vol:true,grid:true,magnet:false,lock:false,hide:false};
try{var _ts=JSON.parse(localStorage.getItem("vzTr.set")||"{}");for(var _tk in _ts)TRS[_tk]=_ts[_tk]}catch(e){}
var TRV=null,trCh=null,trCs=null,trVs=null,trCD=[],trKey="",trTool="cross",trDR=[],trTmp=null,trRul=null,trTab="chart",trLines=[],trLsig="",trTimer=null,trAt=0,trBkAt=0,trFail=0,trTy="market",trSd="buy",trRaf=false,trPSig="",trNoteT=null,trDrag=null,trTapE=null;
var TRCSS='#vzTr{position:fixed;inset:0;z-index:300;background:#000;color:#eaecef;display:none;flex-direction:column;font:14px system-ui,-apple-system,sans-serif;padding-top:env(safe-area-inset-top);--up:#2EBD85;--dn:#F6465D;--mu:#848e9c;--ln:#23262d;--sf:#0e1013}'
+'#vzTr *{box-sizing:border-box}#vzTr button{background:none;border:0;color:inherit;font:inherit;cursor:pointer;padding:0}'
+'.trhd{display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid var(--ln)}.trhd>button{font-size:24px;padding:2px 8px}.trg{flex:1}'
+'.trsym{font-size:16px!important;font-weight:700;background:var(--sf)!important;border:1px solid var(--ln)!important;border-radius:8px;padding:6px 10px!important}'
+'.trpr{text-align:right}.trpr b{display:block;font-size:18px}.trpr small{font-weight:600}.pup{color:var(--up)}.pdn{color:var(--dn)}.trmu{color:var(--mu)}'
+'.trtf{display:flex;gap:2px;padding:6px 8px;border-bottom:1px solid var(--ln);overflow-x:auto}.trtf button{padding:6px 10px!important;border-radius:6px;color:var(--mu);font-weight:600}.trtf button.on{background:var(--sf)!important;color:#eaecef}'
+'.trmain{flex:1;min-height:0;position:relative}.trpane{position:absolute;inset:0;display:none;overflow:auto;padding:12px}.trpane.on{display:block}#trP_chart{padding:0}#trP_chart.on{display:flex}'
+'.trtools{width:44px;border-right:1px solid var(--ln);display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 0;overflow-y:auto}.trtools button{width:36px;height:36px;border-radius:8px;color:var(--mu);font-size:16px}.trtools button.on{background:var(--sf)!important;color:#FFB43A}.trtools hr{width:24px;border:0;border-top:1px solid var(--ln);margin:4px 0}'
+'.trcw{flex:1;position:relative;min-width:0}#trChEl,#trOv{position:absolute;inset:0;width:100%;height:100%}#trOv{pointer-events:none;touch-action:none}#trOv.on{pointer-events:auto}'
+'.tract{display:flex;gap:10px;padding:8px 12px;border-top:1px solid var(--ln)}.tract button,.trgo{flex:1;padding:12px!important;border-radius:10px;font-weight:700;color:#04140d}.trbl{background:var(--up)!important}.trbs{background:#ff6b5b!important;color:#2a0600!important}.trgo{width:100%;margin-top:10px}'
+'.trnav{display:flex;align-items:flex-end;border-top:1px solid var(--ln);padding-bottom:env(safe-area-inset-bottom)}.trnav button{flex:1;padding:8px 0!important;color:var(--mu);font-size:12px}.trnav button.on{color:var(--up)}'
+'.trnav button.c b{display:flex;margin:-18px auto 4px;width:48px;height:48px;border-radius:50%;background:var(--up);color:#04140d;align-items:center;justify-content:center;font-size:22px}'
+'.trcard{background:var(--sf);border:1px solid var(--ln);border-radius:12px;padding:12px;margin-bottom:10px}.trrw{display:flex;justify-content:space-between;align-items:center;gap:8px}.trbtns{display:flex;gap:8px;margin-top:8px}.trbtns button,.trch button,.trseg button{padding:6px 12px!important;border:1px solid var(--ln)!important;border-radius:999px}'
+'.trch{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}.trch button.on,.trseg button.on{background:#eaecef!important;color:#000!important}.trseg{display:flex;gap:6px;margin-bottom:10px}'
+'.trbig{font-size:28px;font-weight:700}.trg2{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}.trg2 small{display:block;color:var(--mu)}'
+'.trbar{height:6px;background:var(--ln);border-radius:3px;margin:4px 0 10px}.trbar i{display:block;height:100%;background:#FFB43A;border-radius:3px}'
+'.trbk div{display:flex;justify-content:space-between;font-size:13px;padding:2px 0;font-variant-numeric:tabular-nums}'
+'.trsh{position:absolute;inset:0;background:rgba(0,0,0,.6);display:none;align-items:flex-end;z-index:5}.trsh.on{display:flex}.trsb{background:var(--sf);width:100%;max-height:88%;overflow:auto;border-radius:16px 16px 0 0;padding:16px 16px calc(16px + env(safe-area-inset-bottom))}.trsb h3{margin:0 0 10px}'
+'.trsb label{display:block;color:var(--mu);margin-bottom:10px}.trsb input[type=number],.trsb input[type=search]{width:100%;margin-top:4px;background:#000;color:#eaecef;border:1px solid var(--ln);border-radius:8px;padding:10px;font-size:16px}.trsb input[type=range]{width:100%;margin-top:6px}.trr2{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
+'.trrow{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--ln)}.trtg{width:44px!important;height:24px;border-radius:12px;background:var(--ln)!important;position:relative}.trtg:after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff}.trtg.on{background:var(--up)!important}.trtg.on:after{left:23px}'
+'.trpk{display:flex;align-items:center;gap:8px;width:100%;padding:10px 0!important;border-bottom:1px solid var(--ln)!important}.trpk>span:first-child{flex:1;display:flex;align-items:center;text-align:left;font-weight:700}'
+'#trNote{position:absolute;left:12px;right:12px;bottom:130px;background:#1c2026;border:1px solid var(--ln);border-radius:10px;padding:10px 12px;display:none;z-index:6}'
+'#pTerm .lg-card{background:#050505!important;background-image:none!important;border:1px solid #1f2226!important;box-shadow:none!important}#pEq .eqh{display:flex;justify-content:space-between;align-items:center;gap:8px}#pEq .eqs{display:flex;background:#111;border:1px solid #1f2226;border-radius:10px;padding:3px}#pEq .eqs button{background:none;border:0;color:#8b8f97;font:inherit;font-weight:600;padding:5px 12px;border-radius:8px;cursor:pointer}#pEq .eqs button.on{background:#1b1e22;color:#fff}#pEq svg{width:100%;height:auto;display:block;touch-action:pan-y;margin-top:6px}#pEq text{fill:#7d8590;font-size:10px}#pEqTip{font-size:13px;margin-top:8px;color:#9aa0a6;min-height:18px}#pEq .eqlg{display:flex;justify-content:center;gap:18px;color:#9aa0a6;font-size:12px;margin-top:4px}#pEq .eqlg i{display:inline-block;width:14px;height:2px;margin-right:6px;vertical-align:middle}#pEq .eqlg i.ds{background:none;border-top:2px dashed #6b7078;height:0}.trhide,#pTk{display:none!important}.trbtnwrap{margin:0 0 12px}.trbtnwrap .lg-btn{width:100%}.trni{display:block;width:22px;height:22px;margin:0 auto 3px;background:currentColor;-webkit-mask:var(--i) center/contain no-repeat;mask:var(--i) center/contain no-repeat}.trico{position:relative;width:24px;height:24px;border-radius:50%;display:inline-flex!important;align-items:center;justify-content:center;flex:none!important;overflow:hidden;vertical-align:middle;margin-right:8px;font-size:9px;font-weight:700}.trico i{font-style:normal;color:#fff}.trico img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000}.trico.ok{background:none!important}.trico.ok i{display:none}.trlb{color:var(--mu);margin-bottom:10px}.trshr{width:28px;height:28px;display:inline-flex!important;align-items:center;justify-content:center;border:1px solid var(--ln)!important;border-radius:8px;color:var(--mu)}';
(function(){var st=document.createElement("style");st.textContent=TRCSS;document.head.appendChild(st)})();
function trSet(){try{localStorage.setItem("vzTr.set",JSON.stringify(TRS))}catch(e){}}
function trDrSave(){try{localStorage.setItem("vzTr.dr:"+pSym,JSON.stringify(trDR))}catch(e){}}
function trDrLoad(){try{trDR=JSON.parse(localStorage.getItem("vzTr.dr:"+pSym)||"[]")}catch(e){trDR=[]}if(!Array.isArray(trDR))trDR=[]}
function trAcc(){return selP!==null?PERPS[selP]:null}
function trNote(s,bad){var e=$("trNote");if(!e)return;e.textContent=s;e.style.display="block";e.style.color=bad?"#F6465D":"#eaecef";clearTimeout(trNoteT);trNoteT=setTimeout(function(){e.style.display="none"},4000)}
function trSheet(h){$("trSb").innerHTML=h;$("trSh").classList.add("on")}
function trShut(){$("trSh").classList.remove("on")}
var TRSHARE='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V4"/><path d="M8 8l4-4 4 4"/><path d="M5 13v6h14v-6"/></svg>';
var TRTOOLS=[["cross","&#10010;"],["l","&#9585;"],["h","&#9776;"],["f","Fib"],["m","&#128207;"],["x","T"]];
var TRIC={"chart": "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", "book": "iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAANTklEQVR42u2da6xcVRXHf+vM3PYWsBQKgvIuUdQSERFQIxqIIfhBRSVigJj4xRBFo3zhi8EQ/aaoMRKFABqiEBWiwWiIkZcCxoAYlVqNCAqUtoBQSh/3zp2Zvx9m7dt9d89r7mPmVGYnJzN37pk9673/a5191oHJmIzJmIzJmIzJmIzJmIzJmIzJmIzJmIzJeLUMm4ig3pC0QFZmpuWYt71ChFqJcgVouRhYZprJeVXBazM8wInP3Cp6Q3635W/7o1aIpMz5l5n1h6TZnOb+2BQQhJcKXdIRwNHA64F1wCr/1xzwIrANeA54LhZ60XwrIfQcmtcChwLHAkc4zW03rDlgO/As8LyZ7cyRw6INyBYp+PkflHQUcBbwPuAM4CTgKGC6YIoZV8C/gUeBB4CHzGxr7FHLqQgXPMFinYe3AecB7wLeCBwJHF4Slne4Ev7uNN9vZo8mctFyeEVdps6RdJOkp7T/6Emak9RJjjlJ3Zzzt0i6WdJ5cWgLgltKeIznkLRR0pck/V7Snhw6uk5jenQl9ZNzd0u6V9Llko5Jlb0iCMAZukDSXS7kMDqSZhMh9wqObsRoUEw87pP00diyUgQy5PqCpHMl3S5pV2IknZo093Jojvl/VtL3JJ2+rEJ35luSMklTkq6PfnTOhV5FeJ2j60zF3nG3pPcGq6qyLKc3HG3/7GRJP4qE1Y8EXkZPP+coU0gYeyRdFeiNaWKJFmSSDpG0yYnZO4Tgy5jIO2KvmJF0TaAlZSQRujnT4dxPuGUqUnAVPf2So8qA9vpvPSlpXSrLIiVkRcI3s56kUyRtjPDvK75wt2os7nm5QFWOgM/dcvTRBq4GbpF0UBoO8+Z2uq8GbgNe5/MEmpcCu63if22X0UxYyN1oj3ZAkdVSgKQpZ+JNwF3AqY54soQIKxF8XYaqFAHQAS4BbnbG8hbnWPjfAK5xwXejeazCUGwZaLZETuuBOySd7bS1ShXgwp+TdBrwK+BEYGd0bn8Fcoo6ltUBLga+7jBvP+t3Bq8FvgjMRsIYdVknVlIXOBn4paRz8pSQJWFnTtJZwJ2O53sRLi7T/krXlFou1M9LuiJx6RAuPwNc6cpqj1j4qUzDb095SFoP3C7pzFQJWUAZ/o/zgF8AxwN7k7gZT2wrZD11zrkkJIPJ9y6O6jQ2hqKjRUJvR7W2aQ+HrwV+ImmDyzoDyFz4fUnnAHf4iXM+EUkMbS0h5i81vpLQEUKMXCGtgrBjKyjsogLnVPQ+c9pmPKTfKel4p9sCA4cA3/HaTacA5dgY3Tpmup0DBlpRzWkljGMYhWSJ/Cwy5L3ARuDLAdhk/uYgL0IpR/hxGVYjZibvM8uhLzUOGxOdef9Topw+cFyoAsdE9wsmVbSi92jGsAL00YjLCwlaTNFRqLAuQEFl7tqNFNQZg4DT0Y+s3kZs9XXo7EUKUESryhIxVTAcXns1zl9pJfTHAIOHoVPD0FimAIs0mipgnKNfEHoac4kzoS2j+HKnZRVaI7F6jdG6FCkgG6K2NI41QDXXLWVDCHecjCrHcy3ntUlKqMqW5zF1+EKvBowqgoCjHq1E6K0x5yhDKyJUc9s1QlBeKWLc8X+1G0zLX1exAltslkBjv4ZcF7hCv+rEEs1qhNakSAFZlHVONVQBqTL2WbVvahjGom3MSY8l8b+WhTUsDCmF0nVKzVlFLWiUysg83HQ9m2zlwGNrgMCrdtFZHQUoWuDyikyjtv5g+WtcAd0kP1HDrX+BIYVFOKtpdRQkFOPINFclzIlmJmFlaDLI0uqUIihZUMahiHZDBV+2VhblMQsubquGO3UawGDA/ONAYnXXqVaFAizPA1TDA3oNs7C8ZHBcyojXzFgBypHv/Gd1PCCriGfjjrVNux5gVJf550FDnUW4vYSaxzgV0gQPzXLKJgBzYRf1MApoQimiqUJPEU6Wsx7EsgtrqQ0DQ8fJcFX4a5LVp2Enr1LbrZvlluHaJlleE+FoHbqtTAHK8YCmhB0dIIlYYTEuzwNsiInHbv1eTWyqEqhJl4oyYRXE/WESt5Vkqp8D6/oNDzeVC2wdgWZNYSi5P6AfL2wNCkFFkSIrU4ByrKssKRuHJVnOmtAbs2cWZep5yDH3mnBRga3bUNe2BmbnQ3tJnZAyF7l5E4hWDWU0KebneW5WlmSpQAG9hrl5ytA4wqMqkE5VfU1lRDd1Z1zKWLh/rd0QmtINDqobgorWgF5N9xoVno4351Ijkx8LvBw2E27qxY280V9EwjPK5Kps7VIS1muVmrOGKafDwgvyBuxh392cGrPF11FQZxgUFCtinEgjtp5OFGtlZh1g1wEER7tpCLIcFGE5Lt+UTFg1snodCLTGFw7aBRN0o/fjzoBjzF8n5VcDhJ5HQzt9U7bpql+hzXEoJitQTCniGBHCqfP9cBurqrBzHJrKatuLIdgW+T0VKD1bYaHWFXqvIGzHXju/a6Jdg8B2MlH4gS7D3eFuy+TWVXdrLgYm1gkbVsPw0m2SWUWSO+8BZdvTY8FPs3Dfy1JS9x4L73a0ijgeo6AexXtZ62TOSoS0FJ7ISVz3RIIunbfODRpZhF1vYdC87mnH3bsjSBjfLrSKwR7+Q4FjGHRRXOsKDP0TDknCRi/yqqxEgPHGXCvI2FPF9ZPQ1Y54nwOeB/7LoKvjyww6O77ovM747/UTOWXO0zo/jmHQKfI6M3u+Ym2yYRKxoMG2mV0HXFfL1Pc1Qz0IeI0LfNoJP5hBN5Y3A28HTnHipyNh9iKvUBJj43tvrQAsxMJqs28r+y7gP8Bm4C/AX4F/AC+48GcX07HRm2+sNrO9oe0PNW7Ya9dAEVPegy203SraCmiJ28XFvGBd4fyemT3khK9m0CbhDcDZwAeAM11xMGhTk9aCoPh6QIDObfdCAY8DfwL+4AL/F/CMJ3BBgKEHRVvSVKLIOujPgK6kNT6fCtAaDJpOLbhHrAxXv2RmsdvPazs6plzo0/4+zh9C5rqbQbOKjpnJ55j233kJeBD4HXC9K+BCV8ZJPs9eV+ZcgaGEtSGEwD3A3Qw6wNwNPBn1Op1yg2o7b4RXN4g2g/sQptl3/1krNqCIr3DMuvfMRXJ6sYhel4G1c6zfEre+UNK5bqXr/VjrYWR1RFycS4Q7WPpRONkFbAGekPQY8BjwFLAjYn6Nf+8e4F7ga8D7gY+4d6zxUKgcbwyet4VBw6lbgUe8CVWw7J6Z9f2zHnCEpA0M2sicCJwOnODeNx3xlxVk2r1oTdoLbJO0nUGn3S3O/1RZztKuUQ29chEIp04zjR3AVuBpSZuAR4CHzeyfkSVuM7MbJX3f14oPA6tCl9pkvXkA+DNwg5k94Z9PS8Ktck7SsZLewaBb7mke9uK1p24FtgixnVrw3f16W4QQFDoQHg780a2gl4MuqrJJq6GcNInKg37bgd942LjHzF72cNE2s72RYtL7mhf0nJa0Jjr/OOB8D2fvZtBJsQy7LzVfsUTgKdKbAn4NXBAnYmVXu1qLzC6tgqmwTsRzHAVc6scmST8DbjWzzUmI2s9jQ9csM+s4EjkDuMzXkhMTGJuW2ls1eKpbcqnTR6ifrgF1fqhsF1pVXUY5rpuHYrpRjX+jH5+V9FPgRjN72F13KjGYloeZnqS3AlcAH/c8hGghLNrhrYIkbbE1qrKkckHO1XaGZh2liP3vODSW/w7J2O2zgmw4LOLrgE8Dl0m6EfiKmb0gaTqESzPrSDoWuAr4pIOErvOVtz9fOeFwuQuKebWzrhvP1vnIGaCYpMuB75ak1zs8UdnpsXq7Y/tdDDrqxhnjlCOWQ/04nEEzwMM8zBzJwh5vMWzNy4JDW4K2L9ZfMLMHo5j/QeBbwIYImbQSb4sz4rSt5SyDlvo7PGfZxqBV/UsRfA4GMxUlloG/w/yzg/3v9c5znrdtBc43s8ckZSEhMO+ceCmD9o9dLzc86VDxKSdwN7DbzGYWtUINrDaUJ04B3unw8rScLLiVY1FdV+wu4Frg58CngM+5kGcKBK+oBBxyis3AfcDDwCYXzO6weC+Sv9VO31ovvxzn68/JbhxPA980s79JMjNb2Nm77lMgosd/1LlxQvHCkzNXG3gLg4cpXOQQMa4/ZQmyCG6cuUEcHHleHlYPnvYKcD+DdswPAJvjTDjhLRsSdAz1XJzQKnS/xTLB17GAFyxOi31cR6Ts+bkT+JgB72HQK/pjnvwFRcR3HoZQ0nLhZzkhMyhpO3AT8MOAphLlp8Bi0Tzm8Jf2tMgY5VM26hLtbefbsTd67/+vStoWPa9gruBhEN3oeQazfv5OSd+WdEKsYP+dVtrff0m9/v8fRvzwhcgygyJ+ED0kYbZACTPRQxpu9zxg3tJDD/86x6tdARY9vSNWxMWSnokeyBAemTLj1i9Jj0u6qK7gmYxKJSxQhKQNkm7LeaBOR9INko4Oa1mR4JvGszVVEXlX70Kp17u8f8jh7HPAj83stxGQ6BeVgCcKWJoSwrO6egXwUVGpurFCPyAUUKKIuMIYcoN+o6DdqBUQsroRewMHipVPxmRMxmRMxmRMRgPH/wASTlR+TQCfVQAAAABJRU5ErkJggg==", "trade": "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", "pos": "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", "acc": "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"};
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
function pEqPts(a,now,eq){
  var tr=(a.trades||[]).slice().sort(function(x,y){return x.at-y.at}),t0=tr.length?Math.min(a.firstOpen||tr[0].at,tr[0].at):(a.firstOpen||now-36e5),pts=[{t:t0,b:a.size,e:a.size}],b=a.size;
  tr.forEach(function(x){b+=x.p;pts.push({t:Math.max(x.at,t0),b:b,e:b})});
  pts.push({t:Math.max(now,t0+6e4),b:a.balance,e:eq});return pts}
function pEqRender(a){
  var el=$("pEq");if(!el||pEqHov)return;
  var n=Date.now(),s=pReady(a)?PE.snapshot(a,BK):null,eq=s?s.equity:a.balance,sig=[a.trades.length,a.balance,Math.round(eq*100),pEqR,lang].join("|");
  if(sig===pEqSig&&el.firstChild)return;if(el.firstChild&&n-pEqAt<800)return;
  pEqAt=n;pEqSig=sig;
  var rng='<div class="eqs">'+[["7d","7D"],["30d","30D"],["all",L("Semua","All")]].map(function(r){return'<button type="button" data-pa="eqr" data-v="'+r[0]+'" class="'+(pEqR===r[0]?"on":"")+'">'+r[1]+'</button>'}).join("")+'</div>';
  if(!a.trades.length&&!Object.keys(a.positions).length){el.innerHTML='<div class="eqh"><b>Equity curve</b>'+rng+'</div><p style="margin:10px 0 0;color:#9aa0a6">'+L("Belum ada trade. Kurva muncul setelah ada hasil.","No trades yet. The curve appears after the first result.")+'</p>';return}
  var pts=pEqPts(a,n,eq),days={"7d":7,"30d":30}[pEqR];
  if(days){var cut=n-days*864e5;if(pts[0].t<cut){var k=0;pts.forEach(function(p,i){if(p.t<=cut)k=i});var bs=pts[k];pts=[{t:cut,b:bs.b,e:bs.e}].concat(pts.filter(function(p){return p.t>cut}))}}
  var vals=[];pts.forEach(function(p){vals.push(p.b,p.e)});
  var lo0=Math.min.apply(null,vals),hi0=Math.max.apply(null,vals),pad=(hi0-lo0)*.08||Math.max(Math.abs(hi0)*.01,1),nc=pEqNice(lo0-pad,hi0+pad),lo=nc.lo,hi=nc.hi;
  var W=360,H=230,Lm=50,Rm=10,Tm=10,Bm=24,t0=pts[0].t,t1=Math.max(pts[pts.length-1].t,t0+6e4);
  var X=function(t){return Lm+(t-t0)/(t1-t0)*(W-Lm-Rm)},Y=function(v){return Tm+(hi-v)/(hi-lo)*(H-Tm-Bm)},col=eq>=a.size?"#2EBD85":"#F6465D";
  var fm=function(v){return hi-lo<20?v.toFixed(2):Math.round(v).toLocaleString("en-US")},f1=function(v){return v.toFixed(1)};
  var line=pts.map(function(p,i){return(i?"L":"M")+f1(X(p.t))+" "+f1(Y(p.e))}).join(" "),
  area=line+" L"+f1(X(pts[pts.length-1].t))+" "+(H-Bm)+" L"+f1(X(t0))+" "+(H-Bm)+" Z",bal="";
  pts.forEach(function(p,i){bal+=(i?"L"+f1(X(p.t))+" "+f1(Y(pts[i-1].b))+" L":"M")+f1(X(p.t))+" "+f1(Y(p.b))+" "});
  var grid=nc.t.map(function(v){var y=f1(Y(v));return'<line x1="'+Lm+'" x2="'+(W-Rm)+'" y1="'+y+'" y2="'+y+'" stroke="#1a1d21"/><text x="'+(Lm-6)+'" y="'+(+y+3)+'" text-anchor="end">'+fm(v)+'</text>'}).join(""),xl="",i;
  for(i=0;i<5;i++){var tt=t0+(t1-t0)*i/4;xl+='<text x="'+f1(Lm+(W-Lm-Rm)*i/4)+'" y="'+(H-6)+'" text-anchor="'+(i===0?"start":i===4?"end":"middle")+'">'+new Date(tt).toLocaleDateString(lang==="id"?"id-ID":"en-US",{month:"short",day:"numeric"})+'</text>'}
  el.innerHTML='<div class="eqh"><b>Equity curve</b>'+rng+'</div><div id="pEqTip"></div>'
   +'<svg id="pEqSvg" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Equity curve"><defs><linearGradient id="pEqG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+col+'" stop-opacity=".28"/><stop offset="1" stop-color="'+col+'" stop-opacity="0"/></linearGradient></defs>'+grid+xl
   +'<path d="'+area+'" fill="url(#pEqG)"/><path d="'+bal+'" fill="none" stroke="#6b7078" stroke-width="1.5" stroke-dasharray="4 3"/><path d="'+line+'" fill="none" stroke="'+col+'" stroke-width="2" stroke-linejoin="round"/>'
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
  TRV.innerHTML='<div class="trhd"><button type="button" id="trX" aria-label="Back">&#8249;</button><button type="button" id="trSymB" class="trsym"></button><div class="trg"></div><div class="trpr"><b id="trPx">-</b><small id="trChg"></small></div><button type="button" id="trGear" aria-label="Settings">&#9881;</button></div>'
  +'<div class="trtf" id="trTf"></div><div class="trmain"><div class="trpane on" id="trP_chart"><div class="trtools" id="trTools"></div><div class="trcw"><div id="trChEl"></div><canvas id="trOv"></canvas></div></div><div class="trpane" id="trP_book"></div><div class="trpane" id="trP_pos"></div><div class="trpane" id="trP_acc"></div></div>'
  +'<div id="trNote" role="status"></div><div class="tract" id="trAct"><button type="button" class="trbl" data-s="buy">Buy / Long</button><button type="button" class="trbs" data-s="sell">Sell / Short</button></div><nav class="trnav" id="trNav"></nav><div class="trsh" id="trSh"><div class="trsb" id="trSb"></div></div>';
  document.body.appendChild(TRV);
  $("trNav").innerHTML=[["chart","Chart"],["book","Book"],["trade","Trade","c"],["pos",L("Posisi","Positions")],["acc",L("Akun","Account")]].map(function(n){return'<button type="button" data-n="'+n[0]+'" class="'+(n[2]||"")+(n[0]==="chart"?" on":"")+'">'+(n[2]?'<b>'+trIcn(n[0],"width:26px;height:26px;margin:0;background:#04140d")+'</b>':trIcn(n[0]))+n[1]+'</button>'}).join("");
  TRV.addEventListener("error",function(e){var im=e.target;if(!im||!im.classList||!im.classList.contains("trimg"))return;var n=+im.dataset.n+1;if(n<TRSRC.length){im.dataset.n=n;im.src=TRSRC[n](im.dataset.b)}else im.remove()},true);
  TRV.addEventListener("load",function(e){var im=e.target;if(im&&im.classList&&im.classList.contains("trimg"))im.parentNode.classList.add("ok")},true);
  TRV.addEventListener("click",trClick);
  var ov=$("trOv");
  ov.onpointerdown=function(e){var p=trPt(e);if(!p)return;
    if(trTool==="h"){trDR.push({t:"h",a:p});trDrSave();trTool="cross";trBar();return}
    if(trTool==="x"){var s=prompt(L("Teks:","Text:"));if(s){trDR.push({t:"x",a:p,s:s.slice(0,40)});trDrSave()}trTool="cross";trBar();return}
    trTmp={t:trTool,a:p,b:p};try{ov.setPointerCapture(e.pointerId)}catch(x){}};
  ov.onpointermove=function(e){if(trTmp){var p=trPt(e);if(p)trTmp.b=p}};
  ov.onpointerup=function(){if(!trTmp)return;if(trTmp.t==="m")trRul=trTmp;else{trDR.push(trTmp);trDrSave()}trTmp=null;trTool="cross";trBar()};
  trBindDrag($("trChEl"));
}
function trBar(){
  $("trTools").innerHTML=TRTOOLS.map(function(t){return'<button type="button" data-tt="'+t[0]+'" class="'+(trTool===t[0]?"on":"")+'">'+t[1]+'</button>'}).join("")+"<hr>"
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
function trVc(k){return{time:k[0]/1e3,value:k[5],color:k[4]>=k[1]?"#2EBD8566":"#F6465D66"}}
function trCv(k){return TRS.type==="line"?{time:k[0]/1e3,value:k[4]}:{time:k[0]/1e3,open:k[1],high:k[2],low:k[3],close:k[4]}}
function trMk(){
  var el=$("trChEl");if(!el)return;
  if(!window.LightweightCharts){if(!pLwFail)pLoadLW();return}
  if(trCh){try{trCh.remove()}catch(e){}trCh=trCs=trVs=null}
  var C=LightweightCharts,g=TRS.grid?"#14171b":"rgba(0,0,0,0)",dc=PDEC[pSym]||2,u=TRS.col==="gr"?"#2EBD85":"#ffffff",d="#F6465D",pf={type:"price",precision:dc,minMove:PTICK[pSym]||Math.pow(10,-dc)};
  trCh=C.createChart(el,{autoSize:true,layout:{background:{type:"solid",color:"#000"},textColor:"#848e9c",fontSize:11},grid:{vertLines:{color:g},horzLines:{color:g}},rightPriceScale:{borderColor:"#23262d"},timeScale:{borderColor:"#23262d",timeVisible:true,rightOffset:6},crosshair:{mode:TRS.magnet?1:0}});
  trCs=TRS.type==="line"?trCh.addLineSeries({color:"#FFB43A",lineWidth:2,priceFormat:pf}):trCh.addCandlestickSeries({upColor:u,downColor:d,borderUpColor:u,borderDownColor:d,wickUpColor:u,wickDownColor:d,priceFormat:pf});
  trVs=trCh.addHistogramSeries({priceFormat:{type:"volume"},priceScaleId:"v",visible:TRS.vol});
  trCh.priceScale("v").applyOptions({scaleMargins:{top:.82,bottom:0}});
  trLines=[];trLsig="";
  trCs.setData(trCD.map(trCv));trVs.setData(trCD.map(trVc));trCh.timeScale().scrollToRealTime();
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
    var m=+tk.lastPrice>0?+tk.lastPrice:(b.bid+b.ask)/2,per=(TFSEC[pTf]||900)*1e3,st=Math.floor(n/per)*per,l=trCD[trCD.length-1];
    if(l[0]===st){l[4]=m;if(m>l[2])l[2]=m;if(m<l[3])l[3]=m}else if(st>l[0]){l=[st,l[4],Math.max(l[4],m),Math.min(l[4],m),m,0];trCD.push(l)}
    if(l[0]===st){try{trCs.update(trCv(l));trVs.update(trVc(l))}catch(e){}}
  }
  trSyncLines(a);
  if(n-trAt>1000){trAt=n;trRender()}
  if(trTab==="book"&&n-trBkAt>1500){trBkAt=n;trBook()}
}
function trSyncLines(a){
  if(!trCs||trDrag)return;var p=a.positions[pSym],b=BK[pSym],it=[];
  if(p){var px=b?(p.side==="long"?b.bid:b.ask):0,u=px?(p.side==="long"?px-p.entry:p.entry-px)*p.qty:null;
    it.push({k:"entry",price:p.entry,color:"#FFB43A",st:0,title:p.side.toUpperCase()+" "+p.lev+"x | "+(u===null?"-":pmu(u))+((p.sl||p.tp)?"":" | tap = SL/TP")});
    if(p.sl>0)it.push({k:"sl",price:p.sl,color:"#F6465D",st:2,title:pStopLbl("sl",p,p.sl)});if(p.tp>0)it.push({k:"tp",price:p.tp,color:"#2EBD85",st:2,title:pStopLbl("tp",p,p.tp)})}
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
  if(!p.sl)trApplyLevel("sl",pDefStop(p,"sl"));if(!p.tp)trApplyLevel("tp",pDefStop(p,"tp"));
  trNote(had?L("Geser garis SL/TP untuk mengubah.","Drag the SL/TP lines to change them."):L("SL/TP dipasang. Geser garisnya untuk atur.","SL/TP added. Drag the lines to adjust."))}
function trBindDrag(el){
  var KD={sl:1,tp:1},KE={entry:1};
  el.addEventListener("pointerdown",function(e){
    if(!trCs||trTool!=="cross")return;var tol=e.pointerType==="touch"?22:12,hit=trNear(e.clientY,KD,tol);
    if(hit){trDrag={l:hit,price:0};trCh.applyOptions({handleScroll:false,handleScale:false});try{el.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault();return}
    trTapE=trNear(e.clientY,KE,tol)?{x:e.clientX,y:e.clientY,t:Date.now()}:null},true);
  el.addEventListener("pointermove",function(e){
    if(trDrag){var v=trCs.coordinateToPrice(e.clientY-el.getBoundingClientRect().top);
      if(v>0){var a=trAcc(),p=a&&a.positions[pSym];trDrag.price=pRound(v);trDrag.l.t=p?pStopLbl(trDrag.l.k,p,trDrag.price):trDrag.l.k.toUpperCase();trDrag.l.h.applyOptions({price:trDrag.price,title:trDrag.l.t})}
      e.preventDefault();return}
    if(trTapE&&(Math.abs(e.clientX-trTapE.x)>8||Math.abs(e.clientY-trTapE.y)>8))trTapE=null},true);
  el.addEventListener("pointerup",function(){
    if(trDrag){trDragEnd();return}
    var t=trTapE;trTapE=null;if(t&&Date.now()-t.t<600)trStopsFromEntry()},true);
  el.addEventListener("pointercancel",function(){trTapE=null;trDragEnd()},true);
  el.addEventListener("touchmove",function(e){if(trDrag)e.preventDefault()},{passive:false})}
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
  c.lineWidth=1.5;c.strokeStyle=c.fillStyle="#FFB43A";c.font="11px system-ui";
  trDR.concat([trTmp,trRul]).filter(Boolean).forEach(function(d){
    var x1=X(d.a),y1=Y(d.a);if(y1==null)return;
    if(d.t==="h"){c.beginPath();c.moveTo(0,y1);c.lineTo(w,y1);c.stroke();c.fillText(d.a.price.toFixed(dc),6,y1-4);return}
    if(d.t==="x"){c.fillText(d.s,x1==null?6:x1,y1);return}
    var x2=X(d.b),y2=Y(d.b);if(x1==null||x2==null||y2==null)return;
    if(d.t==="l"){c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke()}
    else if(d.t==="f"){[0,.236,.382,.5,.618,.786,1].forEach(function(v){var pr=d.a.price+(d.b.price-d.a.price)*v,y=trCs.priceToCoordinate(pr);if(y==null)return;c.globalAlpha=.7;c.beginPath();c.moveTo(Math.min(x1,x2),y);c.lineTo(w,y);c.stroke();c.globalAlpha=1;c.fillText(v+" ("+pr.toFixed(dc)+")",Math.min(x1,x2)+4,y-3)})}
    else if(d.t==="m"){var dv=d.b.price-d.a.price,up=dv>=0,bars=Math.round((d.b.time-d.a.time)/(TFSEC[pTf]||900));
      c.save();c.strokeStyle=c.fillStyle=up?"#2EBD85":"#F6465D";c.setLineDash([5,4]);c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.setLineDash([]);
      c.fillText((dv>=0?"+":"")+dv.toFixed(dc)+" ("+(dv/d.a.price*100).toFixed(2)+"%) | "+bars+" bar",Math.min(x1,x2)+4,Math.min(y1,y2)-6);c.restore()}
  })}
function trRow(l,v,p){p=isFinite(p)?Math.max(0,Math.min(100,p)):0;return'<div class="trrw"><span>'+l+'</span><span>'+v+'</span></div><div class="trbar"><i style="width:'+p+'%"></i></div>'}
function trRender(){
  var a=trAcc();if(!a)return;var rd=pReady(a),s=rd?PE.snapshot(a,BK):null,on=a.status==="active";
  if(trTab==="pos"){
    var sig=JSON.stringify([a.positions,a.orders,a.trades.length,on]);
    if(sig!==trPSig){trPSig=sig;
      var hist=PE.ledger(a).trades.slice(0,15);
      $("trP_pos").innerHTML=(Object.keys(a.positions).map(function(k){var p=a.positions[k],dc=PDEC[k]||2;
        return'<div class="trcard"><div class="trrw"><b style="display:flex;align-items:center">'+trIco(pBase(k))+esc(pBase(k))+'&nbsp;<span class="'+(p.side==="long"?"pup":"pdn")+'">'+p.side.toUpperCase()+" "+p.lev+'x</span></b><span class="trrw" style="gap:8px"><b data-tp="'+k+'"></b><button type="button" class="trshr" data-trc="card" data-s="'+k+'" aria-label="Share PnL">'+TRSHARE+'</button></span></div><div class="trmu">'+p.qty+" @ "+p.entry.toFixed(dc)+" | Margin "+f2(p.qty*p.entry/p.lev)+" USDT"+'<br>SL '+(p.sl||"-")+" | TP "+(p.tp||"-")+'</div>'+(on?'<div class="trbtns"><button type="button" data-trc="stops" data-s="'+k+'">SL/TP</button><button type="button" data-trc="close" data-s="'+k+'">'+L("Tutup","Close")+'</button></div>':"")+'</div>'}).join("")||'<p class="trmu">'+L("Belum ada posisi.","No open positions.")+'</p>')
      +a.orders.map(function(o){return'<div class="trcard trrw"><span>'+esc(pBase(o.symbol))+" Limit "+o.side.toUpperCase()+" "+o.qty+" @ "+o.price+'</span><button type="button" data-trc="cancel" data-id="'+o.id+'" class="trbtns" style="margin:0;padding:6px 12px;border:1px solid var(--ln);border-radius:999px">'+L("Batal","Cancel")+'</button></div>'}).join("")
      +'<h4>'+L("Riwayat trade","Trade history")+'</h4>'+(hist.map(function(r,j){return'<div class="trrw trmu" style="padding:4px 0"><span>'+esc(pBase(r.s))+" "+(r.d==="BUY"?"LONG":"SHORT")+(r.w?" "+r.w.toUpperCase():"")+'</span><span class="trrw" style="gap:8px"><span class="'+pc(r.p)+'">'+pmu(r.p)+'</span><button type="button" class="trshr" data-trc="tcard" data-j="'+j+'" aria-label="Share PnL">'+TRSHARE+'</button></span></div>'}).join("")||'<p class="trmu">'+L("Belum ada trade tertutup.","No closed trades yet.")+'</p>');
    }
    document.querySelectorAll("#trP_pos [data-tp]").forEach(function(e){var z=s&&s.positions.filter(function(p){return p.symbol===e.getAttribute("data-tp")})[0];e.textContent=z?pmu(z.upnl):"-";e.className=z?pc(z.upnl):""});
  }else if(trTab==="acc"){
    var eq=s?s.equity:a.balance,pf=eq-a.size,tg=a.size*PTARGET/100;
    $("trP_acc").innerHTML='<div class="trcard"><div class="trmu">'+esc(a.program)+" "+kfmt(a.size)+" | ID "+esc(a.id)+'</div><div class="trbig">'+f2(eq)+" USDT"+'</div><div class="'+pc(pf)+'">'+(pf<0?"-":"+")+""+f2(Math.abs(pf))+" USDT"+" ("+(pf/a.size*100).toFixed(2)+'%)</div>'
    +'<div class="trg2"><div><small>Balance</small>'+f2(a.balance)+" USDT"+'</div><div><small>Unrealized</small>'+(s?pmu(s.unrealized):"-")+'</div><div><small>'+L("Margin terpakai","Used margin")+'</small>'+f2(s?s.usedMargin:PE.usedMargin(a))+" USDT"+'</div><div><small>'+L("Margin bebas","Free margin")+'</small>'+(s?""+f2(s.freeMargin)+" USDT":"-")+'</div></div></div>'
    +'<div class="trcard"><b>Risk</b>'+(s?trRow("Daily drawdown ("+a.rules.dailyDd+"%)",""+f2(s.dailyLoss)+" / "+f2(s.dailyLimit)+" USDT",s.dailyLoss/s.dailyLimit*100)+trRow("Max drawdown ("+a.rules.maxDd+"%)",""+f2(s.maxLoss)+" / "+f2(s.maxLimit)+" USDT",s.maxLoss/s.maxLimit*100)+trRow("Target ("+PTARGET+"%)",""+f2(Math.max(pf,0))+" / "+f2(tg)+" USDT",pf/tg*100)+'<p class="trmu">Fee '+f2(a.fees)+" USDT"+" | Funding "+pmu(a.funding)+'</p>':'<p class="trmu">'+L("Menunggu harga...","Waiting for prices...")+'</p>')+(on?"":'<p class="pdn">'+breachMsg(a)+'</p>')+'</div>';
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
  +'<label>Leverage <b id="trLv" style="color:#eaecef">'+lev+'x</b>'+(lk?' <small>('+L("terkunci, ada posisi","locked, position open")+')</small>':"")+'<input id="trLev" type="range" min="1" max="'+mx+'" value="'+lev+'"'+(lk?" disabled":"")+'></label>'
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
  trSheet('<h3>'+L("Pengaturan chart","Chart settings")+'</h3>'+t("vol","Volume")+t("grid","Grid")+t("magnet",L("Magnet (snap ke OHLC)","Magnet (snap to OHLC)"))+sg("type",L("Tipe chart","Chart type"),[["candle","Candle"],["line","Line"]])+sg("col",L("Warna candle","Candle colors"),[["wr",L("Putih/Merah","White/Red")],["gr",L("Hijau/Merah","Green/Red")]])+'<button type="button" class="trgo" id="trClr" style="background:var(--ln);color:#eaecef">'+L("Hapus semua gambar","Clear all drawings")+'</button>');
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
