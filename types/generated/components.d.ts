import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionAPropos extends Schema.Component {
  collectionName: 'components_section_a_propos';
  info: {
    displayName: '\u00C0 propos';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleColoredWord: Attribute.String;
    description: Attribute.Text;
    button: Attribute.String;
  };
}

export interface SectionAvantages extends Schema.Component {
  collectionName: 'components_section_avantages';
  info: {
    displayName: 'Avantages';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    avantages: Attribute.Relation<
      'section.avantages',
      'oneToMany',
      'api::avantage.avantage'
    >;
  };
}

export interface SectionKsPortageVousOffre extends Schema.Component {
  collectionName: 'components_section_ks_portage_vous_offres';
  info: {
    displayName: 'KS portage vous offre';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    offres: Attribute.Relation<
      'section.ks-portage-vous-offre',
      'oneToMany',
      'api::offre.offre'
    >;
    buttonTel: Attribute.String;
    buttonSimulation: Attribute.String;
  };
}

export interface SectionRealisezUneEstimation extends Schema.Component {
  collectionName: 'components_section_realisez_une_estimations';
  info: {
    displayName: 'R\u00E9alisez une estimation';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.a-propos': SectionAPropos;
      'section.avantages': SectionAvantages;
      'section.ks-portage-vous-offre': SectionKsPortageVousOffre;
      'section.realisez-une-estimation': SectionRealisezUneEstimation;
    }
  }
}
