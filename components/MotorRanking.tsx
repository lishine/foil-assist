import React, { useState } from "react";
import s from "./MotorRanking.module.css";

/* ─── data ─── */

type Sentiment = "positive" | "negative" | "mixed" | "neutral";

interface Motor {
  rank: number;
  name: string;
  note?: string;
  users: string;
  mentions: string;
  plus: string;
  minus: string;
  sentiment: Sentiment;
  useCase: string;
}

const motors: Motor[] = [
  { rank: 1, name: "AliExpress/BDUAV 6384 120KV", users: "~50", mentions: "~200", plus: "30+", minus: "10", sentiment: "positive", useCase: "Foil assist, efoil, tow boogie" },
  { rank: 2, name: "Flipsky 6384 140KV", note: "waterproof", users: "69", mentions: "125", plus: "35", minus: "12", sentiment: "positive", useCase: "Foil assist, efoil" },
  { rank: 3, name: "Flipsky 65161 100/120KV", users: "42", mentions: "52", plus: "13", minus: "5", sentiment: "positive", useCase: "Efoil, dual-purpose" },
  { rank: 4, name: "Maytech 6384", users: "40", mentions: "90", plus: "15", minus: "18", sentiment: "mixed", useCase: "Foil assist, efoil" },
  { rank: 5, name: "Maytech/Michobby 6374", users: "35", mentions: "80", plus: "8", minus: "15", sentiment: "negative", useCase: "Foil assist kits" },
  { rank: 6, name: "Saite 6384", users: "23", mentions: "46", plus: "12", minus: "2", sentiment: "positive", useCase: "Foil assist, efoil" },
  { rank: 7, name: "Flipsky 6374 140KV", note: "waterproof", users: "18", mentions: "45", plus: "6", minus: "4", sentiment: "positive", useCase: "Foil assist" },
  { rank: 8, name: "Saite 6374 130KV", note: "Foil Drive OEM", users: "14", mentions: "17", plus: "8", minus: "1", sentiment: "positive", useCase: "Foil assist (FD clone)" },
  { rank: 9, name: "Flipsky 65111", users: "11", mentions: "27", plus: "0", minus: "5", sentiment: "negative", useCase: "Efoil (underpowered)" },
  { rank: 10, name: "APS 6384 100KV", users: "9", mentions: "12", plus: "6", minus: "1", sentiment: "positive", useCase: "Foil assist" },
  { rank: 11, name: "Flipsky 63100", users: "9", mentions: "17", plus: "4", minus: "1", sentiment: "positive", useCase: "Efoil, heavy riders" },
  { rank: 12, name: "Flipsky 7070", note: "waterproof", users: "8", mentions: "14", plus: "2", minus: "3", sentiment: "mixed", useCase: "Foil assist" },
  { rank: 13, name: "APS 63100", users: "7", mentions: "13", plus: "4", minus: "1", sentiment: "positive", useCase: "Efoil, heavy riders" },
  { rank: 14, name: "Maytech/Michobby 6579 110KV", users: "7", mentions: "28", plus: "2", minus: "0", sentiment: "neutral", useCase: "Foil assist kits" },
  { rank: 15, name: "Michobby 6374", note: "waterproof", users: "7", mentions: "17", plus: "2", minus: "3", sentiment: "mixed", useCase: "Foil assist kits" },
  { rank: 16, name: "Flipsky 65121", users: "6", mentions: "10", plus: "1", minus: "1", sentiment: "neutral", useCase: "Efoil" },
  { rank: 17, name: "Flipsky 66112", users: "6", mentions: "9", plus: "0", minus: "0", sentiment: "neutral", useCase: "Half-power efoil" },
  { rank: 18, name: "Flipsky 65150", users: "5", mentions: "8", plus: "0", minus: "1", sentiment: "negative", useCase: "Efoil" },
  { rank: 19, name: "6354 (various eskate)", users: "4", mentions: "6", plus: "1", minus: "0", sentiment: "neutral", useCase: "Ultralight assist" },
  { rank: 20, name: "6362 (various)", users: "3", mentions: "9", plus: "0", minus: "0", sentiment: "neutral", useCase: "Ultralight assist" },
];

