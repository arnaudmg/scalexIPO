declare module "react-simple-maps" {
  import { ComponentType, SVGProps } from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      center?: [number, number];
      scale?: number;
      rotate?: [number, number, number];
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    children?: React.ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Geography[] }) => React.ReactNode;
  }

  export interface Geography {
    rsmKey?: string;
    properties?: Record<string, unknown>;
  }

  export interface GeographyProps {
    geography: Geography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: SVGProps<SVGPathElement>;
      hover?: SVGProps<SVGPathElement>;
      pressed?: SVGProps<SVGPathElement>;
    };
    onMouseEnter?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseMove?: (event: React.MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<SVGPathElement>) => void;
    onClick?: (event: React.MouseEvent<SVGPathElement>) => void;
  }

  export interface AnnotationProps {
    subject: [number, number];
    dx?: number;
    dy?: number;
    connectorProps?: SVGProps<SVGPathElement>;
    children?: React.ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Annotation: ComponentType<AnnotationProps>;
}
