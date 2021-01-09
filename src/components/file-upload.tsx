import * as React from 'react';
import { Trans } from '@lingui/macro';

// components
import Picture from '../img/picture';
import Loading from '../loading/loading.block';
// icons
import { IconUpload } from '../icon/glyphs';

// styles
import './file-upload.css';

type Props = {
  imageLink?: string;
  isLoading?: boolean;
  dashed?: boolean;
  uploadImage: (file: string, base64: string | ArrayBuffer | null) => void;
};

export default function FileUpload(props: Props) {
  const { imageLink, uploadImage, isLoading, dashed, ...attrs } = props;
  const [fileName, setFileName] = React.useState(null);

  return (
    <div styleName="upload-image-wrap">
      <div styleName="input-file-wrap">
        <input
          id="upload.image"
          name="upload.image"
          accept=".png, .jpg"
          type="file"
          styleName="input-file"
          onChange={e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
              uploadImage(file.name, reader.result);
            };
            reader.readAsDataURL(file);
            setFileName(file.name);
          }}
          {...attrs}
        />
        <div styleName={dashed ? 'dashed-btn' : 'fake-btn'}>
          <React.Fragment>
            <span>
              <Trans>Загрузить изображение</Trans>
            </span>
            {!dashed ? <IconUpload width="28px" height="28px" white /> : null}
          </React.Fragment>
        </div>
        {isLoading ? (
          <div styleName="loading-wrap">
            <Loading />
          </div>
        ) : null}
      </div>
      {imageLink ? (
        <div styleName="picture-wrap">
          <Picture width="160px" height="80px" src={imageLink} />
        </div>
      ) : null}
    </div>
  );
}

FileUpload.defaultProps = {
  imageLink: '',
  isLoading: false,
};
