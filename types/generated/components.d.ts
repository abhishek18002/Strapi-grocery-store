import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderedItemOrdereditem extends Schema.Component {
  collectionName: 'components_ordered_item_ordereditems';
  info: {
    displayName: 'Ordereditem';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer;
    amount: Attribute.Decimal;
    product: Attribute.Relation<
      'ordered-item.ordereditem',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordereditem': OrderedItemOrdereditem;
    }
  }
}
