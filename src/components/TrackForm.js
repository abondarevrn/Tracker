import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

import Spacer from './Spacer';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} placeholder="Enter name" onChangeText={changeName} />
      </Spacer>
      {recording ? (
        <Button
          title="Stop recording"
          buttonStyle={styles.stopButton}
          onPress={stopRecording}
          containerStyle={{ marginHorizontal: 16, marginBottom: 8 }}
        />
      ) : (
        <Button
          title="Start recording"
          style={styles.startButton}
          onPress={startRecording}
          containerStyle={{ marginHorizontal: 16, marginBottom: 8 }}
        />
      )}
      {!recording && locations.length > 1 ? (
        <Button
          title="Save track"
          buttonStyle={styles.saveButton}
          onPress={saveTrack}
          containerStyle={{ marginHorizontal: 16 }}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  stopButton: { backgroundColor: '#e74c3c' },
  startButton: {},
  saveButton: { backgroundColor: '#2ecc71' },
});

export default TrackForm;
