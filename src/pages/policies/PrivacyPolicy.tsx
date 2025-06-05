import { motion } from 'framer-motion';
import PolicyLayout from '../../components/policies/PolicyLayout';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PrivacyPolicy() {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      lastUpdated="2/19/2025"
    >
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">1. Information We Collect</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li><strong className="text-neutral-800 dark:text-neutral-200">Personal Information:</strong> Name, email, contact details.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">2. How We Use Your Information</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>To provide, improve, and personalize our services.</li>
              <li>To communicate updates, offers, and support messages.</li>
              <li>To ensure security and prevent unauthorized access.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">3. Sharing Your Information</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>We <strong className="text-neutral-800 dark:text-neutral-200">do not sell</strong> your data.</li>
              <li>We may share data with service providers for functionality and analytics.</li>
              <li>We may disclose data to comply with legal obligations.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">4. Data Security</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <p className="text-neutral-700 dark:text-neutral-300">We implement industry-standard security measures to protect your data. However, no system is 100% secure.</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">5. Your Privacy Rights</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
              <li>You can access, update, or request deletion of your personal data.</li>
              <li>You can opt-out of certain data collection practices.</li>
              <li>For requests, contact us at <strong className="text-primary-600 dark:text-primary-400">contact@yaksen.com</strong>.</li>
            </ul>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">6. External Links</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <p className="text-neutral-700 dark:text-neutral-300">We are not responsible for the privacy policies of third-party sites linked on our website.</p>
          </div>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-4 text-neutral-800 dark:text-neutral-200">7. Updates to This Policy</h2>
          <div className="bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 dark:border-neutral-700/50">
            <p className="text-neutral-700 dark:text-neutral-300">We may update this Privacy Policy periodically. Check this page for updates.</p>
          </div>
        </motion.section>
      </motion.div>
    </PolicyLayout>
  );
}
