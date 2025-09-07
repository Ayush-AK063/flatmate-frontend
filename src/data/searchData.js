const indiaStatesWithCities = [
    {
        state: 'Andhra Pradesh',
        cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Kakinada', 'Rajahmundry', 'Tirupati', 'Anantapur', 'Kadapa', 'Vizianagaram', 'Eluru', 'Ongole', 'Nandyal', 'Machilipatnam', 'Adoni', 'Tenali', 'Proddatur', 'Chittoor', 'Hindupur', 'Bhimavaram', 'Madanapalle', 'Srikakulam', 'Anakapalle', 'Tadepalligudem', 'Dharmavaram', 'Gudivada', 'Narasaraopet', 'Tadipatri', 'Chilakaluripet', 'Kavali', 'Srikalahasti', 'Narasapuram', 'Gudur', 'Tuni', 'Tenkasi', 'Repalle', 'Mandapeta', 'Venkatagiri', 'Jaggayyapeta', 'Nuzvid', 'Bapatla', 'Naidupeta', 'Ponnur', 'Markapur', 'Pulivendula', 'Tekkali', 'Kandukur', 'Sattenapalle', 'Rayachoti', 'Tiruvuru', 'Kadiri', 'Srisailam', 'Guntakal', 'Kalyandurg', 'Pithapuram', 'Palacole', 'Bobbili', 'Samalkot', 'Amalapuram', 'Mangalagiri', 'Salur', 'Yemmiganur', 'Rajampet', 'Narsipatnam', 'Ramachandrapuram', 'Paderu', 'Pileru', 'Vinukonda', 'Macherla', 'Gudlavalleru', 'Mandapalli', 'Ravulapalem', 'Jammalamadugu', 'Peddapuram', 'Chirala', 'Nandikotkur', 'Yanam', 'Pamur', 'Nellimarla', 'Palakollu', 'Mogalthur', 'Kanigiri', 'Kakinada Port', 'Kovvur', 'Manuguru', 'Atmakur', 'Seetharamapuram', 'Bheemunipatnam', 'Rajam', 'Sompeta', 'Kaviti', 'Chodavaram', 'Elamanchili', 'Nidadavole', 'Puttur', 'Amudalavalasa', 'Nellipaka', 'Thullur', 'Kovur', 'Kothapeta', 'Bhavanipuram', 'Nagari', 'Sarapaka', 'Vuyyuru', 'Chandragiri', 'Mogalthur', 'Tadikonda', 'Sattenapalli', 'Gannavaram', 'Kondapi', 'Razole', 'Narasannapeta', 'Nadim Tiruvuru', 'Kotabommali', 'Vemuru', 'Veligandla', 'Dharmavaram', 'Jammalamadugu', 'Sompeta', 'Kaviti', 'Chodavaram', 'Nellipaka', 'Thullur', 'Kovur', 'Kothapeta', 'Bhavanipuram', 'Sarapaka', 'Vuyyuru', 'Chandragiri', 'Mogalthur', 'Tadikonda', 'Sattenapalli', 'Gannavaram', 'Kondapi', 'Razole', 'Narasannapeta', 'Nadim Tiruvuru', 'Kotabommali', 'Vemuru', 'Veligandla', 'Gajapathinagaram', 'Tiruvuru', 'Akkarampalle', 'Vepagunta', 'Mandalapalle', 'Peda Boddepalle', 'Kotauratla', 'Cheedikada', 'Kapileswarapuram', 'Devarapalle', 'Chillakallu', 'Kakarapalle', 'Balijipeta', 'Nakkapalli', 'Kadthal', 'Chintapalle', 'Gurla', 'Madakasira', 'Jangareddigudem', 'Nidadavolu', 'Kota', 'Kuppam', 'Ibrahimpatnam', 'Bhimadole', 'Tallapudi', 'Mogili', 'Guntupalle', 'Kanapaka', 'Kakinada SEZ', 'Thotlavalluru', 'Zahirabad', 'Pallapatti', 'Narasaraopet', 'Gopannapalle', 'Rajamahendri', 'Challapalle', 'Vempalle', 'Chilakaluripet', 'Gajapathinagaram', 'Ramachandrapuram', 'Puttur', 'Cherlopalle', 'Nallajerla', 'Pedagantyada', 'Duvvur', 'Nallapadu', 'Rajupalem', 'Vemulawada', 'Mylavaram', 'Guntur', 'Chandur', 'Nallapadu', 'Akkayapalle', 'Gandepalle', 'Anantapur', 'Ravulapalem', 'Pedana', 'Ponnapuram', 'Bandarulanka', 'Tadikonda', 'Kadiri', 'Guntur', 'Srikalahasti', 'Punganur', 'Vijayawada', 'Mylavaram', 'Vijayawada', 'Nellimarla', 'Palakollu', 'Giddalur', 'Madanapalle', 'Gudur', 'Bhimavaram', 'Guntur', 'Nagaram', 'Kandukur', 'Jammalamadugu', 'Kothapeta', 'Nuzvid', 'Kavali', 'Narasapuram', 'Nellore', 'Rajahmundry', 'Rajampet', 'Vijayawada', 'Rajendranagar', 'Rajampet', 'Tadepalligudem', 'Tirupati', 'Visakhapatnam', 'Tenali', 'Srikakulam', 'Vijayawada', 'Vijayawada', 'Bhimavaram', 'Kadapa', 'Machilipatnam', 'Tadepalligudem', 'Guntur', 'Nuzvid', 'Mandapeta', 'Kavali', 'Ongole', 'Nellore', 'Visakhapatnam', 'Anakapalle', 'Kakinada', 'Rajahmundry', 'Tirupati', 'Anantapur', 'Kadapa']
    },
    {
        state: 'Arunachal Pradesh',
        cities: ['Itanagar', 'Naharlagun', 'Pasighat', 'Roing', 'Tezu', 'Ziro', 'Tawang', 'Bomdila', 'Along', 'Daporijo', 'Koloriang', 'Seppa', 'Yingkiong', 'Aalo', 'Jairampur', 'Changlang', 'Khonsa', 'Namsai', 'Bordumsa', 'Bomja', 'Banderdewa', 'Bhalukpong', 'Namsang', 'Naharlagun', 'Rupa', 'Pangin', 'Daporijo', 'Mechuka', 'Tuting', 'Hawai', 'Yomcha', 'Bomdila', 'Taliha', 'Pasighat', 'Rumgong', 'Nacho', 'Tawang', 'Ziro', 'Koloriang', 'Sagalee', 'Seijosa', 'Raga', 'Sille', 'Yomcha', 'Daporijo', 'Pakke Kessang', 'Boleng', 'Anini', 'Hayuliang', 'Manmao', 'Tezu', 'Miao', 'Tirap', 'Bameng', 'Balemu', 'Bana', 'Basar', 'Beri', 'Bhalukpong', 'Bomdila', 'Changlang', 'Daporijo', 'Deomali', 'Dirang', 'Dumporijo', 'Gandhigram', 'Gensi', 'Hawai', 'Huri', 'Itanagar', 'Jairampur', 'Kalaktang', 'Kamalpur', 'Kangku', 'Khonsa', 'Koloriang', 'Longding', 'Lumla', 'Miao', 'Namchik', 'Namsai', 'Nirjuli', 'Pangin', 'Pasighat', 'Raga', 'Roing', 'Rumgong', 'Sagalee', 'Seijosa', 'Seppa', 'Shergaon', 'Sille', 'Taliha', 'Tawang', 'Tezu', 'Tuting', 'Yachuli', 'Yingkiong', 'Yomcha', 'Zemithang', 'Ziro', 'Anini', 'Bameng', 'Balemu', 'Bana', 'Banderdewa', 'Basar', 'Beri', 'Bhalukpong', 'Bhismaknagar', 'Bomdila', 'Changlang', 'Chongkham', 'Daporijo', 'Deomali', 'Dirang', 'Dumporijo', 'Gandhigram', 'Gensi', 'Hawai', 'Hayuliang', 'Huri', 'Itanagar', 'Jairampur', 'Kamalpur', 'Kangku', 'Kalaktang', 'Kamki', 'Kanubari', 'Kanubari', 'Khonsa', 'Koloriang', 'Longding', 'Lumla', 'Manmao', 'Mechuka', 'Miao', 'Mirem', 'Namchik', 'Namsai', 'Nirjuli', 'Pangin', 'Pangin', 'Pakke Kessang', 'Pangin', 'Pip Sorang', 'Pongchau', 'Raga', 'Roing', 'Rumgong', 'Sagalee', 'Seijosa', 'Seppa', 'Shergaon', 'Sille', 'Taliha', 'Tawang', 'Tezu', 'Tuting', 'Yachuli', 'Yingkiong', 'Yomcha', 'Zemithang', 'Ziro']
    },    
    {
        state: 'Assam',
        cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tezpur', 'Tinsukia', 'Sibsagar', 'Dhubri', 'Goalpara', 'Barpeta', 'Bongaigaon', 'Karimganj', 'Hailakandi', 'Nalbari', 'Diphu', 'North Lakhimpur', 'Dhemaji', 'Kokrajhar', 'Bongaigaon', 'Lakhimpur', 'Nagaon', 'Sivasagar', 'Dhubri', 'Mangaldoi', 'Tinsukia', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Nagaon', 'Silchar', 'Hojai', 'Bongaigaon', 'Dhemaji', 'Karimganj', 'Nalbari', 'Goalpara', 'Dhubri', 'North Lakhimpur', 'Sibsagar', 'Barpeta', 'Mangaldoi', 'Diphu', 'Tezpur', 'Bongaigaon', 'Dhemaji', 'Kokrajhar', 'Hailakandi', 'Karimganj', 'Dhubri', 'Nalbari', 'Dibrugarh', 'Goalpara', 'Sivasagar', 'Mangaldoi', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Silchar', 'Nagaon', 'Tinsukia', 'Sibsagar', 'Dhubri', 'Goalpara', 'Barpeta', 'Bongaigaon', 'Karimganj', 'Hailakandi', 'Nalbari', 'Diphu', 'North Lakhimpur', 'Dhemaji', 'Kokrajhar', 'Lakhimpur', 'Nagaon', 'Sivasagar', 'Mangaldoi', 'Hojai', 'Bongaigaon', 'Dhemaji', 'Karimganj', 'Nalbari', 'Goalpara', 'Dhubri', 'North Lakhimpur', 'Sibsagar', 'Barpeta', 'Mangaldoi', 'Diphu', 'Tezpur', 'Bongaigaon', 'Dhemaji', 'Kokrajhar', 'Hailakandi', 'Karimganj', 'Dhubri', 'Nalbari', 'Goalpara', 'Sivasagar', 'Mangaldoi', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Silchar', 'Nagaon', 'Tinsukia', 'Sibsagar', 'Dhubri', 'Goalpara', 'Barpeta', 'Bongaigaon', 'Karimganj', 'Hailakandi', 'Nalbari', 'Diphu', 'North Lakhimpur', 'Dhemaji', 'Kokrajhar', 'Lakhimpur', 'Nagaon', 'Sivasagar', 'Mangaldoi', 'Hojai', 'Bongaigaon', 'Dhemaji', 'Karimganj', 'Nalbari', 'Goalpara', 'Dhubri', 'North Lakhimpur', 'Sibsagar', 'Barpeta', 'Mangaldoi', 'Diphu', 'Tezpur', 'Bongaigaon', 'Dhemaji', 'Kokrajhar', 'Hailakandi', 'Karimganj', 'Dhubri', 'Nalbari', 'Goalpara', 'Sivasagar', 'Mangaldoi', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Silchar', 'Nagaon', 'Tinsukia', 'Sibsagar', 'Dhubri', 'Goalpara', 'Barpeta', 'Bongaigaon', 'Karimganj', 'Hailakandi', 'Nalbari', 'Diphu', 'North Lakhimpur', 'Dhemaji', 'Kokrajhar', 'Lakhimpur', 'Nagaon', 'Sivasagar', 'Mangaldoi', 'Hojai', 'Bongaigaon', 'Dhemaji', 'Karimganj', 'Nalbari', 'Goalpara', 'Dhubri', 'North Lakhimpur', 'Sibsagar', 'Barpeta', 'Mangaldoi', 'Diphu', 'Tezpur', 'Bongaigaon', 'Dhemaji', 'Kokrajhar', 'Hailakandi', 'Karimganj', 'Dhubri', 'Nalbari', 'Goalpara', 'Sivasagar', 'Mangaldoi']
    },
    {
        state: 'Bihar',
        cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar', 'Chapra', 'Sasaram', 'Dehri', 'Hajipur', 'Siwan', 'Motihari', 'Nawada', 'Bagaha', 'Buxar', 'Kishanganj', 'Sitamarhi', 'Jamalpur', 'Jehanabad', 'Aurangabad', 'Lakhisarai', 'Araria', 'Jamui', 'Gopalganj', 'Madhubani', 'Samastipur', 'Munger', 'Supaul', 'Dumraon', 'Forbesganj', 'Bhabua', 'Chandauli', 'Maharajganj', 'Saharsa', 'Sheikhpura', 'Sheohar', 'Narkatiaganj', 'Raxaul', 'Khagaria', 'Barh', 'Mokameh', 'Bettiah', 'Mirganj', 'Lalganj', 'Raghunathpur', 'Nokha', 'Rafiganj', 'Daudnagar', 'Piro', 'Bikramganj', 'Marhaura', 'Lakhisarai', 'Mahnar Bazar', 'Barh', 'Buxar', 'Sherghati', 'Islampur', 'Warisaliganj', 'Sheohar', 'Barsoi', 'Bihariganj', 'Chandan Bara', 'Chhatapur', 'Maharajganj', 'Teghra', 'Narkatiaganj', 'Nokha', 'Purnia', 'Rajgir', 'Ramnagar', 'Jagdishpur', 'Kasba', 'Naugachhia', 'Begusarai', 'Katoria', 'Kuchaikote', 'Bihpur', 'Chandauli', 'Mohania', 'Sultanganj', 'Bariarpur', 'Raxaul Bazar', 'Tarari', 'Jhanjharpur', 'Mahnar Bazar', 'Nathnagar', 'Sabour', 'Murliganj', 'Rasra', 'Ramnagar', 'Revelganj', 'Rajauli', 'Piro', 'Sheikhpura', 'Saharsa', 'Kahalgaon', 'Maner', 'Marhaura', 'Pupri', 'Bhabua', 'Bhawanipur', 'Bagaha', 'Mahnar Bazar', 'Manihari', 'Kadwa', 'Nawada', 'Warisaliganj', 'Rafiganj', 'Kargahar', 'Lalganj', 'Hilsa', 'Makhdumpur', 'Barbigha', 'Chakia', 'Piro', 'Pupri', 'Madhubani', 'Asarganj', 'Purnia', 'Barh', 'Bettiah', 'Bihpur', 'Bikramganj', 'Chandauli', 'Forbesganj', 'Gaya', 'Hilsa', 'Islampur', 'Jehanabad', 'Kadwa', 'Kasba', 'Katoria', 'Kishanganj', 'Kuchaikote', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Maharajganj', 'Mahua', 'Mahnar Bazar', 'Masaurhi', 'Mirganj', 'Mohania', 'Mokameh', 'Motihari', 'Munger', 'Murliganj', 'Narkatiaganj', 'Naugachhia', 'Nawada', 'Piro', 'Pupri', 'Rafiganj', 'Ramnagar', 'Rasra', 'Revelganj', 'Rajgir', 'Raxaul Bazar', 'Sabour', 'Saharsa', 'Samastipur', 'Sheikhpura', 'Sheohar', 'Sherghati', 'Silao', 'Sultanganj', 'Sultanganj', 'Tarari', 'Teghra', 'Umaria', 'Warisaliganj', 'Chandauli', 'Chakia', 'Begusarai', 'Bettiah', 'Barh', 'Bhawanipur', 'Barbigha', 'Bhabua', 'Bihpur', 'Chakia', 'Chandan Bara', 'Chapra', 'Chhatapur', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli', 'Chandauli']
    },
    {
        state: 'Chhattisgarh',
        cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Rajnandgaon', 'Raigarh', 'Jagdalpur', 'Ambikapur', 'Dhamtari', 'Mahasamund']
    },
    {
        state: 'Goa',
        cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Ponda', 'Mapusa', 'Bicholim', 'Curchorem', 'Sanquelim', 'Cuncolim', 'Valpoi',
                 'Porvorim', 'Calangute', 'Canacona', 'Cavelossim', 'Colva', 'Dona Paula', 'Goa Velha', 'Majorda', 'Mandrem', 'Miramar',
                 'Morjim', 'Ozari', 'Palolem', 'Parcem', 'Pernem', 'Pilar', 'Quepem', 'Saligao', 'Sancoale', 'Sanguem', 'Sinquerim',
                 'Taleigao', 'Tivim', 'Vagator']
    },    
    {
        state: 'Gujarat',
        cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Anand', 'Gandhinagar', 'Nadiad',
                 'Bharuch', 'Navsari', 'Valsad', 'Mehsana', 'Surendranagar', 'Bhuj', 'Gandhidham', 'Porbandar', 'Godhra', 'Palanpur',
                 'Vapi', 'Amreli', 'Ankleshwar', 'Bhuj', 'Botad', 'Dahod', 'Deesa', 'Gandhidham', 'Gondal', 'Himatnagar', 'Jamnagar',
                 'Jetpur', 'Keshod', 'Khambhat', 'Lunawada', 'Mahuva', 'Manavadar', 'Mandvi', 'Modasa', 'Morvi', 'Nadiad', 'Navsari',
                 'Padra', 'Palanpur', 'Palitana', 'Patan', 'Porbandar', 'Radhanpur', 'Rajkot', 'Rajpipla', 'Rajula', 'Ranavav', 'Rapar',
                 'Salaya', 'Sanand', 'Savarkundla', 'Sidhpur', 'Sihor', 'Songadh', 'Surat', 'Talaja', 'Thangadh', 'Tharad', 'Umbergaon',
                 'Umreth', 'Una', 'Unjha', 'Upleta', 'Vadnagar', 'Vapi', 'Vapi', 'Veraval', 'Vijapur', 'Viramgam', 'Visnagar', 'Vyara']
    },    
    {
        state: 'Haryana',
        cities: ['Chandigarh', 'Faridabad', 'Gurgaon', 'Hisar', 'Panipat', 'Ambala', 'Rohtak', 'Karnal', 'Sonipat', 'Yamunanagar']
    },
    {
        state: 'Himachal Pradesh',
        cities: ['Shimla', 'Manali', 'Dharamshala', 'Solan', 'Kullu', 'Mandi', 'Palampur', 'Chamba', 'Dalhousie', 'Una']
    },
    {
        state: 'Jammu and Kashmir',
        cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur', 'Kathua', 'Sopore', 'Rajauri', 'Punch', 'Kupwara']
    },
    {
        state: 'Jharkhand',
        cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City', 'Deoghar', 'Hazaribagh', 'Giridih', 'Ramgarh', 'Medininagar', 'Phusro']
    },
    {
        state: 'Karnataka',
        cities: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Davanagere', 'Bellary', 'Shimoga', 'Tumkur', 'Udupi']
    },
    {
        state: 'Kerala',
        cities: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Kollam', 'Palakkad', 'Alappuzha', 'Kannur', 'Kottayam', 'Kasaragod']
    },
    {
        state: 'Madhya Pradesh',
        cities: ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa']
    },
    {
        state: 'Maharashtra',
        cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Kalyan-Dombivali', 'Vasai-Virar', 'Aurangabad', 'Solapur', 'Bhiwandi']
    },
    {
        state: 'Manipur',
        cities: ['Imphal', 'Thoubal', 'Lilong', 'Kakching', 'Mayang Imphal', 'Ukhrul', 'Churachandpur', 'Bishnupur', 'Senapati', 'Tamenglong']
    },
    {
        state: 'Meghalaya',
        cities: ['Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Baghmara', 'Williamnagar', 'Resubelpara', 'Mairang', 'Nongpoh', 'Ampati']
    },
    {
        state: 'Mizoram',
        cities: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Saitual', 'Khawzawl']
    },
    {
        state: 'Nagaland',
        cities: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Longleng', 'Kiphire']
    },
    {
        state: 'Odisha',
        cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jharsuguda']
    },
    {
        state: 'Punjab',
        cities: ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Mohali', 'Batala', 'Pathankot']
    },
    {
        state: 'Rajasthan',
        cities: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar']
    },
    {
        state: 'Sikkim',
        cities: ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan']
      },
    {
        state: 'Tamil Nadu',
        cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Erode', 'Vellore', 'Thoothukudi']
    },
    {
        state: 'Telangana',
        cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet']
    },
    {
        state: 'Tripura',
        cities: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Ambassa', 'Belonia', 'Sabroom', 'Sonamura', 'Khowai', 'Bishalgarh']
    },
    {
        state: 'Uttar Pradesh',
        cities: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur']
    },
    {
        state: 'Uttarakhand',
        cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Srinagar', 'Pithoragarh', 'Ramnagar']
    },
    {
        state: 'West Bengal',
        cities: ['Kolkata', 'Howrah', 'Asansol', 'Siliguri', 'Durgapur', 'Bardhaman', 'English Bazar', 'Baharampur', 'Habra', 'Kharagpur']
    }
  ];
  

export default indiaStatesWithCities;