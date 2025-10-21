"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), { ssr: false });
const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), { ssr: false });
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const data = [
  { name: "Play-to-Earn", value: 35 },
  { name: "Team", value: 15 },
  { name: "Public Sale", value: 10 },
  { name: "Ecosystem", value: 15 },
  { name: "Staking", value: 10 },
  { name: "Liquidity", value: 10 },
  { name: "Esports", value: 5 },
];

const colors = ["#FFB200", "#FF6A00", "#FF3D6E", "#A78BFA", "#34D399", "#60A5FA", "#F59E0B"];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-24 md:py-32">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="font-[var(--font-orbitron)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Tokenomics</span>
          </h2>
          <p className="text-lg md:text-xl text-subink max-w-3xl mx-auto leading-relaxed">
            A sustainable economy designed for warriors, creators, and guilds to thrive together.
          </p>
        </motion.div>

        <div className="glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative">
                <ResponsiveContainer width={280} height={280}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={110}
                      innerRadius={65}
                      fill="#8884d8"
                      dataKey="value"
                      strokeWidth={2}
                      stroke="rgba(255,255,255,0.8)"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "rgba(255,255,255,0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ink">100M</div>
                    <div className="text-xs text-subink">Total Supply</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legend */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-2"
            >
              {data.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group"
                >
                  <div
                    className="w-5 h-5 rounded-lg flex-shrink-0 shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: colors[i] }}
                  />
                  <span className="text-ink font-bold flex-1 text-sm md:text-base">{item.name}</span>
                  <span className="text-lg md:text-xl font-bold text-gradient">{item.value}%</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 pt-6 border-t border-black/10 text-center"
          >
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-subink font-semibold text-sm md:text-base">
              <div>
                Total Supply: <span className="text-primary font-bold">100,000,000 $SATRIA</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-black/10" />
              <div>
                Initial: <span className="text-primary font-bold">$0.10</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-black/10" />
              <div>
                Network: <span className="text-primary font-bold">Solana (SPL)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
