import { StyleSheet, Platform } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

export const EyeIcon = ({ color = '#64748B', size = 20 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <Circle cx="12" cy="12" r="3" />
  </Svg>
);

export const EyeOffIcon = ({ color = '#64748B', size = 20 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <Line x1="1" y1="1" x2="23" y2="23" />
  </Svg>
);

// ─── Design tokens ────────────────────────────────────────────────────────────
const COLORS = {
  sky: '#6689A4',

  brandPrimary: '#3B66A3',
  brandPrimaryGlow: 'rgba(59, 102, 163, 0.45)',

  textDark: '#0F172A',
  textLabel: '#334155',
  textMuted: '#64748B',
  textPlaceholder: '#94A3B8',
  textLink: '#1D4ED8',

  inputBg: '#F8FAFC',
  inputBorder: '#E2E8F0',

  cardBg: 'rgba(255, 255, 255, 0.95)',
  cardBorder: 'rgba(255, 255, 255, 0.80)',
  cardShadow: 'rgba(15, 30, 54, 0.28)',

  white: '#FFFFFF',
};

// ─── Styles ───────────────────────────────────────────────────────────────────
export const styles = StyleSheet.create({
  /* Layout */
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.sky,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: Platform.OS === 'ios' ? 140 : 150,
  },

  /* Background layers */
  backgroundImage: {
    flex: 1,
  },
  backgroundPhoto: {
    opacity: 0.8,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(85, 128, 160, 0.42)',
  },
  contentLayer: {
    flex: 1,
    position: 'relative',
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 16,
  },
  logoFrame: {
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  brandLogo: {
    width: 220,
    height: 64,
  },
  headerSpacer: {
    flex: 1,
    minHeight: 48,
  },

  /* Card */
  card: {
    marginHorizontal: 20,
    backgroundColor: COLORS.cardBg,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.cardShadow,
        shadowOffset: { width: 0, height: 18 },
        shadowOpacity: 1,
        shadowRadius: 36,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  cardHeader: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textDark,
    letterSpacing: -0.5,
    lineHeight: 28,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.textMuted,
    marginTop: 4,
  },

  /* Form fields */
  fieldGroup: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textLabel,
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  input: {
    height: 44,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    fontSize: 14,
    color: COLORS.textDark,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: 10,
    height: 44,
  },
  inputPassword: {
    flex: 1,
    height: 44,
    paddingLeft: 16,
    paddingRight: 8,
    fontSize: 14,
    color: COLORS.textDark,
  },
  eyeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },

  /* Forgot password */
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 12,
    paddingVertical: 2,
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textLink,
  },

  /* Primary button */
  primaryButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.brandPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.brandPrimaryGlow,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 20,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  /* Switch portal link */
  switchContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 2,
  },
  switchText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textLink,
    textDecorationLine: 'none',
  },
});
