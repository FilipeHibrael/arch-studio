import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ISectionDetailsAndMap } from '../../context/DataContext';

const ContactMap = ({ data }: { data: ISectionDetailsAndMap }) => {
  const pinIcon = new Icon({
    iconUrl: './pin-icon.png',
    iconSize: [40, 49],
  });

  return (
    <div className="mb-48 sm:mb-24">
      <MapContainer
        className="h-[540px] w-full sm:h-[440px]"
        center={[
          data.defaultMap.coordinates.lat,
          data.defaultMap.coordinates.lng,
        ]}
        zoom={data.defaultMap.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>'
          url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png"
        />
        {data.offices.map((item, index) => (
          <Marker
            key={index}
            position={[item.coordinates.lat, item.coordinates.lng]}
            icon={pinIcon}
          >
            <Popup>
              <ul className="flex flex-col gap-1">
                <li className="font-bold mb-1">{item.name}</li>
                <li>{item.mail}</li>
                <li>{item.phone}</li>
              </ul>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ContactMap;
