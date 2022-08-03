const avangers = [
    {
        id: "1",
        character: "Iron Man",
        realName: "Anthony Edward Stark",
        joinedIn: "Avengers #1 (September 01, 1963)",
        notes: "Co-Founder of the main Avengers team. Former member of the New Avengers, Pym's Mighty Avengers, and the Fifty-States Initiative Mighty Avengers. An alternate adolescent version of the original replaced him for a time until they merged. Current member of the main Avengers team."
    },
    {
        id: "2",
        character: "Thor",
        realName: "Thor Odinson",
        joinedIn: "Avengers #1 (September 01, 1963)",
        notes: "Co-Founder of the main Avengers team. Former member of A.I.M.'s New Avengers and the Avengers Unity Division. Current member of the main Avengers team."
    },
    {
        id: "3",
        character: "Wasp",
        realName: "Janet Van Dyne",
        joinedIn: "Avengers #1 (September 01, 1963)",
        notes: "Co-founder and former member of the main Avengers team. First female member. Former member of the Avengers Unity Division. Current member of the Agents of Wakanda."
    },
    {
        id: "4",
        character: "Ant-Man",
        realName: "Dr. Henry Jonathan Pym",
        joinedIn: "Avengers #1 (September 01, 1963)",
        notes: "Co-Founder and former leader of the main Avengers team, Avengers A.I., and Avengers Academy, as well as former member of his Mighty Avengers and S.H.I.E.L.D.'s Secret Avengers. Former member of the main Avengers team."
    },
    {
        id: "5",
        character: "Hulk",
        realName: "Dr. Robert Bruce Banner",
        joinedIn: "Avengers #1 (September 01, 1963)",
        notes: "Co-Founder and former member of main team, Pym's Mighty Avengers, and S.H.I.E.L.D.'s Secret Avengers. Resigns from the team in Avengers #2 (November 1963), rejoins the Avengers in Avengers vs. X-Men #11. Former member of the main Avengers team."
    },
    {
        id: "6",
        character: "Captain America",
        realName: "Steven Grant Rogers",
        joinedIn: "Avengers #4 (March 1964)",
        notes: 'Given retroactive "founding member" status in place of the Hulk. Former leader of the Avengers Unity Division and the Black Ops Secret Avengers, as well as former member of the New Avengers. Current member of the main Avengers team.'
    },
    {
        id: "7",
        character: "Hawkeye",
        realName: "Clinton Francis Barton",
        joinedIn: "Avengers #16 (May 1965)",
        notes: "Former Iron Man villain. Former member of the West Coast Avengers and former leader. Former leader of the Black Ops Secret Avengers and the Great Lakes Avengers, S.H.I.E.L.D.'s Secret Avengers, Avengers Academy, and Avengers Idea Mechanics. Former member of the main Avengers team."
    },
    {
        id: "8",
        character: "Quicksilver",
        realName: "Pietro Maximoff",
        joinedIn: "Avengers #16 (May 1965)",
        notes: "Former member of the Brotherhood of Evil Mutants, the Avengers Unity Division, Pym's Mighty Avengers, the West Coast Avengers, and Avengers Academy. Former member of the main Avengers team."
    },
    {
        id: "9",
        character: "Scarlet Witch",
        realName: "Wanda Maximoff",
        joinedIn: "Avengers #16 (May 1965)",
        notes: "Former member of the Brotherhood of Evil Mutants, the Avengers Unity Division, Pym's Mighty Avengers, the West Coast Avengers, and Avengers Academy. Former member of the main Avengers team."
    },
    {
        id: "10",
        character: "Hercules",
        realName: "Heracles",
        joinedIn: "Avengers #45 (October 1967)",
        notes: "Greek god and former Thor supporting character. Former member of the main Avengers team."
    },
    {
        id: "11",
        character: "Black Panther",
        realName: "T'Challa",
        joinedIn: "Avengers #52 (May 1968)",
        notes: "King of fictitious African nation of Wakanda and the first black member. Former member of the main Avengers team."
    },
    {
        id: "12",
        character: "Vision",
        realName: "Victor Shade",
        joinedIn: "Avengers #58 (November 1968)",
        notes: 'A "synthezoid" created by Ultron to attack the Avengers; turned on his creator and joined the Avengers the following issue. Former member of the main Avengers team.'
    },
    {
        id: "13",
        character: "Black Knight",
        realName: "Dane Whitman",
        joinedIn: "Avengers #54 (July 1968)",
        notes: "Son of the eponymous member of the Masters of Evil. Former member of the main Avengers team."
    },
    {
        id: "14",
        character: "Black Widow",
        realName: "Natasha Alianovna Romanoff",
        joinedIn: "Avengers #111 (May 1973)",
        notes: "Originally offered membership between Avengers #44 (September 1967) and Avengers #45 (October 1967). Former member of the main Avengers team."
    },
    {
        id: "15",
        character: "Swordsman",
        realName: "Jacques Duquesne",
        joinedIn: "Readmitted in Avengers #114 (August 1973)",
        notes: "Killed in Giant Size Avengers #2 (November 1974). Returned to life in Chaos War: Dead Avengers #1 (January 2011). Former member of the main Avengers team."
    },
    {
        id: "16",
        character: "Mantis",
        realName: "Brandt (surname)",
        joinedIn: "Giant-Size Avengers #4 (June 1975)",
        notes: "Half-Vietnamese, half-German prostitute trained in martial arts by the Priests of Pama (in Vietnam). Resident of Avengers Mansion in Avengers #114 (August 1973). Later traveled to space as the Celestial Madonna. Former member of the main Avengers team."
    },
    {
        id: "17",
        character: "Beast",
        realName: "Dr. Henry Philip McCoy",
        joinedIn: "Avengers #151 (September 1976)",
        notes: "Member of original X-Men. Given probationary status in Avengers #137 (July 1975). Former member of the main Avengers team."
    },
    {
        id: "18",
        character: "Moondragon",
        realName: "Heather Douglas",
        joinedIn: "Avengers #151 (September 1976)",
        notes: 'Originally Iron Man villainess "Madame McEvil." Given probationary status in Avengers #137 (July 1975). Former member of the main Avengers team.'
    },
    {
        id: "19",
        character: "Hellcat",
        realName: 'Patricia "Patsy" Walker',
        joinedIn: "Avengers #151 (September 1976)",
        notes: "Originally the heroine of the long-running Marvel romance title Patsy Walker. Supporting character of the Beast in Amazing Adventures. Given probationary status in Avengers #148 (February 1976). Left before her membership could be made permanent. Former member of the main Avengers team."
    },
    {
        id: "20",
        character: "Wonder Man",
        realName: "Simon Williams",
        joinedIn: "Avengers #194 (April 1980)",
        notes: "Former member of the main Avengers team. Given probationary status in Avengers #156 (February 1977)."
    },
    {
        id: "21",
        character: "Two-Gun Kid",
        realName: 'Matthew J. "Matt" Hawk',
        joinedIn: "Avengers #174 (August 1978)",
        notes: "Star of the eponymous Marvel Western series. A time traveler from the 19th century; joined as a reserve member. Originally given honorary status in Avengers #147 (May 1976). Former member of the main Avengers team."
    },
    {
        id: "22",
        character: "Captain Marvel",
        realName: "Carol Susan Jane Danvers",
        joinedIn: "Avengers #183 (May 1979)",
        notes: "Former member of the Ultimates. Current member of the main Avengers team."
    },
    {
        id: "23",
        character: "Captain America",
        realName: "Samuel Thomas Wilson",
        joinedIn: "Avengers #184 (June 1979)",
        notes: "Longtime Captain America sidekick; later took on the name and role of Captain America. Former member of the main Avengers team."
    },
    {
        id: "24",
        character: "Captain Marvel",
        realName: "Monica Rambeau",
        joinedIn: "Avengers #231 (May 1983)",
        notes: "First female Avenger of color. Originally made a member-in-training in Avengers #227 (January 1983). Former member of the main Avengers team."
    },
    {
        id: "25",
        character: "Starfox",
        realName: "Eros of Titan",
        joinedIn: "Avengers #243 (May 1984)",
        notes: "Captain Marvel (Mar-Vell) supporting character. Originally made a member-in-training in Avengers #232 (June 1983). Former member of the main Avengers team."
    },
    {
        id: "26",
        character: "Sub-Mariner",
        realName: "Namor McKenzie",
        joinedIn: "Avengers #262 (December 1985)",
        notes: "Member of the Invaders; fought the Avengers in issue nos. 3 and 4 (where he was indirectly responsible for awakening Captain America from suspended animation). Current member of the main Avengers team under Avengers custody."
    },
    {
        id: "27",
        character: "Doctor Druid",
        realName: "Dr. Anthony Ludgate Druid",
        joinedIn: "Avengers #278 (April 1987)",
        notes: `Originally called "Dr. Droom" in 1960's stories that were reprinted in the 1970's issues of Weird Wonder Tales with the name changed to "Druid." Former member of the main Avengers team.`
    },
    {
        id: "28",
        character: "Mockingbird",
        realName: `Barbara "Bobbi" Morse`,
        joinedIn: "West Coast Avengers #1(September 1984)",
        notes: "Founding West Coast member. Former member of the New Avengers and Secret Avengers. Former member of the main Avengers team."
    },
    {
        id: "29",
        character: "War Machine",
        realName: 'James Rupert "Rhodey" Rhodes',
        joinedIn: "West Coast Avengers #1(September 1984)",
        notes: "Founding West Coast member (as Iron Man). Rejoined as War Machine in Avengers West Coast #94 (May 1993). Former member of the Secret Avengers as the Iron Patriot. Former member of the main Avengers team."
    },
    {
        id: "30",
        character: "Thing",
        realName: 'Benjamin Jacob "Ben" Grimm',
        joinedIn: "West Coast Avengers vol. 2 #9(June 1986)",
        notes: "Accepted membership after assisting West Coast team, but left before official vote was taken. Former member of the New Avengers and the Guardians of the Galaxy. Former member of the main Avengers team."
    },
    {
        id: "31",
        character: "Moon Knight",
        realName: "Marc Spector",
        joinedIn: "West Coast Avengers vol. 2 #21(June 1987)",
        notes: "Gained full membership in West Coast Avengers vol. 2 #33. Former member of the main Avengers team."
    },
    {
        id: "32",
        character: "Firebird",
        realName: "Bonita Juárez",
        joinedIn: "West Coast Avengers Annual #2(1987)",
        notes: "Given reserve status after assisting West Coast team."
    },
    {
        id: `33`,
        character: `Demolition Man`,
        realName: `Dennis Dunphy`,
        joinedIn: `Captain America #349(January 1989)`,
        notes: `Recruited by The Captain for East Coast team, but presumed killed before official vote was taken. Former member of the Revengers. Former member of the main Avengers team.`
    },
    {
        id: `34`,
        character: `Forgotten One`,
        realName: `unknown`,
        joinedIn: `Avengers #300 (February 1989)`,
        notes: `Presumed killed in Avengers #391 (October 1995). Returned in Eternals (vol. 4) #3 (October 2008). Former member of the main Avengers team.`
    },
    {
        id: `35`,
        character: `Mister Fantastic`,
        realName: `Reed Richards`,
        joinedIn: `Avengers #300 (February 1989)`,
        notes: `Former member of the Illuminati and Fantastic Four. Former member of the main Avengers team.`
    },
    {
        id: `36`,
        character: `Invisible Woman`,
        realName: `Susan Storm Richards`,
        joinedIn: `Avengers #300 (February 1989)`,
        notes: `Former member of the Fantastic Four and Avengers. Former member of the main Avengers team.`
    },
    {
        id: `37`,
        character: `U.S. Agent`,
        realName: `John Frank Walker`,
        joinedIn: `West Coast Avengers vol. 2 #44(May 1989)`,
        notes: `Appointed to West Coast team by government. Left during UN Charter, and later gained official membership. Former member of the main Avengers team.`
    },
    {
        id: `38`,
        character: `Quasar`,
        realName: `Wendell Elvis Vaughn`,
        joinedIn: `Avengers #305 (July 1989)`,
        notes: `Originally given probationary status in Avengers Annual #18 (1989). Former member of the main Avengers team.`
    },
    {
        id: `39`,
        character: `Human Torch`,
        realName: `Jim Hammond (alias)`,
        joinedIn: `Avengers West Coast #50November 1989)`,
        notes: `Former member of the Secret Avengers and the Invaders. Former member of the main Avengers team.`
    },
    {
        id: `40`,
        character: `Sersi`,
        realName: `Circe`,
        joinedIn: `Avengers #314 (February 1990)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `41`,
        character: `Stingray`,
        realName: `Walter Newell`,
        joinedIn: `Avengers #319 (July 1990)`,
        notes: `Given reserve status as caretaker of Avengers Island. Former member of the main Avengers team.`
    },
    {
        id: `42`,
        character: `Spider-Man`,
        realName: `Peter Benjamin Parker`,
        joinedIn: `Avengers #329 (February 1991)`,
        notes: `Joined as a reserve member. Former member of the New Avengers, while serving concurrently as a member of the Future Foundation. Former member of the Avengers Unity Division. Former member of the main Avengers team.`
    },
    {
        id: `43`,
        character: `Sandman`,
        realName: `William Baker`,
        joinedIn: `Avengers #329 (February 1991)(Reserve Substitutes)`,
        notes: `Never gained full membership. Resigned in The Amazing Spider-Man vol. 2 #4 (1999). Former member of the Frightful Four. Former member of the main Avengers team.`
    },
    {
        id: `44`,
        character: `Rage`,
        realName: `Elvin Daryl Haliday`,
        joinedIn: `Avengers #329 (February 1991)(Reserve Substitutes)`,
        notes: `Never gained full membership. Was discovered to be still in his adolescence in Avengers #341 (November 1991) and was demoted to trainee status. Status revoked in New Warriors #26.`
    },
    {
        id: `45`,
        character: `X-51`,
        realName: `Aaron Stack (alias)`,
        joinedIn: `Avengers West Coast #69 (April 1991)`,
        notes: `Given reserve status after assisting West Coast team. Active in Avengers West Coast #83 (June 1992). Removed from roster in X-51 #4 (1999). Former member of the main Avengers team.`
    },
    {
        id: `46`,
        character: `Living Lightning`,
        realName: `Miguel Santos`,
        joinedIn: `Avengers West Coast #74(September 1991)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `47`,
        character: `Madame Web`,
        realName: `Julia Carpenter`,
        joinedIn: `Avengers West Coast #74(September 1991)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `48`,
        character: `Crystal`,
        realName: `Crystalia Amaquelin Maximoff`,
        joinedIn: `Avengers #343 (January 1992)`,
        notes: `Originally given probationary status in Avengers #336 (August 1991).`
    },
    {
        id: `49`,
        character: `Thunderstrike`,
        realName: `Eric Kevin Masterson`,
        joinedIn: `Avengers #343 (January 1992)`,
        notes: `Active as Thunderstrike in Avengers #374.Killed in Thunderstrike #24 (September 1995).`
    },
    {
        id: `50`,
        character: `Darkhawk`,
        realName: `Christopher Powell`,
        joinedIn: `Avengers West Coast #94 (May 1993)`,
        notes: `Joined as a reserve member. Former member of the main Avengers team.`
    },
    {
        id: `51`,
        character: `Triathlon`,
        realName: `Delroy Garrett`,
        joinedIn: `Avengers vol. 3 #27 (April 2000)`,
        notes: `Currently active as 3-D Man in the Agents of Atlas. Former member of the main Avengers team.`
    },
    {
        id: `52`,
        character: `Silverclaw`,
        realName: `Maria de Guadalupe Santiago`,
        joinedIn: `Avengers vol. 3 #30 (July 2000)`,
        notes: `Joined as a reserve member. Active in Avengers vol. 3 #43-55.`
    },
    {
        id: `53`,
        character: `Jack of Hearts`,
        realName: `Jack Hart`,
        joinedIn: `Avengers vol. 3 #38 (March 2001)`,
        notes: `Gained full membership in Avengers vol. 3 #43 (August 2001). Died in Avengers vol. 3 #76 (February 2004). Revived in Marvel Zombies Supreme #2 (2011). Former member of the main Avengers team.`
    },
    {
        id: `54`,
        character: `Ant-Man`,
        realName: `Scott Lang`,
        joinedIn: `Avengers vol. 3 #57 (October 2002)`,
        notes: `Gained full membership in Avengers vol. 3 #62 (February 2003). Seemingly killed by a zombie Jack of Hearts under influence of the Scarlet Witch in Avengers #500 (September 2004). Rescued moments before his apparent death by the Young Avengers and brought several years into the future by the Scarlet Witch in Avengers: The Children's Crusade #5 (June 2011). Former member of the main Avengers team.`
    },
    {
        id: `55`,
        character: `Captain Britain`,
        realName: `Kelsey Leigh Shorr`,
        joinedIn: `Avengers vol. 3 #81 (June 2004)`,
        notes: `Made an honorary member as Kelsey Leigh, and a full member as Captain Britain. She is one of only two members, the other being Henry Pym, who have Avengers status in both their civilian and superhero guises. Former member of the main Avengers team.`
    },
    {
        id: `56`,
        character: `Luke Cage`,
        realName: `Carl Lucas`,
        joinedIn: `New Avengers #3(March 2005)`,
        notes: `Former leader of the New Avengers. Left the team in New Avengers vol. 2 #30. Former leader of the Mighty Avengers. Former member of the main Avengers team.`
    },
    {
        id: `57`,
        character: `Wolverine`,
        realName: `James "Logan" Howlett`,
        joinedIn: `New Avengers #6(June 2005)`,
        notes: `Current member of the Savage Avengers and X-Men. Former member of the main Avengers team. Former member of the Avengers Unity Squad. Maintained simultaneous membership in the Avengers and the X-Men.`
    },
    {
        id: `58`,
        character: `Sentry`,
        realName: `Robert Reynolds`,
        joinedIn: `New Avengers #10(October 2005)`,
        notes: `Became a member of the Mighty Avengers after the Civil War and the Dark Avengers during Dark Reign. Went rogue in Siege #3 before being killed in Siege #4. Former member of the main Avengers team.`
    },
    {
        id: `59`,
        character: `Echo`,
        realName: `Maya Lopez`,
        joinedIn: `New Avengers #11(November 2005)`,
        notes: `Joined as Ronin in New Avengers #11 (2005); active as Echo in New Avengers #27 (2007). Killed in Moon Knight vol. 4 #9. She has since mysteriously returned from the dead and returned to the team in Avengers #45. Current host of the Phoenix Force. Current member of the main Avengers team.`
    },
    {
        id: `60`,
        character: `Ares`,
        realName: `Ares`,
        joinedIn: `Mighty Avengers #1(May 2007)`,
        notes: `Became member of the Dark Avengers. Killed in Siege #2. Former member of the main Avengers team.`
    },
    {
        id: `61`,
        character: `Amadeus Cho`,
        realName: `Amadeus Cho`,
        joinedIn: `Mighty Avengers #21(March 2009)`,
        notes: `Helped assemble a new Mighty Avengers team after the beginning of Dark Reign. Former member of the main Avengers team.`
    },
    {
        id: `62`,
        character: `Jocasta`,
        realName: `Jocasta`,
        joinedIn: `Mighty Avengers #21(March 2009)`,
        notes: `Jocasta was previously granted provisional status in Avengers vol. 1 #197. She left the team before she was to be offered substitute status with the team, in Avengers vol. 1 #211. Former teacher at the Avengers Academy.`
    },
    {
        id: `63`,
        character: `Stature`,
        realName: `Cassandra Lang`,
        joinedIn: `Mighty Avengers #22(April 2009)`,
        notes: `Killed in Avengers: The Children's Crusade #8. Resurrected in Avengers World #16. Former member of the main Avengers team.`
    },
    {
        id: `64`,
        character: `Vision`,
        realName: `Jonas (alias)`,
        joinedIn: `Mighty Avengers #22(April 2009)`,
        notes: `Killed in Avengers: The Children's Crusade #9.`
    },
    {
        id: `65`,
        character: `Valkyrie`,
        realName: `Brunnhilde`,
        joinedIn: `Secret Avengers vol. 1 #1 (May 2010)`,
        notes: `Former member of the Secret Avengers. Former member of the main Avengers team.`
    },
    {
        id: `66`,
        character: `Nova`,
        realName: `Richard Rider`,
        joinedIn: `Secret Avengers vol. 1 #1 (May 2010)`,
        notes: `Left the Secret Avengers, to participate in The Thanos Imperative. Presumed killed in The Thanos Imperative #6. Revealed to be alive in Nova vol. 6 #11 (September 2016). Current member of the Guardians of the Galaxy. Former member of the main Avengers team.`
    },
    {
        id: `67`,
        character: `Ant-Man`,
        realName: `Eric O'Grady`,
        joinedIn: `Secret Avengers vol. 1 #1 (May 2010)`,
        notes: `Killed and replaced by a Life Model Decoy in Secret Avengers vol. 1 #23 (February 2012).`
    },
    {
        id: `68`,
        character: `Iron Fist`,
        realName: `Daniel Thomas Rand-Kai`,
        joinedIn: `New Avengers vol. 2 #1 (June 2010)`,
        notes: `Originally joined in New Avengers vol. 1 #27 (February 2007). Former member of the main Avengers team.`
    },
    {
        id: `69`,
        character: `Power Woman`,
        realName: `Jessica Campbell Jones`,
        joinedIn: `New Avengers vol. 2 #1 (June 2010)`,
        notes: `Originally joined as Jewel in New Avengers Annual #3 (December 2009). Left the team in New Avengers (vol. 2) #24. Former member of the Mighty Avengers. Former member of the main Avengers team.`
    },
    {
        id: `70`,
        character: `Protector`,
        realName: `Noh-Varr`,
        joinedIn: `Avengers vol. 4 #6 (December 2010)`,
        notes: `Left the main team in Avengers vol. 4 #27. Former member of the West Coast Avengers as Marvel Boy. Current member of the Guardians of the Galaxy. Former member of the main Avengers team.`
    },
    {
        id: `71`,
        character: `Doctor Strange`,
        realName: `Stephen Vincent Strange`,
        joinedIn: `New Avengers vol. 2 #7 (December 2010)`,
        notes: `Originally joined in New Avengers vol. 1 #27 (February 2007). Former member of the main Avengers team.`
    },
    {
        id: `72`,
        character: `Red Hulk`,
        realName: `Thaddeus E. "Thunderbolt" Ross`,
        joinedIn: `Avengers vol. 4 #12 (June 2011)`,
        notes: `Former member of the Thunderbolts. Former member of the main Avengers team.`
    },
    {
        id: `73`,
        character: `Daredevil`,
        realName: `Matthew "Matt" Murdock`,
        joinedIn: `New Avengers vol. 2 #16 (September 2011)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `74`,
        character: `Storm`,
        realName: `Ororo Iqadi T'Challa (née Munroe)`,
        joinedIn: `Avengers vol. 4 #19(November 2011)`,
        notes: `Left the team in New Avengers (vol. 2) #24. Current member of the X-Men. Former member of the main Avengers team.`
    },
    {
        id: `75`,
        character: `Quake`,
        realName: `Daisy Johnson`,
        joinedIn: `Avengers vol. 4 #19(November 2011)`,
        notes: `Agent of S.H.I.E.L.D. and former member of the Secret Warriors. Former member of the main Avengers team.`
    },
    {
        id: `76`,
        character: `Captain Britain`,
        realName: `Brian Braddock`,
        joinedIn: `Secret Avengers vol. 1 #22(January 2012)`,
        notes: `Asked by Steve Rogers to join the Avengers in Age of Heroes #1. Former member of the main Avengers team.`
    },
    {
        id: `77`,
        character: `Agent Venom`,
        realName: `Eugene "Flash" Thompson`,
        joinedIn: `Secret Avengers vol. 1 #23 (February 2012)`,
        notes: `Killed in Amazing Spider-Man Vol 01 #800. Former member of the main Avengers team.`
    },
    {
        id: `78`,
        character: `Manifold`,
        realName: `Eden Fesi`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `79`,
        character: `Nighthawk`,
        realName: `Kyle Richmond`,
        joinedIn: `The Avengers Vol. 8 #55 (April 2022)`,
        notes: `Construct created by Mephisto. Former member of the Squadron Supreme of America. Current member of the main Avengers team.`
    },
    {
        id: `80`,
        character: `Shang-Chi`,
        realName: `Shang-Chi`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `81`,
        character: `Captain Universe`,
        realName: `Tamara Devoux`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `82`,
        character: `Smasher`,
        realName: `Isabel "Izzy" Kane`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `83`,
        character: `Hyperion`,
        realName: `Marcus Milton`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers team. Current member of the Squadron Supreme.`
    },
    {
        id: `84`,
        character: `Rogue`,
        realName: `Anna Marie`,
        joinedIn: `Uncanny Avengers #4 (January 2013)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `85`,
        character: `Sunfire`,
        realName: `Shiro Yoshida`,
        joinedIn: `Uncanny Avengers #5 (February 2013)`,
        notes: `Former member of the Avengers Unity Squad.`
    },
    {
        id: `86`,
        character: `Cannonball`,
        realName: `Sam Guthrie`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers and the U.S.Avengers and current member of X-Force`
    },
    {
        id: `87`,
        character: `Ex Nihilo`,
        realName: `Ex Nihilo`,
        joinedIn: `Avengers vol. 5 #17 (October 2013)`,
        notes: `Former member of the main Avengers team. Killed in New Avengers vol. 3 #32 (May 2015).`
    },
    {
        id: `88`,
        character: `Nightmask`,
        realName: `Adam Blackveil`,
        joinedIn: `Avengers vol. 5 #17 (October 2013)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `89`,
        character: `Star Brand`,
        realName: `Kevin Connor`,
        joinedIn: `Avengers vol. 5 #17 (October 2013)`,
        notes: `Former Member of the main Avengers team and Killed in Marvel Legacy (2017).`
    },
    {
        id: `90`,
        character: `Victor Mancha`,
        realName: `Victor Mancha`,
        joinedIn: `Avengers A.I. #1`,
        notes: `Former member of the Avengers A.I. Squad.`
    },
    {
        id: `91`,
        character: `Doombot`,
        realName: `unknown`,
        joinedIn: `Avengers A.I. #1`,
        notes: `Former member of the Avengers A.I. Squad.`
    },
    {
        id: `92`,
        character: `Alexis The Protector`,
        realName: `Alexis`,
        joinedIn: `Avengers A.I. #3`,
        notes: `Former member of the Avengers A.I. Squad.`
    },
    {
        id: `93`,
        character: `Blade`,
        realName: `Eric Brooks`,
        joinedIn: `Mighty Avengers vol 2 #1`,
        notes: `First appeared as "Spider Hero". Revealed as Blade in Mighty Avengers vol. 2 #9. Joined as Blade in Avengers vol. 8 #11. Current member of the main Avengers team.`
    },
    {
        id: `94`,
        character: `Blue Marvel`,
        realName: `Adam Brashear`,
        joinedIn: `Mighty Avengers vol 2 #2`,
        notes: `Former member of the Mighty Avengers and the Ultimates.`
    },
    {
        id: `95`,
        character: `Power Man`,
        realName: `Victor Alvarez`,
        joinedIn: `Mighty Avengers vol 2 #3`,
        notes: `Former member of the Mighty Avengers and the Ultimates.`
    },
    {
        id: `96`,
        character: `White Tiger`,
        realName: `Ava Ayala`,
        joinedIn: `Mighty Avengers vol 2 #3`,
        notes: `Former student at Avengers Academy, former member of the Heroes for Hire. Former member of the Avengers Idea Mechanics.`
    },
    {
        id: `97`,
        character: `Kaluu`,
        realName: `Kaluu`,
        joinedIn: `Captain America and the Mighty Avengers #1 (November 2014)`,
        notes: `Former member of the Mighty Avengers.`
    },
    {
        id: `98`,
        character: `Nova`,
        realName: `Sam Alexander`,
        joinedIn: `Nova #25 (December 2014)`,
        notes: `Originally offered membership by Thor in Avengers Vs. X-Men #12 (December 2012). Former member of the main Avengers team. Current Member of the Champions. Former member of the main Avengers team.`
    },
    {
        id: `99`,
        character: `Brother Voodoo`,
        realName: `Jericho Drumm`,
        joinedIn: `Avengers & X-Men: AXIS #9 (December 2014)`,
        notes: `Current member of the Savage Avengers. Former member of the Avengers Unity Squad. Former member of the main Avengers team.`
    },
    {
        id: `100`,
        character: `Valkyrie`,
        realName: `Jane Foster`,
        joinedIn: `All-New All-Different Avengers (May 2015)`,
        notes: `Current member of the main Avengers team.`
    },
    {
        id: `101`,
        character: `Ms. Marvel`,
        realName: `Kamala Khan`,
        joinedIn: `All-New All-Different Avengers (May 2015)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `102`,
        character: `Spider-Man`,
        realName: `Miles Morales`,
        joinedIn: `All-New All-Different Avengers (May 2015)`,
        notes: `Former member of the main Avengers team.`
    },
    {
        id: `103`,
        character: `Deadpool`,
        realName: `Wade Wilson`,
        joinedIn: `Avengers #0 (October 2015)`,
        notes: `Former member of the Avengers Unity Division. Former member of the main Avengers team.`
    },
    {
        id: `104`,
        character: `Synapse`,
        realName: `Emily Guerrero`,
        joinedIn: `Avengers #0 (October 2015)`,
        notes: `Former member of the Avengers Unity Division.`
    },
    {
        id: `105`,
        character: `Human Torch`,
        realName: `Johnny Storm`,
        joinedIn: `Avengers #0 (October 2015)`,
        notes: `Former member of the Avengers Unity Division.`
    },
    {
        id: `106`,
        character: `Cable`,
        realName: `Nathan Summers`,
        joinedIn: `Uncanny Avengers vol. 3 #4 (January 2016)`,
        notes: `Former member of the Avengers Unity Division. Former member of the main Avengers team.`
    },
    {
        id: `107`,
        character: `Wasp`,
        realName: `	Nadia van Dyne`,
        joinedIn: `All-New, All-Different Avengers #9 (May 2016)`,
        notes: `Former member of the main Avengers team. Current Member of the Champions.`
    },
    {
        id: `108`,
        character: `Ghost Rider`,
        realName: `Robbie Reyes`,
        joinedIn: `The Avengers Vol. 8 #6 (July 2018)`,
        notes: `Currently in another Earth. Membership is currently unclear.`
    },
    {
        id: `109`,
        character: `Phoenix`,
        realName: `Phoenix Force`,
        joinedIn: `The Avengers Vol. 8 #54 (March 2022)`,
        notes: `Currently hosted by Maya Lopez. Current member of the main Avengers team.`
    },
    {
        id: `110`,
        character: `Starbrand`,
        realName: `Brandy Selby`,
        joinedIn: `The Avengers Vol. 8 #55 (April 2022)`,
        notes: `Current member of the main Avengers team.`
    },
      {
        id: "111",
        character: "Tigra",
        realName: "Greer Grant Nelson",
        joinedIn: "Avengers #211 (September 1981)",
        notes: "Introduced as the title character of The Cat (wearing a costume that Patsy Walker would later adopt). As Tigra the Were-Woman (sic), she starred in the horror title Marvel Chillers. Former member of the main Avengers team."
    },
    {
        id: "112",
        character: "She-Hulk",
        realName: 'Jennifer Susan "Jen" Walters',
        joinedIn: "Avengers #221 (July 1982)",
        notes: "Attorney cousin of Bruce Banner. Former member of the main Avengers team."
    },
       {
        id: `113`,
        character: `Justice`,
        realName: `Vance Astrovik`,
        joinedIn: `Avengers vol. 3 #4 (May 1998)`,
        notes: `Joined as a reserve member. Promoted to full status in Avengers vol. 3 #7 (1998). Formerly a teacher at the Avengers Academy. Former member of the New Warriors. Former member of the main Avengers team.`
    },
    {
        id: `114`,
        character: `Firestar`,
        realName: `Angelica "Angel" Jones`,
        joinedIn: `Avengers vol. 3 #4 (May 1998)`,
        notes: `Joined as a reserve member . Promoted to full status in Avengers vol. 3 #7 (1998). Retired in Civil War: Front Line #2. Former member of the New Warriors and the Young Allies. Currently a member of the X-Men.`
    },
    {
        id: `115`,
        character: `Winter Soldier`,
        realName: `James Buchanan "Bucky" Barnes`,
        joinedIn: `Avengers vol. 4 #1 (May 2010)`,
        notes: `Originally joined the New Avengers in New Avengers (vol.1) #48 (January 2009). Apparently died in Fear Itself #3, but was recently revealed to be alive and re-assuming his identity as the Winter Soldier. Former member of the main Avengers team.`
    },
    {
        id: `116`,
        character: `Spider-Woman`,
        realName: `Jessica Drew`,
        joinedIn: `Avengers vol. 4 #1 (May 2010)`,
        notes: `Originally joined the New Avengers in New Avengers vol.1 #48 (January 2009). Quit the team in Spider-Woman vol. 5 #4 (February 2015). Former member of the main Avengers team.`
    },
       {
        id: `117`,
        character: `Havok`,
        realName: `Alex Summers`,
        joinedIn: `Uncanny Avengers #1 (October 2012)`,
        notes: `Former leader of the Avengers Unity Squad and current member of the X-Men`
    },
    {
        id: `118`,
        character: `Sunspot`,
        realName: `Roberto da Costa`,
        joinedIn: `Avengers vol. 5 #1 (December 2012)`,
        notes: `Former member of the main Avengers team. Former leader of the U.S.Avengers as Citizen V.`
    },
]

module.exports = avangers;