import type * as React from 'react';

export type Lang = 'ua' | 'en';
export type IconName = 'clock' | 'people' | 'calendar' | 'tag' | 'phone' | 'pin' | 'floppy' | 'monitor' | 'image' | 'arrow-right' | 'arrow-down' | 'check' | 'alert' | 'menu' | 'close';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary — заливка action-bg; secondary — контур */
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  block?: boolean;
  icon?: IconName;
  iconEnd?: IconName;
  /** перетворює кнопку на посилання-якір */
  href?: string;
  /** для disabled: видимий підпис під кнопкою з причиною («Більше експонатів з'явиться згодом»); пов'язаний через aria-describedby */
  disabledNote?: React.ReactNode;
  target?: string;
  rel?: string;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface LangSwitchProps { value?: Lang; onChange?: (lang: Lang) => void; /** disabled — мова ще недоступна; причину покажіть текстом поруч */ options?: { id: Lang; label: string; lang: string; disabled?: boolean; disabledNote?: string }[]; className?: string }
export declare function LangSwitch(props: LangSwitchProps): React.ReactElement;

export interface PixelIconProps { name: IconName; size?: 'md' | 'lg'; label?: string; className?: string }
export declare function PixelIcon(props: PixelIconProps): React.ReactElement | null;

export interface WindowProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  titleIcon?: IconName;
  controls?: boolean;
  media?: React.ReactNode;
  as?: 'article' | 'div' | 'section' | 'aside';
  bodyClassName?: string;
  children?: React.ReactNode;
}
export declare function Window(props: WindowProps): React.ReactElement;

export interface OfferCardProps {
  kind?: 'excursion' | 'course';
  title: string;
  description?: string;
  /** excursion: тривалість */
  duration?: string;
  /** course: кількість занять */
  sessions?: string;
  audience: string;
  price: string;
  /** значення для форми; типово title */
  value?: string;
  onBook?: (value: string) => void;
  ctaLabel?: string;
  placeholder?: boolean;
  /** запис тимчасово закрито: кнопка неактивна, під нею — цей підпис із причиною */
  closedNote?: React.ReactNode;
  windowTitle?: string;
  headingLevel?: 2 | 3 | 4;
  lang?: Lang;
  className?: string;
}
export declare function OfferCard(props: OfferCardProps): React.ReactElement;

export interface ExhibitCardProps {
  title: string;
  year: string;
  caption: string;
  image?: string;
  imageAlt?: string;
  icon?: IconName;
  index?: number;
  placeholder?: boolean;
  windowTitle?: string;
  headingLevel?: 2 | 3 | 4;
  lang?: Lang;
  className?: string;
}
export declare function ExhibitCard(props: ExhibitCardProps): React.ReactElement;

export interface SectionHeadingProps { title: React.ReactNode; intro?: React.ReactNode; command?: string; id?: string; level?: 1 | 2 | 3; className?: string }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;

export interface CursorProps { blink?: boolean }
export declare function Cursor(props: CursorProps): React.ReactElement;

export interface PlaceholderTagProps { children?: React.ReactNode; lang?: Lang; title?: string; className?: string }
export declare function PlaceholderTag(props: PlaceholderTagProps): React.ReactElement;

export interface HeaderProps {
  name?: string;
  logo?: string | React.ReactNode;
  nav?: { href: string; label: string }[];
  navLabel?: string;
  /** href розділу, який зараз на екрані (`#exhibits`): пункт отримує aria-current і піксельний квадрат перед назвою */
  current?: string;
  lang?: Lang;
  onLangChange?: (lang: Lang) => void;
  ctaHref?: string;
  ctaLabel?: string;
  onCta?: (e: React.MouseEvent) => void;
  /** примусово компактна (мобільна) шапка */
  compact?: boolean;
  defaultOpen?: boolean;
  theme?: 'light' | 'blue';
  className?: string;
}
export declare function Header(props: HeaderProps): React.ReactElement;

export interface HeroProps {
  title?: React.ReactNode;
  slogan?: React.ReactNode;
  actions?: { href: string; label: string; icon?: IconName; onClick?: (e: React.MouseEvent) => void }[];
  command?: string | null;
  blink?: boolean;
  decor?: boolean;
  theme?: 'light' | 'blue';
  id?: string;
  lang?: Lang;
  className?: string;
}
export declare function Hero(props: HeroProps): React.ReactElement;

export interface FieldProps { label: React.ReactNode; hint?: React.ReactNode; error?: React.ReactNode; required?: boolean; requiredText?: string; id?: string; className?: string; children: React.ReactElement }
export declare function Field(props: FieldProps): React.ReactElement;

export interface BookingRequest { direction: string; name: string; phone: string; lang: Lang }
export interface BookingFormProps {
  options: { label: string; items: (string | { value: string; label: string })[] }[];
  value?: string;
  valueStamp?: number;
  focusOnValue?: boolean;
  onSubmit?: (data: BookingRequest) => void | Promise<unknown>;
  consentLabel?: React.ReactNode;
  submitLabel?: string;
  successText?: string;
  windowTitle?: string;
  /** стан для макетів і перевірки: 'sending' — надсилання, 'error' — плашка «не вдалося» і кнопка «Надіслати ще раз» */
  initialState?: 'idle' | 'sending' | 'sent' | 'error';
  /** початкові ім'я й телефон (для макетів) */
  initialValues?: { name?: string; phone?: string };
  initialErrors?: boolean;
  id?: string;
  lang?: Lang;
  className?: string;
}
export declare function BookingForm(props: BookingFormProps): React.ReactElement;

export interface ContactsBlockProps {
  address: string;
  phone: string;
  hours: { days: string; time: string }[];
  mapImage?: string;
  routeHref?: string;
  placeholder?: boolean;
  windowTitle?: string;
  lang?: Lang;
  className?: string;
}
export declare function ContactsBlock(props: ContactsBlockProps): React.ReactElement;

export interface FooterProps {
  name?: string;
  logo?: string | React.ReactNode;
  tagline?: string;
  address?: string;
  phone?: string;
  hoursShort?: string;
  year?: number;
  copyright?: string;
  lang?: Lang;
  onLangChange?: (lang: Lang) => void;
  theme?: 'light' | 'blue';
  className?: string;
}
export declare function Footer(props: FooterProps): React.ReactElement;

/** Плавна прокрутка до елемента за id (миттєва при prefers-reduced-motion) */
export declare function scrollToId(id: string): void;

declare global {
  interface Window {
    SCM: {
      Button: typeof Button; LangSwitch: typeof LangSwitch; PixelIcon: typeof PixelIcon; Window: typeof Window;
      OfferCard: typeof OfferCard; ExhibitCard: typeof ExhibitCard; SectionHeading: typeof SectionHeading;
      Cursor: typeof Cursor; PlaceholderTag: typeof PlaceholderTag; Header: typeof Header; Hero: typeof Hero;
      Field: typeof Field; BookingForm: typeof BookingForm; ContactsBlock: typeof ContactsBlock; Footer: typeof Footer;
      scrollToId: typeof scrollToId;
    };
  }
}