const sentimentLabel: Record<Sentiment, string> = {
  positive: "Positive",
  negative: "Negative",
  mixed: "Mixed",
  neutral: "Neutral",
};

const sentimentClass: Record<Sentiment, string> = {
  positive: s.badgePositive,
  negative: s.badgeNegative,
  mixed: s.badgeMixed,
  neutral: s.badgeNeutral,
};

/* ─── helper components ─── */

function Badge({ sentiment }: { sentiment: Sentiment }) {
  return (
    <span className={`${s.badge} ${sentimentClass[sentiment]}`}>
      {sentimentLabel[sentiment]}
    </span>
  );
}

function Quote({ text, author, url }: { text: string; author: string; url: string }) {
  return (
    <div className={s.quote}>
      {text} —{" "}
      <a className={s.quoteAuthor} href={url} target="_blank" rel="noopener noreferrer">
        @{author}
      </a>
    </div>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className={s.proscons}>
      {pros.length > 0 && (
        <div className={s.prosList}>
          <div className={s.prosTitle}>Pros</div>
          {pros.map((p, i) => (
            <div key={i} className={s.listItem}>{p}</div>
          ))}
        </div>
      )}
      {cons.length > 0 && (
        <div className={s.consList}>
          <div className={s.consTitle}>Cons</div>
          {cons.map((c, i) => (
            <div key={i} className={s.listItem}>{c}</div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── detail sections ─── */

function Motor1() {
  return (
    <div className={s.detailSection} id="bduav-6384">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#1</span>
        <span className={s.detailName}>AliExpress/BDUAV 6384 120KV</span>
        <span className={s.detailUsers}>~50 users</span>
        <Badge sentiment="positive" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          The most popular motor for DIY foil assist. Sold under the brand name <strong>BDUAV</strong> on
          AliExpress and eBay for ~$50. Also referred to as "Ali 6384", "cheap 6384", "generic 6384",
          "noname 6384", or "the $50 motor". The naming fragmentation is why this motor appears
          undercounted in keyword searches — people use dozens of names for the same motor.
        </p>
        <div className={s.specGrid}>
          <div className={s.specItem}><span className={s.specLabel}>Size:</span> <span className={s.specValue}>63x84mm</span></div>
          <div className={s.specItem}><span className={s.specLabel}>Stator:</span> <span className={s.specValue}>50mm</span></div>
          <div className={s.specItem}><span className={s.specLabel}>KV:</span> <span className={s.specValue}>120 (also 150, 170)</span></div>
          <div className={s.specItem}><span className={s.specLabel}>Price:</span> <span className={s.specValue}>~$50</span></div>
          <div className={s.specItem}><span className={s.specLabel}>Waterproof:</span> <span className={s.specValue}>No (DIY)</span></div>
          <div className={s.specItem}><span className={s.specLabel}>Mounting:</span> <span className={s.specValue}>M4, FD-compatible</span></div>
        </div>
        <Quote text="6384 is prob the best, cheap aliexpress BDUAV works great, if not the Flipsky is great too." author="patfoil" url="https://foil.zone/t/22282/2" />
        <Quote text="I find that the cheap 6384 120kv does the job both for foil drive and efoil, and since it is cheap, it is not a big deal if it breaks under heavy load." author="bbe" url="https://foil.zone/t/12927/574" />
        <Quote text="Those mounts are designed around the M4 thread placements on the BDUAV generic 6384 from our friend Ali." author="seagull_nz" url="https://foil.zone/t/22617" />
        <Quote text="They are the same mate. I have a FD hub fitted to a cheap BDUAV 6384." author="cephalofoil" url="https://foil.zone/t/12927/1311" />
        <ProsCons
          pros={[
            "~$50 vs $130+ for Flipsky or $170+ for Saite",
            "Adequate power for foil assist (50mm stator enough for most riders)",
            "M4 mounting pattern matches FD accessories",
            "If it breaks, just buy another one",
          ]}
          cons={[
            "Requires DIY waterproofing (epoxy coating, Corrosion-X)",
            "Bearings need upgrading to stainless/ceramic",
            "Phase wires need upgrade from 16AWG to 12AWG",
            "50mm stator = ~2/3 power of a true 55mm stator",
          ]}
        />
        <Quote text="Noname 45$ '6384' is 50mm wide." author="Larsb" url="https://foil.zone/t/12927/584" />
      </div>
    </div>
  );
}

function Motor2() {
  return (
    <div className={s.detailSection} id="flipsky-6384">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#2</span>
        <span className={s.detailName}>Flipsky 6384 140KV Waterproof</span>
        <span className={s.detailUsers}>69 users</span>
        <Badge sentiment="positive" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          The premium mainstream choice. Flipsky's newer waterproof version with a proper 55mm stator,
          ceramic bearing option, and factory waterproofing.
        </p>
        <Quote text="Flipsky dropped price for $30 on their new 6374/6384." author="Vitalii" url="https://foil.zone/t/21257/14" />
        <Quote text="I use the Flipsky 6384, there is quite a different sound and vibration to the generic 6384. Think bearings as cause of a lot of vibration and noise. Good motors." author="marcoz" url="https://foil.zone/t/21257/33" />
        <ProsCons
          pros={[
            "55mm stator (more power than BDUAV)",
            "Factory waterproofing",
            "Ceramic bearings available",
            "Better phase wires out of the box",
          ]}
          cons={[
            "~$130, 2.5x the price of the BDUAV",
          ]}
        />
      </div>
    </div>
  );
}

function Motor3() {
  return (
    <div className={s.detailSection} id="flipsky-65161">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#3</span>
        <span className={s.detailName}>Flipsky 65161 100/120KV</span>
        <span className={s.detailUsers}>42 users in assist context</span>
        <Badge sentiment="positive" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          The dominant efoil motor (1,334 total posts on the forum). Discussed in assist context by 42 users,
          typically for dual-purpose builds.
        </p>
        <Quote text="Most people use outrunners for their foil assist." author="yannpom" url="https://foil.zone/t/19983/20" />
        <Quote text="I am exploring options for a Foil Drive-ish e-assist option... effectively a half power efoil." author="juandesooka" url="https://foil.zone/t/14221/3" />
        <ProsCons
          pros={[
            "Massive thrust for dual-purpose efoil+assist",
            "Well-proven in hundreds of efoil builds",
          ]}
          cons={[
            "Too heavy for lightweight bolt-on assist",
            "Requires proper pod/nacelle (not simple mast clamp)",
            "Overkill for pump-assist use case",
          ]}
        />
      </div>
    </div>
  );
}

function Motor4() {
  return (
    <div className={s.detailSection} id="maytech-6384">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#4</span>
        <span className={s.detailName}>Maytech 6384</span>
        <span className={s.detailUsers}>40 users</span>
        <Badge sentiment="mixed" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          Widely available through Maytech and resellers. Older versions had quality issues; newer versions improved.
          Stator on older versions was only 50mm.
        </p>
        <Quote text="Maytech has a better build quality than regular Ali 6384. (Phase wires, waterproofing...) But power not enough for most e-foil systems." author="Bzhwindtalker" url="https://foil.zone/t/12927/1608" />
        <Quote text="I just tested the Maytech 6384 motor. I can fly with this wing without any problems, there is enough power, the speed is high, I am very pleased with the motor." author="rttn" url="https://foil.zone/t/12927/735" />
      </div>
    </div>
  );
}

function Motor5() {
  return (
    <div className={s.detailSection} id="maytech-6374">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#5</span>
        <span className={s.detailName}>Maytech/Michobby 6374</span>
        <span className={s.detailUsers}>35 users</span>
        <Badge sentiment="negative" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          The most criticized motor on the forum. Sold by Maytech directly and through Michobby (a Maytech reseller).
          Despite criticism, 35 users mention it because it was one of the first cheap complete kits available.
        </p>
        <Quote text="The Maytech assist motors are absolute junk. They have a lower longevity than a cardboard box in water. They are underpowered for what they are as their stator size is small." author="Jezza" url="https://foil.zone/t/21192/30" />
        <Quote text="The last foil kit I got from Maytech was absolute garbage — controller cooked multiple motors before I gave up and switched to Flipsky." author="Ewheeler" url="https://foil.zone/t/17966/11" />
      </div>
    </div>
  );
}

function Motor6() {
  return (
    <div className={s.detailSection} id="saite-6384">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#6</span>
        <span className={s.detailName}>Saite 6384</span>
        <span className={s.detailUsers}>23 users</span>
        <Badge sentiment="positive" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          Saite is the OEM factory behind Foil Drive motors. Their 6384 is the premium choice — filled with thermal
          epoxy from the factory, proper 56mm stator, high-quality windings. ~$170-200.
        </p>
        <Quote text="I know Saite is a great motor and in another class then the generic BDUAV 6384." author="gazlinux" url="https://foil.zone/t/21124/13" />
        <Quote text="Foil.Drive or the Saite motors are also completely filled with thermal epoxy and have no problems!" author="hangloose" url="https://foil.zone/t/19307/12" />
      </div>
    </div>
  );
}

function Motor78() {
  return (
    <>
      <div className={s.detailSection} id="flipsky-6374">
        <div className={s.detailHeader}>
          <span className={s.detailRank}>#7</span>
          <span className={s.detailName}>Flipsky 6374 140KV Waterproof</span>
          <span className={s.detailUsers}>18 users</span>
          <Badge sentiment="positive" />
        </div>
        <div className={s.detailBody}>
          <p className={s.detailDesc}>
            Flipsky's smaller outrunner. Most community members recommend the 6384 over the 6374 for the ~20% extra torque margin.
          </p>
          <Quote text="Flipsky 6374 or 6384 140kv motor is easier to source." author="JonathanC" url="https://foil.zone/t/20132/16" />
        </div>
      </div>
      <div className={s.detailSection} id="saite-6374">
        <div className={s.detailHeader}>
          <span className={s.detailRank}>#8</span>
          <span className={s.detailName}>Saite 6374 130KV</span>
          <span className={s.detailUsers}>14 users &middot; Foil Drive OEM</span>
          <Badge sentiment="positive" />
        </div>
        <div className={s.detailBody}>
          <p className={s.detailDesc}>
            <strong>The EXACT Foil Drive Gen 2 motor.</strong> The gold standard for replicating a Foil Drive at lower cost.
          </p>
          <Quote text="The EXACT genuine Foil Drive motor is Saite 6374, you can buy it waterproofed from Saite. No magic with Foil Drive Gen2 components." author="JonathanC" url="https://foil.zone/t/20132/16" />
          <Quote text="On original FD Assist (+, max, slim), Foildrive use 6374 130 KV 3200 W 5.6N.m to have 25kg of thrust at 3000 rpm on the propeller." author="Etiennebzh" url="https://foil.zone/t/20132/1" />
        </div>
      </div>
    </>
  );
}

function Motor9() {
  return (
    <div className={s.detailSection} id="flipsky-65111">
      <div className={s.detailHeader}>
        <span className={s.detailRank}>#9</span>
        <span className={s.detailName}>Flipsky 65111</span>
        <span className={s.detailUsers}>11 users</span>
        <Badge sentiment="negative" />
      </div>
      <div className={s.detailBody}>
        <p className={s.detailDesc}>
          Flipsky's smaller inrunner. Universally negative feedback for foil assist.
          <strong> Zero positive opinions found.</strong> Users who tried it wished they had chosen a 6384.
        </p>
        <Quote text="Can't really get enough power without pushing the current pretty high." author="Naterivera" url="https://foil.zone/t/12927/1307" />
      </div>
    </div>
  );
}

/* ─── other motors table ─── */

const otherMotors = [
  { name: "APS 6384 100KV", users: 9, note: "Quality motor, requires DIY waterproofing. Praised as \"ideal for foil assist\"" },
  { name: "Flipsky 63100", users: 9, note: "Big outrunner for heavy riders (90kg+) or tow boogie. Better heat dissipation" },
  { name: "Flipsky 7070 (waterproof)", users: 8, note: "Mixed results. \"Working very good\" but waterproofing concerns" },
  { name: "APS 63100", users: 7, note: "Quality big outrunner. Requires DIY waterproofing" },
  { name: "Maytech/Michobby 6579 110KV", users: 7, note: "Newer motor in Michobby kits. \"Cheap, powerful, works well in saltwater\"" },
  { name: "Michobby 6374 (waterproof)", users: 7, note: "Factory waterproofed Maytech 6374. Better than bare Maytech but limited" },
  { name: "Flipsky 65121", users: 6, note: "Between 65111 and 65161. Few builds" },
  { name: "Flipsky 66112", users: 6, note: "Discussed as \"half power efoil\" option" },
  { name: "Flipsky 65150", users: 5, note: "Mainly efoil. Rarely used for assist" },
  { name: "6354 (eskate motor)", users: 4, note: "Ultralight. \"Works well as assist... will not allow you to foil around in between waves\"" },
  { name: "5065 (eskate motor)", users: 10, note: "\"Pretty amazed that it worked. Not as efficient as the 6362 but not bad.\"" },
];

const manufacturers = [
  { brand: "Flipsky", users: 206, role: "Largest supplier. Motors, ESCs, and complete kits" },
  { brand: "Maytech / Michobby", users: "142 + 17", role: "Budget kits. Quality inconsistent. Michobby = Maytech reseller" },
  { brand: "AliExpress/BDUAV", users: "~50", role: "The generic 6384 120KV. Cheapest option" },
  { brand: "Saite", users: 35, role: "Foil Drive OEM factory. Premium quality" },
  { brand: "APS (Alien Power System)", users: "23 + 12", role: "Quality motors. Requires DIY waterproofing" },
  { brand: "Turnigy", users: 32, role: "Hobby motors repurposed" },
  { brand: "Freerchobby", users: 8, role: "AliExpress motors (63100, some 6384 variants)" },
];

interface Rec {
  label: string;
  motor: string;
  desc: string;
  avoid?: boolean;
}

const recommendations: Rec[] = [
  { label: "Best Overall (DIY)", motor: "AliExpress/BDUAV 6384 120KV", desc: "Cheapest, most popular, proven in 50+ builds. Requires waterproofing work." },
  { label: "Best Plug-and-Play", motor: "Flipsky 6384 140KV waterproof", desc: "Factory waterproofed, strongest stator, easy to source." },
  { label: "Foil Drive Clone", motor: "Saite 6374 130KV", desc: "The exact OEM motor. Premium quality." },
  { label: "Efoil / Dual-Purpose", motor: "Flipsky 65161 100KV", desc: "The efoil standard. Too heavy for pure assist." },
  { label: "Ultralight Assist", motor: "6354 or 5065", desc: "Only for experienced foilers who barely need assist." },
  { label: "Avoid", motor: "Maytech 6374 / Flipsky 65111", desc: "Underpowered stator, poor waterproofing, widely criticized. Zero positive feedback (65111).", avoid: true },
];

/* ─── main component ─── */

export function MotorRanking() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Foil Assist Motor Ranking by User Adoption</h1>
      <p className={s.subtitle}>
        Ranked by unique users on <a href="https://foil.zone">foil.zone</a> &middot; 73,280 posts analyzed &middot; March 2026
      </p>

      {/* ── Ranking table ── */}
      <table className={s.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Motor</th>
            <th style={{ textAlign: "center" }}>Users</th>
            <th style={{ textAlign: "center" }}>Mentions</th>
            <th style={{ textAlign: "center" }}>+</th>
            <th style={{ textAlign: "center" }}>-</th>
            <th>Sentiment</th>
            <th>Use Case</th>
          </tr>
        </thead>
        <tbody>
          {motors.map((m) => (
            <tr key={m.rank}>
              <td className={s.rank}>{m.rank}</td>
              <td>
                <span className={s.motorName}>{m.name}</span>
                {m.note && <span className={s.motorNote}> ({m.note})</span>}
              </td>
              <td className={s.numCell}><strong>{m.users}</strong></td>
              <td className={s.numCell}>{m.mentions}</td>
              <td className={s.plusCell}>{m.plus !== "0" ? m.plus : "—"}</td>
              <td className={s.minusCell}>{m.minus !== "0" ? m.minus : "—"}</td>
              <td><Badge sentiment={m.sentiment} /></td>
              <td className={s.useCase}>{m.useCase}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ fontSize: "0.8rem", color: "#888", marginTop: "-1rem", marginBottom: "2rem" }}>
        <strong>Users</strong> = unique forum members who mention owning or using this motor &middot;{" "}
        <strong>+/-</strong> = posts with positive/negative sentiment
      </p>

      <hr className={s.divider} />

      {/* ── Detail sections ── */}
      <Motor1 />
      <Motor2 />
      <Motor3 />
      <Motor4 />
      <Motor5 />
      <Motor6 />
      <Motor78 />
      <Motor9 />

      {/* ── Other motors ── */}
      <h2 className={s.sectionTitle}>#10-20 — Other Motors</h2>
      <table className={s.mfgTable}>
        <thead>
          <tr>
            <th>Motor</th>
            <th style={{ textAlign: "center" }}>Users</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {otherMotors.map((m, i) => (
            <tr key={i}>
              <td><strong>{m.name}</strong></td>
              <td style={{ textAlign: "center" }}>{m.users}</td>
              <td style={{ fontSize: "0.82rem", color: "#555" }}>{m.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className={s.divider} />

      {/* ── Recommendations ── */}
      <h2 className={s.sectionTitle}>Community Recommendations</h2>
      <div className={s.recsGrid}>
        {recommendations.map((r, i) => (
          <div key={i} className={`${s.recCard} ${r.avoid ? s.recCardAvoid : ""}`}>
            <div className={s.recLabel}>{r.label}</div>
            <div className={s.recMotor}>{r.motor}</div>
            <div className={s.recDesc}>{r.desc}</div>
          </div>
        ))}
      </div>

      {/* ── Buying tip ── */}
      <Quote
        text="There are differences in what is called 6384 motor, the cheapest ones have 10-15mm shorter stator and can therefore not produce the same power or torque. My advice to anyone buying a 6384 motor is to ask for the stator width."
        author="Larsb"
        url="https://foil.zone/t/12927/576"
      />

      <hr className={s.divider} />

      {/* ── Manufacturer overview ── */}
      <h2 className={s.sectionTitle}>Manufacturer Overview</h2>
      <table className={s.mfgTable}>
        <thead>
          <tr>
            <th>Brand</th>
            <th style={{ textAlign: "center" }}>Users</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((m, i) => (
            <tr key={i}>
              <td><strong>{m.brand}</strong></td>
              <td style={{ textAlign: "center" }}>{m.users}</td>
              <td style={{ fontSize: "0.82rem", color: "#555" }}>{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className={s.footer}>
        Data sourced from <a href="https://foil.zone">foil.zone</a> forum — 73,280 posts analyzed, March 2026.
      </p>
    </div>
  );
}
