function MethodSelections() {
  return (
    <>
      <div>
        <div>
          <input type={'checkbox'} name="method" value={'PositionRank'} />{' '}
          PositionRank
        </div>
        <div>
          <input type={'checkbox'} name="method" value={'TextRank'} /> TextRank
        </div>
      </div>
      <div>
        <div>
          <input type={'checkbox'} name="method" value={'TopicRank'} />{' '}
          TopicRank
        </div>
        <div>
          <input type={'checkbox'} name="method" value={'YAKE'} /> YAKE
        </div>
      </div>
    </>
  );
}

export default MethodSelections;
