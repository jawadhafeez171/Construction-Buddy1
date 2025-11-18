import React from 'react';
import ArchitecturalDrawingAnimation from './animations/ArchitecturalDrawingAnimation';
import StructuralDesignAnimation from './animations/StructuralDesignAnimation';
import InteriorDesignAnimation from './animations/InteriorDesignAnimation';
import ConstructionExecutionAnimation from './animations/ConstructionExecutionAnimation';
import WaterproofingAnimation from './animations/WaterproofingAnimation';
import BimAnimation from './animations/BimAnimation';

interface ServiceAnimationProps {
  serviceId: string;
}

const ServiceAnimation: React.FC<ServiceAnimationProps> = ({ serviceId }) => {
  switch (serviceId) {
    case 'architectural-structural-drawings':
      return <ArchitecturalDrawingAnimation />;
    case 'home-construction':
      return <ConstructionExecutionAnimation />;
    case 'commercial-construction':
      return <StructuralDesignAnimation />;
    case 'interiors':
      return <InteriorDesignAnimation />;
    case 'waterproofing-solutions':
      return <WaterproofingAnimation />;
    case 'building-information-modelling':
      return <BimAnimation />;
    default:
      return null;
  }
};

export default ServiceAnimation;