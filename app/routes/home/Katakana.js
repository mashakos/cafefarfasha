const dimensions = {
  profile: {
    width: 135,
    height: 765,
  },
  project: {
    width: 750,
    height: 137,
  },
};

export function KatakanaSprites() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <symbol
          id="katakana-profile"
          viewBox={`0 0 ${dimensions.profile.width} ${dimensions.profile.height}`}
        >
          <path d="M32.544 651.088l1.152.288c.576.144 1.008.288 1.44.432l3.744.864c46.224 11.808 75.312 36.864 95.76 82.656-9.648 4.752-15.12 8.784-24.192 18.144-11.952-38.304-37.44-64.224-70.992-72.432v60.192c.144 15.264.288 18.72.864 23.76H14.4c.864-5.472 1.152-9.504 1.152-24.192v-73.44C6.624 666.928 0 660.016 0 651.232c0-9.072 7.2-16.272 16.272-16.272s16.128 7.056 16.272 16.128zm-24.48.144c0 4.464 3.744 8.208 8.208 8.208 4.32 0 8.064-3.744 8.064-8.208s-3.744-8.208-8.064-8.208c-4.464 0-8.208 3.744-8.208 8.208zm111.024-104.528v61.776h9.936v26.208c-7.92-.864-12.816-1.152-23.472-1.152H31.536c-6.192 0-10.656.144-16.56.576.432-5.04.576-7.92.576-17.424v-77.616c0-8.928 0-11.088-.576-17.856 5.04.288 10.224.432 16.992.432h73.008c11.088 0 18-.288 23.76-1.008v26.064h-9.648zm-23.04 0H38.592v61.776h57.456v-61.776zM12.96 403.44l12.528-12.96c2.448 1.584 3.168 1.872 8.064 3.024 26.784 6.48 44.784 15.12 61.2 28.944 15.984 13.392 27.504 29.52 39.168 54.864-10.944 5.616-14.832 8.64-24.192 18.144-6.768-20.736-15.552-35.856-28.224-48.528-12.24-12.096-25.344-19.44-42.624-23.904v59.76c0 13.968.144 16.56.864 24.192H13.68c1.008-6.192 1.152-10.512 1.152-24.624v-68.4c0-4.752-.432-7.344-1.872-10.512zm13.968-106.112l13.824-20.16c1.584 1.872 1.584 1.872 5.04 5.04 8.64 7.776 16.272 16.56 23.472 26.64h44.352c9.36 0 14.688-.144 19.872-.864v25.632c-5.616-.72-9.36-1.008-19.872-1.008H83.52c7.344 12.24 9.36 16.848 16.992 37.584-7.92 3.168-13.392 6.48-20.448 12.24-6.192-22.176-15.12-41.328-27.36-58.32-8.784-12.24-18.432-22.32-25.776-26.784zm55.584-35.264H54.72c1.008-6.768 1.296-14.544 1.296-29.52v-68.832c0-14.4-.288-19.872-1.296-29.52h27.792c-.72 6.912-.864 13.248-.864 29.664V232.4c0 16.128.144 20.88.864 29.664zM8.352 113.76l1.584-27.216c4.896.576 4.896.576 33.408 1.584 30.096.864 46.08 3.744 61.776 10.656 10.656 4.752 18.432 10.224 28.8 20.016-9.648 7.344-13.68 11.376-20.16 20.592-7.344-8.208-13.392-12.672-22.896-17.136-14.112-6.768-31.968-9.072-69.264-9.072-6.336 0-9.504.144-13.248.576zm-.72-40.896V45.792c5.904.864 8.208 1.008 16.704 1.152l75.456.72c-4.896-7.776-9.072-12.384-15.84-17.28-7.344-5.184-14.832-8.64-24.624-11.232C68.256 11.952 72 8.208 78.336 0c16.128 6.48 27.216 13.968 36.576 24.912 7.344 8.64 11.088 15.696 16.416 30.24 1.44 4.032 1.872 5.184 3.024 7.056l-12.96 12.384c-3.744-1.296-6.192-1.584-12.096-1.584l-85.248-.72h-5.184c-4.608 0-7.776.144-11.232.576z" />
        </symbol>
        <symbol
          id="katakana-project"
          viewBox={`0 0 ${dimensions.project.width} ${dimensions.project.height}`}
        >
          <path d="M113.904 33.552l-.288 1.152a18.13 18.13 0 0 1-.432 1.44l-.864 3.744c-11.808 46.224-36.864 75.312-82.656 95.76-4.752-9.648-8.784-15.12-18.144-24.192 38.304-11.952 64.224-37.44 72.432-70.992H23.76c-15.264.144-18.72.288-23.76.864v-25.92c5.472.864 9.504 1.152 24.192 1.152h73.44c.432-8.928 7.344-15.552 16.128-15.552 9.072 0 16.272 7.2 16.272 16.272s-7.056 16.128-16.128 16.272zm-.144-24.48c-4.464 0-8.208 3.744-8.208 8.208 0 4.32 3.744 8.064 8.208 8.064s8.208-3.744 8.208-8.064c0-4.464-3.744-8.208-8.208-8.208zm104.528 111.024h-61.776v9.936h-26.208c.864-7.92 1.152-12.816 1.152-23.472V32.544c0-6.192-.144-10.656-.576-16.56 5.04.432 7.92.576 17.424.576h77.616c8.928 0 11.088 0 17.856-.576-.288 5.04-.432 10.224-.432 16.992v73.008c0 11.088.288 18 1.008 23.76h-26.064v-9.648zm0-23.04V39.6h-61.776v57.456h61.776zm45.776-68.688L276.88 7.92c15.84 5.76 31.392 12.96 41.328 19.008L305.392 48.96C292 40.032 276.88 32.544 264.064 28.368zm73.008-16.992l14.256-4.752c5.04 6.624 9.36 14.688 12.672 22.896l-14.256 5.184c-3.888-9.504-7.488-16.272-12.672-23.328zm-84.24 52.416L266.08 43.2c15.408 6.048 28.944 12.816 40.176 20.448l-12.24 22.608c-10.368-8.064-26.496-16.848-41.184-22.464zM357.808 4.608L371.344 0c4.752 6.048 8.784 12.816 12.816 22.176l-13.824 5.04c-4.032-9.504-7.776-16.272-12.528-22.608zm-93.6 128.88l-7.2-27.36c12.672 0 30.96-3.888 44.352-9.216 26.928-10.656 45.936-31.824 56.16-62.928 6.912 7.776 13.536 13.392 21.168 18C360.4 97.2 327.712 121.968 274.432 131.04c-5.04 1.008-7.344 1.584-10.224 2.448zM449.952 64.8v42.912h22.464c9.216 0 13.68-.144 19.44-.864v21.888c-5.184-.432-9.216-.576-19.44-.576h-66.96c-10.512 0-12.672 0-19.584.576v-21.888c5.328.72 8.928.864 19.44.864h21.6V64.8h-13.248c-9.504 0-12.528.144-18.72.72V43.488c5.616.72 9.936 1.008 18.576 1.008h50.256c9.216 0 13.248-.288 18.864-1.008V65.52c-4.032-.432-9.936-.72-18.864-.72h-13.824zm97.472-62.064l27.216 4.896c-.72 1.296-1.008 1.728-1.728 3.6-.288.432-.576 1.296-1.008 2.16-.576 1.44-1.008 2.448-1.296 3.024-1.872 4.176-1.872 4.176-2.88 6.192l36.144-.432c5.616 0 7.2-.288 10.656-1.584L626.48 32.4c-1.728 2.88-2.16 3.744-4.176 10.224-7.344 23.904-17.136 42.624-29.808 57.024C579.392 114.624 563.12 126 539.504 136.8c-4.752-9.216-9.216-14.832-17.28-21.888 20.448-7.488 35.424-16.704 48.096-29.376 10.656-10.8 18.72-24.336 24.048-40.896l-38.304.432c-9.36 14.832-19.008 25.344-32.688 36.144-7.344-8.352-10.944-11.52-20.448-17.28 17.568-12.384 28.944-25.488 38.304-43.92 3.744-7.488 5.472-12.24 6.192-17.28zm137.936 130.32h-27.792c.576-6.48.864-10.656.864-22.032V27.216c0-11.664-.144-13.104-1.008-20.88h27.792c-.576 4.176-.72 11.376-.72 21.024v19.728c24.48 8.064 43.056 16.56 65.52 29.952l-13.68 24.48c-13.968-9.648-30.96-19.008-45.36-25.056-5.04-2.016-5.04-2.016-6.48-2.88v37.44c0 9.648.288 16.848.864 22.032z" />
        </symbol>
      </defs>
    </svg>
  );
}

export function Katakana({ type, ...rest }) {
  return (
    <svg
      aria-hidden="true"
      width={dimensions[type].width}
      height={dimensions[type].height}
      {...rest}
    >
      <use href={`#katakana-${type}`} />
    </svg>
  );
}
