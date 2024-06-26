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
    title2: Attribute.String;
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

export interface SectionKpis extends Schema.Component {
  collectionName: 'components_section_kpis';
  info: {
    displayName: 'Kpis';
  };
  attributes: {
    title: Attribute.String;
    numberExistance: Attribute.Integer;
    textExistance: Attribute.String;
    numberCash: Attribute.BigInteger;
    textCash: Attribute.String;
    numberEmployees: Attribute.Integer;
    textEmployees: Attribute.String;
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

export interface SectionNosPartenaires extends Schema.Component {
  collectionName: 'components_section_nos_partenaires';
  info: {
    displayName: 'Nos partenaires';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionPilotage extends Schema.Component {
  collectionName: 'components_section_pilotages';
  info: {
    displayName: 'Pilotage';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
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

export interface SectionTarifs extends Schema.Component {
  collectionName: 'components_section_tarifs';
  info: {
    displayName: 'Tarifs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tarifs: Attribute.Relation<
      'section.tarifs',
      'oneToMany',
      'api::tarif.tarif'
    >;
    features: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.a-propos': SectionAPropos;
      'section.avantages': SectionAvantages;
      'section.kpis': SectionKpis;
      'section.ks-portage-vous-offre': SectionKsPortageVousOffre;
      'section.nos-partenaires': SectionNosPartenaires;
      'section.pilotage': SectionPilotage;
      'section.realisez-une-estimation': SectionRealisezUneEstimation;
      'section.tarifs': SectionTarifs;
    }
  }
}
