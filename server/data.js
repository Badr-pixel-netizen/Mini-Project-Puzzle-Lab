export const puzzlesData = {
  puzzles: [
    // Restore Walter's lab ventilation: unlock the door, decode his alias,
    // then solve the final control-panel PIN to end the lockdown.
    {
      id: 1,
      title: "The Heisenberg Formula",
      summary:
        "A missing batch recipe has locked down the superlab. Decipher chemical cues to restore system access.",
      story:
        "You walk into the underground lab beneath the industrial laundry. The main control terminal is locked, and a timer is counting down. Walter left three encoded safety prompts across the lab equipment to ensure only someone with acute chemical knowledge can reboot the ventilation system.",
      stages: [
        {
          id: 1,
          title: "Stage 1: The Periodic Combination",
          question:
            "What is the 4-digit security PIN to unlock the lab door terminal?",
          clues: [
            "A sticky note on the barrel reads: 'Atomic number of Bromine (Br) followed by the atomic number of Barium (Ba)'.",
            "The element chart on the wall shows: Bromine (Br) = 35, Barium (Ba) = 56.",
          ],
          answers: ["3556"],
          hints: [
            "Hint 1: Combine the two atomic numbers side-by-side: Br + Ba.",
            "Hint 2: 35 followed by 56 gives 3556.",
          ],
        },
        {
          id: 2,
          title: "Stage 2: The Encoded Alias Prompt",
          question:
            "What 10-letter codename decrypts the lead chemist's terminal identity?",
          clues: [
            "The terminal login prompt displays an encrypted sequence: '8 - 5 - 9 - 19 - 5 - 14 - 2 - 5 - 18 - 7'.",
            "A cipher key pinned to the wall reads: 'Convert numbers to letters using standard alphabet order (1=A, 2=B, 3=C ... 8=H, 9=I, 14=N, 18=R, 19=S)'.",
          ],
          answers: ["heisenberg"],
          hints: [
            "Hint 1: Map each number to its corresponding letter: 8=H, 5=E, 9=I, 19=S, 5=E, 14=N, 2=B, 5=E, 18=R, 7=G.",
            "Hint 2: The decoded name is 'heisenberg'.",
          ],
        },
        {
          id: 3,
          title: "Stage 3: The Multi-Variable Control Lock",
          question:
            "What 4-digit code ABCD clears the emergency purge lock and starts the ventilation system?",
          clues: [
            "The ventilation panel displays a rule: 'The 4-digit code ABCD consists of distinct numbers from 1 to 6'.",
            "The override log lists three diagnostic conditions: (1) A is an even number; (2) C is twice the value of A; (3) B is 1, and the sum of all four digits (A + B + C + D) equals 12.",
          ],
          answers: ["2145"],
          hints: [
            "Hint 1: Since A is even and C = 2*A using digits 1–6, A must be 2 and C must be 4.",
            "Hint 2: With A=2, B=1, and C=4, solve 2 + 1 + 4 + D = 12 to find D = 5. Enter 2145.",
          ],
        },
      ],
      finalReveal:
        "The terminal screen lights up green, showing 'VENTILATION RESTORED - SYSTEM READY'. The pressure drops back to safe levels just as footsteps echo down the lab stairs. You successfully bypassed the lockdown without blowing your cover.",
    },
    // Restore Gus Fring's logistics system: verify truck weights, decode
    // the destination, then unlock the distribution grid and reveal the routes.
    {
      id: 2,
      title: "The Los Pollos Logistics",
      summary:
        "Intercepted distribution manifests hold the key to tracking hidden supply routes across the Southwest.",
      story:
        "Inside the main distribution center, Gus Fring's automated inventory system has gone into protective lockdown. To avoid drawing suspicion from corporate auditors, you must solve three security challenges hidden inside the daily logistics logs to restore normal operations.",
      stages: [
        {
          id: 1,
          title: "Stage 1: Manifest Weight Balance",
          question:
            "What 4-digit weight code clears the loading dock balance verification?",
          clues: [
            "You step onto the cold cement of Loading Bay 4. A red light flashes on the scale terminal, warning that a weight discrepancy will trigger an automated audit.",
            "A distribution ticket clipped to a clipboard reads: '3 refrigerated trucks carry equal cargo weights, totaling 8,400 kg'.",
            "The security prompt asks: 'Calculate the weight of 1 truck, divide by 2, and then add 1,800 to generate the 4-digit scale override PIN'.",
          ],
          answers: ["3200"],
          hints: [
            "Hint 1: One truck weight = 8,400 / 3 = 2,800 kg.",
            "Hint 2: Divide by 2 (1,400 kg) and add 1,800 = 3200.",
          ],
        },
        {
          id: 2,
          title: "Stage 2: Caesar Shift Routing",
          question:
            "What 7-letter hub destination decrypts the encrypted transport header 'SKRHQLA'?",
          clues: [
            "With the scales balanced, the main routing monitor flickers to life, but the regional hub destination is obfuscated under Gus Fring's security protocol.",
            "The terminal displays an encrypted transport header: 'SKRHQLA'.",
            "A handwritten sticky note from the logistics supervisor tucked beneath the keyboard reads: 'Caesar Cipher Shift: Each letter has been shifted forward by 3 positions in the alphabet (e.g., D represents A, E represents B, F represents C)'.",
          ],
          answers: ["phoenix"],
          hints: [
            "Hint 1: Shift each letter backward by 3 positions in the alphabet: S->P, K->H, R->O, H->E, Q->N, L->I, A->X.",
            "Hint 2: The decoded hub name is 'phoenix'.",
          ],
        },
        {
          id: 3,
          title: "Stage 3: Freight Matrix Lock",
          question:
            "What 4-digit distribution override PIN ABCD unlocks the main logistics grid?",
          clues: [
            "The routing terminal unlocks the city, but the central distribution server demands a final 4-digit security code ABCD to sync the regional supply chain before Madrigal corporate logs in.",
            "The terminal requests 4 distinct digits ABCD selected from {1, 2, 3, 4, 5, 6, 7, 8, 9}.",
            "System rules taped to the server cabinet: (1) A is the only even prime number; (2) B is 4 times A; (3) C is B - 5; (4) The product of the first two digits (A * B) minus the product of the last two digits (C * D) equals 1.",
          ],
          answers: ["2835"],
          hints: [
            "Hint 1: Even prime A = 2 => B = 8 and C = 8 - 5 = 3.",
            "Hint 2: (2 * 8) - (3 * D) = 1 => 16 - 3D = 1 => D = 5. Enter 2835.",
          ],
        },
      ],
      finalReveal:
        "The terminal displays 'MANIFEST VERIFIED - ALL ROUTES CLEAR'. The tracking grid updates, revealing the hidden supply coordinates safely encrypted in the system.",
    },
    // Find Walter's buried desert cache: identify the landmark, remove
    // the chest's seal, then decode the keyword to open the final padlock.
    {
      id: 3,
      title: "The Desert Cache Protocol",
      summary:
        "A series of hidden physical markers and environmental clues in To'hajiilee lead to a buried vault.",
      story:
        "You stand in the scorching heat of the To'hajiilee desert, holding a worn field journal left by Walter White. Rather than digital codes, Walter used physical landmarks, environmental anomalies, and chemical solvent tests to mark the path to his buried reserves.",
      stages: [
        {
          id: 1,
          title: "Stage 1: The Landmark Marker (Medium)",
          question:
            "Which natural landmark must you head toward to find the first buried marker?",
          clues: [
            "You open Walter's journal. A sketch on the first page shows four distinct desert formations: A jagged ridge, a twin rock spire, a dried creek bed, and a lonely mesa.",
            "Below the sketch, Walter wrote a short riddle: 'Where two stone towers rise side-by-side toward the sky, look beneath the eastern base where the sun casts its morning shadow'.",
          ],
          answers: ["spire", "twin rock spire", "twin spire", "spires"],
          hints: [
            "Hint 1: Look at the descriptions: ridge, twin rock spire, creek bed, mesa.",
            "Hint 2: 'Two stone towers rising side-by-side' refers to the 'spire' (or 'twin rock spire').",
          ],
        },
        {
          id: 2,
          title: "Stage 2: The Solvent Neutralizer (Hard)",
          question:
            "Which chemical solvent from Walter's field kit will safely dissolve the wax seal on the buried chest?",
          clues: [
            "At the base of the twin spires, you unearth a sealed metal kit containing four glass dropper bottles labeled: ACETONE, ETHANOL, BENZENE, and WATER.",
            "A handwritten note tucked into the lid reads: 'The vault seal is composed of heavy industrial paraffin wax. To strip it without triggering the heat-sensitive alarm, select the organic solvent that is non-polar, highly volatile, and commonly used in nail polish remover'.",
          ],
          answers: ["acetone"],
          hints: [
            "Hint 1: Paraffin wax is non-polar, so WATER will not dissolve it.",
            "Hint 2: The solvent specifically referenced as a primary ingredient in nail polish remover is 'acetone'.",
          ],
        },
        {
          id: 3,
          title: "Stage 3: The Cipher Key Word (Very Hard)",
          question:
            "What 6-letter key word opens the vintage padlock securing the buried chest?",
          clues: [
            "Having stripped the wax seal, you reveal a heavy steel trunk locked with a 6-letter combination dial.",
            "An index card taped to the trunk explains the cipher: 'Each original letter was shifted forward by its position: 1 step for the first letter, 2 for the second, up to 6 for the sixth. Use A through Z and wrap around at the ends of the alphabet'.",
            "The card states: 'Reverse the sequence shift on the encoded display string [Q W U M Y E] to reveal the core principle of Heisenberg's product'.",
          ],
          answers: ["purity"],
          hints: [
            "Hint 1: Shift each letter backward in the alphabet by its position number (1st letter back 1, 2nd back 2, 3rd back 3, etc.).",
            "Hint 2: Q(-1)=P, W(-2)=U, U(-3)=R, M(-4)=I, Y(-5)=T, E(-6)=Y -> The keyword is 'purity'.",
          ],
        },
      ],
      finalReveal:
        "You align the letters P-U-R-I-T-Y on the lock. With a heavy metallic click, the shackle releases. You lift the lid to reveal the hidden desert cache secured safely inside.",
    },
  ],
};
