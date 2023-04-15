export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface IBenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface IClassType {
  name: string
  description?: string
  image: string
}
